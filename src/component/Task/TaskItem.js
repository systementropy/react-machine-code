import React from "react";
import classes from './Task.module.css'

const TaskItem = (props) => {
	// console.log(props)
	const { task } = props
	const [taskItem, settaskItem] = React.useState(task)
	// console.log(props, taskItem);
	const newHandler = () => {
		// console.log("newHandler")
		settaskItem({...taskItem, openModal: true})
		// console.log(taskItem);
	}
	const editHandler = () => {
		console.log("editHandler")
	}
	const deleteHandler = () => {
		console.log("deleteHandler")
	}
	return(
		<div className={classes.TaskItem} key={taskItem.id}>
			<div className={classes.actionContainer}>
				<span onClick={editHandler}>Edit</span>
				<span onClick={deleteHandler}>Delete</span>
			</div>
			<h4>{taskItem.name}</h4>
			<p>{taskItem.desc}</p>
			{!!taskItem.openModal && <div className={classes.ListModal}>
				
			</div>}
		</div>
	)
}
export default TaskItem