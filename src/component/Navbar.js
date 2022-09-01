import React from 'react'
import './NavBar.css'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux' 
import {searchItem} from '../store/todoSlice'


const Navbar = () => {
 
  const dispatch = useDispatch(); 
  const handleChange = (e)=>{ 
     dispatch(searchItem(e.target.value))
  }

  return (
    <Link to='/'>
    <div className='nav-bar'>
        <h2>Lets D<AiIcons.AiOutlineCheckCircle className='check-logo'  /> This  </h2>
        <input 
          type="text" 
          className='search-bar' 
          placeholder='Type to search..'
          onChange={handleChange}
        />
    </div>
    </Link>
  )
}

export default Navbar