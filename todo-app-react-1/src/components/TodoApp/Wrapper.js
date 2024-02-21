/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import Todo from '../TodoApp/todo';
import TodoForm from '../TodoApp/todoForm';
import EditTodoForm from '../TodoApp/EditForm';

import '../style/Wrapper.css'
import {v4 as uuidv4} from "uuid"

uuidv4();

function Wrapper() {
	const[todos, setTodos] = useState([])
	
	// useEffect
	useEffect(() =>{
		const saveTodos = JSON.parse(localStorage.getItem('todos')) || [] 

		setTodos(saveTodos)
	},[])

	// Func LocalStorage
	const callLocalStorage = (data) =>{
		localStorage.setItem('todos', JSON.stringify(data))
	}

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
		callLocalStorage(newTodos)
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
		callLocalStorage(newTodos)
	}
	// delete Todo
	const deleteItem = (id) =>{
		const newTodos = todos.filter(todo => todo.id !== id)

		setTodos( newTodos)

		// add localStorage
		callLocalStorage(newTodos)
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
		callLocalStorage(newTodos)
    }
    // Edit Task
	const editTask = (task,id) =>{
		// method map() để check id có trùng với id đã onClick , 
		// nếu không trùng thì return về todo và không làm gì cả
		// nếu trùng thì method map() sẻ trả ra 1 mảng object mới và có thể sửa lại phần tử complete thành phủ định

		const newTodos = todos.map((todo) => {
			if(todo.id === id) {
				return{
                    ...todo, task, isEdit:!todo.isEdit
                }
			}
			return todo
		})

		setTodos(newTodos)

		// add Local Storage
		callLocalStorage(newTodos)
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