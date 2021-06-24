import React, { useState } from "react";
import { Tasks } from "./Task";
import { Error } from "./Error";
export function ToDoList() {
	const [tasks, setTasks] = useState(["Hacer cafe", "pasear perro"]);
	const [task, setTask] = useState("");
	const [error, setError] = useState(false);

	function addTask(event) {
		if (task === "") {
			setError(true);
			return;
		}
		if (event.key == "Enter") {
			setTasks([...tasks, task]);
			setTask("");
		}
	}
	function deleteTask(id) {
		const newTasks = tasks.filter((task, index) => {
			return index != id;
		});
		setTasks(newTasks);
	}
	return (
		<div className="title justify-content-center">
			<div className="todolist-box container">
				<div className="text-center mt-5">
					<h1>ToDoList</h1>
				</div>
				<div className="row justify-content-center">
					<div className="col-xs-12 col-md-6">
						<input
							className="form-control"
							type="text"
							value={task}
							placeholder="Write your task"
							onChange={event => setTask(event.target.value)}
							onKeyUp={addTask}
						/>
						{error && (
							<Error
								message="Tarea invalida, llena el campo"
								errorStyle="alert alert-danger"
							/>
						)}
						<Tasks tasks={tasks} deleteTask={deleteTask} />
						<div className="">{`${tasks.length} item left`}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
