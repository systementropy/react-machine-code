import React from "react"
import classes from './New.module.css';
// import NewList from './NewList'
// import NewTask from './NewTask'
const CreateNew = (props) => {
	const [newComponentType, setNewComponentType] = React.useState(0)
	const [newComponentText, setNewComponentText] = React.useState("")
	const [newComponentDesc, setNewComponentDesc] = React.useState("")
	
	const changeNewCompTypeHandler = (e) => {
		console.log(newComponentType, e.target.value);
		setNewComponentType(parseInt(e.target.value))
		console.log(newComponentType);
	}
	const changeInputText = (e) => {
		setNewComponentText(e.target.value)
	}
	const changeInputDesc = (e) => {
		setNewComponentDesc(e.target.value)
	}
	return (
		<div className={classes.NewComponent}>
			<select value={newComponentType} onChange={(e) => changeNewCompTypeHandler(e)}>
				<option value={0}>List</option>
				<option value={1}>Task</option>
			</select>
			{!newComponentType &&
				
				<div>
					<input type="text" value={newComponentText} onChange={changeInputText}/>
					<button text="save" onClick={(e) => props.onSave({type: newComponentType, data:{name: newComponentText}})}>save</button>
				</div>
			}
			{!!newComponentType &&
				<div>
					<input type="text" value={newComponentText} onChange={changeInputText}/>
					<input type="text" value={newComponentDesc} onChange={changeInputDesc}/>
					<button text="save" onClick={(e) => props.onSave({type: newComponentType, data:{name: newComponentText, desc: newComponentDesc}})}>save</button>
				</div>
			}
		</div>
	)
}
export default CreateNew