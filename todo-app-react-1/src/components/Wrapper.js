/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import './style/Wrapper.css'
import Todo from './todo';
import TodoForm from './todoForm';
import {v4 as uuidv4} from "uuid"
import EditTodoForm from './EditForm';
uuidv4();

function Wrapper() {
	const[todos, setTodos] = useState([])
	
	// useEffect
	useEffect(() =>{
		const saveTodos = JSON.parse(localStorage.getItem('todos')) || [] 

		setTodos(saveTodos)
	},[])

	// Add new todo
	const addTodo = (todo) =>{	

		const newTodos = [...todos, {
			id: uuidv4(),
			task: todo,
			complete:false,
			isEdit: false
		}]

		setTodos(newTodos)

		// Check user sử dụng dấu cách sẻ loại bỏ
		if(!todo.task || /^\s*$/.test(todo.task)){
			return
		}

		// add localStorage
		localStorage.setItem('todos', JSON.stringify(newTodos))

	}	
	// Check Todo well done
	const toggleComplete = (id) =>{

		const newTodos = todos.map((todo) => {
			if(todo.id === id){
                todo.complete =!todo.complete
            }
            return todo
		})

		setTodos( newTodos)

		// add localStorage
		localStorage.setItem('todos', JSON.stringify(newTodos))
	}
	// delete Todo
	const deleteItem = (id) =>{
		const newTodos = todos.filter(todo => todo.id !== id)

		setTodos( newTodos)

		// add localStorage
		localStorage.setItem('todos', JSON.stringify(newTodos))
	}

	// Edit Todo Click id
	const editTodo = (id) =>{
		const newTodos = todos.map(todo =>{
			if(todo.id === id){
				return {
					...todo, isEdit:!todo.isEdit
				}
			}
			return todo
		})

		setTodos(newTodos);

		// add localStorage
		localStorage.setItem('todos', JSON.stringify(newTodos))
    }
    // Edit Task
	const editTask = (task,id) =>{
		const newTodos = todos.map((todo) => {
			if(todo.id === id) {
				return{
                    ...todo, task, isEdit:!todo.isEdit
                }
			}
			return todo
		})

		setTodos(newTodos)

		// add Local Stogage
		localStorage.setItem('todos', JSON.stringify(newTodos))
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