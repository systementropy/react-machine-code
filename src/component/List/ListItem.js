import React from "react";
import classes from './List.module.css'
import Task from "../Task/Task";
const ListItem = (props) => {
	const {list, tasks} = props
	const [listItem, setListItem] = React.useState({...list})
	const [tasksItem, setTasksItem] = React.useState(tasks)
	const [modalView, setModalView] = React.useState("")
	const [newComponentText, setNewComponentText] = React.useState("")
	const [newComponentDesc, setNewComponentDesc] = React.useState("")
	
	const newHandler = () => {
		
		setListItem({...listItem, openModal: true})
		setModalView("new")
	}
	const editHandler = () => {
		console.log("editHandler")
	}
	const deleteHandler = () => {
		console.log("deleteHandler")
	}

	const saveHandler = (e) =>{
		// console.log([...tasksItem, {name: newComponentText, desc: newComponentDesc, status: false}]);
		setTasksItem([...tasksItem, {name: newComponentText, desc: newComponentDesc, status: false}])
		listItem.openModal = false
		// setTasksItem()
	}
	const changeItemTextHandler = (e) => {
		setNewComponentText(e.target.value)
	}
	const changeItemDescHandler = (e) => {
		setNewComponentDesc(e.target.value)
	}
	
	React.useEffect(()=>{		
		// console.log(list.tasks);
		setListItem({...list})
		setTasksItem(list.tasks)
	},[list, tasks])



	return(
		<div className={classes.List} key={listItem.id}>
			<div className={classes.actionContainer}>
				<span onClick={newHandler}>New</span>
				<span onClick={editHandler}>Edit</span>
				<span onClick={deleteHandler}>Delete</span>
			</div>
			<h1>{listItem.name}</h1>
			<Task key={listItem.tasks} tasks={tasksItem} />
			{!!listItem.openModal && <div className={classes.ListModal} >
				<h2>something</h2>

				{modalView==="new"?  
					(<div className={classes.formContainer}>
						<div className={classes.formRow}>
							<label>Name</label>
							<input type="text" value={newComponentText} onChange={e => changeItemTextHandler(e)}/>
						</div>
						<div className={classes.formRow}>
							<label>Description</label>
							<input type="text" value={newComponentDesc} onChange={e => changeItemDescHandler(e)}/>
						</div>
						<div className={classes.formRow}>
							<button onClick={e => saveHandler(e)}>save</button>
						</div>
					</div>):null
				}
			</div>}
		</div>
	)
}
export default ListItem