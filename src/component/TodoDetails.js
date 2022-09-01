import React from 'react'
import { useSelector } from 'react-redux'
import './TodoDetails.css'
import * as AiIcons from 'react-icons/ai'


const TodoDetails = () => {
    const {details} = useSelector((state)=>state)
    console.log(details.id)
    const {data} = useSelector((state)=>state.todo);
    let index = data?.findIndex((item)=>item.id === details.id)
    console.log(data[index])
    let title = data[index].title
    let body = data[index].body;
    let completed = data[index].isCompleted
    const para = body ? body : 'nothing here'

  return (
    <div className='todo-details'>
        <div className="todo-details-header">
            <h1>{title ? title : 'Dummy Text'}</h1>
             {completed ? <h3><AiIcons.AiOutlineCheckCircle className='completed-logo' 
             size={25}  
             />Done</h3> : ''} 
        </div>
        
        <hr />
        <textarea  spellCheck="false" autoCorrect='off' type="text" value={para} className='todo-details-body'/> 
    </div>
  )
}

export default TodoDetails