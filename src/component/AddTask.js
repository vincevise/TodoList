import React from 'react'
import './AddTask.css'
import * as AiIcons from 'react-icons/ai'
import { addTask } from '../store/todoSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const AddTask = () => {
    const dispatch = useDispatch();
    const [title,setTitle] = useState('');
    const [body,setBody] = useState(''); 
    const {data} = useSelector(state=>state.todo);
    let completedData = data.filter((item)=>item.isCompleted === true) 

    const handleTitle = (e) =>{
        setTitle(e.target.value)
    }

    const handleBody = (e) =>{
        setBody(e.target.value)
    }
    
    const onHandleSubmit = (e) =>{
        e.preventDefault();
        if(title && body){
            dispatch(addTask({title:title,body:body,isCompleted:false,id:Date.now()})) 
        }else{
            alert('the note is empty')
        } 
        setTitle('')
        setBody('')
    }

  return (
    <form className='add-task' onSubmit={onHandleSubmit} >
        <div className='add-taskInput'> 
            <input 
                type="text" 
                className='addTask__title'  
                placeholder='Title' 
                name='title'
                onChange={handleTitle}
                value={title}
            />
            <input 
                type="text" 
                className='addTask__info' 
                name='body' 
                placeholder='Take note..'
                onChange={handleBody}
                value={body}
            />
            
        </div>
        <div className="add-taskButton">
            <div className='task-completed'>Tasks Completed: {completedData.length}</div>
            <button  type='submit'><AiIcons.AiOutlinePlus className='plus-icon' />Add Task</button>
            
        </div>
    </form>
  )
}

export default AddTask