import React from 'react'
import './TaskList.css'
import ListItem from './ListItem'
import { useSelector } from 'react-redux' 

const TaskList = () => {
    const todoData = useSelector( (state)=>state.todo.data)
    const {searchResults} = useSelector( (state)=>state.todo)
     
    console.log(searchResults)
      let searchData = todoData.filter((item)=> searchResults.includes(item.id)) || todoData
      let displayData = todoData || searchData;
      if (searchData.length!==0){
        displayData = searchData
      } 
 

   

  return (
    <div className='taskList-container'>
        {displayData?.map((item)=>(
              <ListItem title={item.title} body={item.body} check={item.isCompleted} key={item.id} id={item.id}/>
        ))}
        
    </div>
  )
}

export default TaskList