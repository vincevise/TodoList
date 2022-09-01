import React from 'react'
import './ListItem.css'
import * as FaIcons from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { removeTask,toggleCompleted } from '../store/todoSlice'
import { Link } from 'react-router-dom'
import { getId } from './DetailsSlice'

const ListItem = ({title,body,check,id}) => {
    const titleSlice = title.slice(0,20)
    const info =  body.slice(0,200)
    const dispatch = useDispatch()

    const handleCompleteClick = () =>{
        dispatch(
            toggleCompleted({id:id,isCompleted:!check})
        )
    }

    const handleDeleteClick = () =>{
        dispatch(removeTask({id:id}))
    }

    const returnId = () =>{
        dispatch(getId(id))
    }



  return (
    <div className={ check ? `listItem-container-checked` : `listItem-container`}   >
        <div className="listItem-header"> 
            {check ? <input 
                type="checkbox"  
                className='checkbox' 
                checked 
                onChange={handleCompleteClick}/> : <input 
                type="checkbox"  
                className='checkbox'  
                onChange={handleCompleteClick}/> }
            
            <h3>{titleSlice} </h3>
            <span 
            onClick={handleDeleteClick}
            ><FaIcons.FaTrash className='trash-logo'  
            /></span>
             
        </div>
        <hr />
        <Link to='/details'>
            <p className='listItem-body' onClick={returnId}> {info} </p>
        </Link>
        
    </div>
  )
}

export default ListItem