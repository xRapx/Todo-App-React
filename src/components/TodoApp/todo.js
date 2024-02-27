import React from "react";
import "../style/todo.css"

function Todo({task,toggleComplete,deleteItem,editTodo}) {

	return ( 
			<div className="warpper-list">
				<p 					
					className={`${task.complete ? "completed" : "incompleted"}`}
					onClick={() =>toggleComplete(task.id)}
				>
					{task.task}
				</p>

				<div className="border-left">
					<button className="btn-submit" onClick={() =>editTodo(task.id)}>Edit </button>
					<button className="btn-submit" onClick={() =>deleteItem(task.id)}>Delete</button>
				</div>
			</div>
		
	 );
}

export default Todo;