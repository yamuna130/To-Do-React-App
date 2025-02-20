import {useState} from 'react'
import './App.css'
function App(){ 
    
    let [todoInput, updateInput] = useState("test")
    let [todoList, updateTodos] = useState(
      [
        {
          id:1,
          task:'react'
        },
        {
          id:2,
          task:'Angular'
        }
      
      ]
     )
    let nextId=3



    function addNewTodo(){
      if(todoInput===''){
        alert("Add some task")
      }
      else{
         let newTodos=[
          ...todoList,
          {
            id:nextId++,
            task:todoInput
          }
        ]
        updateTodos(newTodos);
        updateInput("")
      
      }

    }

    function deleteTodo(id){
      const filteredTodos=todoList.filter(
        (todo)=>{
          return todo.id!==id
        }
      )
      updateTodos(filteredTodos)
    }
    
  return(
    <div className="container mt-5 w-50">
      <h3 className="text-center mt-6">TODO App using React</h3>
      <div className="input-group">
        <input className="form-control" onChange={(e)=>{
          let task=e.target.value;
          updateInput(task)
        }}type='text' value={todoInput} />
        <button onClick={()=>{
          addNewTodo()
        }}className="btn btn-primary">Add</button>
      </div>
      <ul className="list-group mt-4">
        {
          todoList.map(
            (todo)=>{
              return(
                <li className="list-group-item" key={todo.id}>
                  <p>{todo.task}</p>
                  <button onClick={()=>{
                    deleteTodo(todo.id)
                  }}className="btn">❌</button>
                </li>
              )
           }
          )
        }
       </ul>
    </div>
  
  )
}


  
export default App