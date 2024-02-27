import {useState, useRef} from 'react'
import "../style/todoForm.css"

function TodoForm({addTodo,task}) {
	const [todo, setTodo] = useState("")

	const inputRef= useRef()

	const handleSubmit = (e) =>{
		e.preventDefault()
		if(todo === '') {
			alert('Không để trống')
			inputRef.current.focus()
			return
		}else{
			addTodo(todo,task);
			
		}		
		setTodo('')
		inputRef.current.focus()
	}	

	return ( 
		<div>

			<form action="" onSubmit={handleSubmit} className='todo-form'>
				<input type="text" ref={inputRef} className='todo-input' value={todo} placeholder='Enter Todo Here....' onChange={(e) =>setTodo(e.target.value)} />
				<button type="submit" className="btn-submit">ADD</button>
			</form>
		</div>
	 );
}

export default TodoForm;