import React from 'react'
import TaskItem from './TaskItem'
import classes from './Task.module.css'
const Task = (props) => {
	const {tasks} = props
	const [propTasks, setPropTasks] = React.useState(tasks)
	// const [openListModal, setOpenListModal] = React.useState(0)
	React.useEffect(()=>{
		// console.log(tasks)
		setPropTasks(tasks)
	},[tasks])

	return(
		<div className={classes.TaskContainer} key={"id"+Math.random()}>
			
			{propTasks && propTasks.map(task => {
				
				return (
					<TaskItem key={task.id} 
						task={task}
					/>
				)
			})}
		</div>
	)
}
export default Task