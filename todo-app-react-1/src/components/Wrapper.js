/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './style/Wrapper.css'
import Todo from './todo';
import TodoForm from './todoForm';
import {v4 as uuidv4} from "uuid"
import EditTodoForm from './EditForm';
uuidv4();

function Wrapper() {
	const[todos, setTodos] = useState([])

	// Add new todo
	const addTodo = (todo) =>{	
		setTodos([...todos, {
			id: uuidv4(),
			task: todo,
			complete:false,
			isEdit: false
		}])
		// Check user sử dụng dấu cách sẻ loại bỏ
		if(!todo.task || /^\s*$/.test(todo.task)){
			return
		}
	}	
	// Check Todo well done
	const toggleComplete = (id) =>{
		setTodos( todos.map((todo) => {
			if(todo.id === id){
                todo.complete =!todo.complete
            }
            return todo
		}))
	}
	// delete Todo
	const deleteItem = (id) =>{
		setTodos( todos.filter(todo => todo.id !== id))
	}

	// Edit Todo Click id
	const editTodo = (id) =>{
		setTodos(
			todos.map((todo) =>
			  todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo
			)
		  );
    }
    // Edit Task
	const editTask = (task,id) =>{
		setTodos(todos.map((todo) => {
			if(todo.id === id) {
				return{
                    ...todo, task, isEdit:!todo.isEdit
                }
			}
			return todo
		}))
	}

	return ( 
		<div className="wrapper">
			<h1>Todo App</h1>

			<TodoForm addTodo={addTodo}/>

			{todos.map((todo) =>(
				todo.isEdit ? (
					<EditTodoForm editTodo={editTask} key={todo.id}  task={todo}/>
				) : (
					<Todo  
						task={todo} 
						key={todo.id} 
						toggleComplete={toggleComplete}
						deleteItem={deleteItem}
						editTodo={editTodo}
					/>
				)
			))}
		</div>

	 );
}

export default Wrapper;