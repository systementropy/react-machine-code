import React from 'react';
import ListItem from './ListItem';
import classes from './List.module.css'
const List = (props) => {
	const {lists} = props
	const [propLists, setPropLists] = React.useState(lists)

	React.useEffect(()=>{
		setPropLists(lists)
	},[lists])


	return(
		<div className={classes.ListContainer} >
			
			{propLists.map(list => {
				return (<ListItem key={list.id} list={list} tasks={[...list.tasks]}/>)
			})}
		</div>
	)
}
export default List