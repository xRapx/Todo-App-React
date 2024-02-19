import {useState} from 'react'

function EditTodoForm({editTodo,task}) {
	const [value, setValue] = useState(task.task)

	const handleSubmit = (e) =>{
		e.preventDefault()
		editTodo(value, task.id);
	}	

	return ( 
		<div>

			<form action="" onSubmit={handleSubmit} className='todo-form'>
				<input type="text" className='todo-input' value={value} placeholder='Update Todo Here....' onChange={(e) =>setValue(e.target.value)}/>
				<button type="submit" className="btn-submit">Edit Task</button>
			</form>
		</div>
	 );
}

export default EditTodoForm;