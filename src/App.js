import React from "react";
export default function App(){

  const [toDoList,setToDoList]=React.useState([
    { text: "Read SpringBoot", completed: false },
    { text: "Complete assignments", completed: false },
    { text: "Prepare breakfast", completed: false },
    { text: "Sleep for 2 hours", completed: false },
    { text: "Take a shower", completed: false }
  ]);
  function Header(){
    return (
      <h1 className="header">To-Do List</h1>
    )
  }
  function clearButton(){
    setToDoList([]);
  }
  function toggleStrike(index) {
    // Create a new array with the task toggled (striked/normal)
    const updatedList = [...toDoList];
    updatedList[index] = {...updatedList[index], completed: !updatedList[index].completed};

    // Update the state with the new array
    setToDoList(updatedList);
  }
  function Lists(){
    if (toDoList.length==0){
      return (
        <h3 className="empty-list"><i>Nothing to display buddy!!!</i></h3>
      );
    }
    else{
    const listElements = toDoList.map((element,index) => (
      <li  key={index} onClick={() => toggleStrike(index)}
      style={{ textDecoration: (element.completed) ? 'line-through' : 'none' }}>{element.text}</li>
    ));
    return(
      <ul className="todolist">{listElements}</ul>
     );
  }
  }

  return (
    <>
    <Header/>
    <Lists/>
    <button className="clear-button" onClick={clearButton}>Clear List</button>
    </>
  );

}