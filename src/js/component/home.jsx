import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
//cuando la variable se actualiza el componente se re-renderiza, se recarga y vuelve a presentar la información
	const [todo, setTodo] = useState("")
	const [todoList, setTodoList] = useState([])
	const addTodo = () => {
		if(todo) {
			setTodoList([...todoList, todo]);
			setTodo("");
		}
	};
	const deleteTodo = (index) => {
		const newTodoList = [...todoList]
		newTodoList.splice(index,1)
		setTodoList(newTodoList);
	
	}
	return (
		<div style={{
			height: "100vh",
			width: "100%",
			backgroundColor: "#DDCF82"}}>
		<div className="text-center pt-5 px-4" style={{backgroundColor: "#DDCF82"}}> 
			<h1 className="display-5" style={{fontSize: "10vw"}}>Todos</h1>
			<div className="input-group mb-3 pt-5" style={{width: "60%", margin: "0 auto"}} >
  				<span className="input-group-text" id="basic-addon1"></span>
  				<input type="text" className="form-control" placeholder="What needs to be done?"
				 aria-label="Username" aria-describedby="basic-addon1"
				 value={todo}
				 onKeyPress={(e) => {(e).key === "Enter" ? addTodo() : null}}
				 onChange={(e) => {
					//console.log(e.target.value)
					setTodo(e.target.value)
				 }}/>
			</div>
			<ul>
			{todoList.map((todo, index) => 
			<div key={index} className="row d-flex">
				<div className="col-9"><p>{todo}</p></div>
				<div className="col-3">
					<button className="btn btn-danger" onClick={()=> deleteTodo(index)}>Delete</button>
				</div>
				
			</div>
				
			)}
			</ul>
			

		</div>
		</div>
	);
};

export default Home;
