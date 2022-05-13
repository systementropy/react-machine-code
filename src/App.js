import React from 'react';

import logo from './logo.svg';
import './App.css';
import New from './component/New/New';
import List from './component/List/List';


function App() {
  const [lists, setLists] = React.useState([{id: 0, name:"default", openModal:false ,tasks: []}])
  const [tasks, setTasks] = React.useState([])
  const onSave = (data) => {
    
    if(!data.type){
      setLists([...lists, {id: lists.length, name: data.data.name, openModal:false ,tasks: []}])
    }else{
      let tempLists = [...lists];
      tempLists[0].tasks = [...tempLists[0].tasks, {name: data.data.name, desc: data.data.desc, status: false}]
      setTasks([...tasks, {id: tasks.length, name: data.data.name, desc: data.data.desc, status: false}])
      setLists([...tempLists])
    }
    // console.log(lists);
  }
  return (
    <div className="App">
      <New onSave = {onSave}/>
      <List lists={[...lists]}/>
    </div>
  );
}

export default App;
