import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navegation from './components/Navegation';
import {todos} from './todos.json';

class App extends Component  
{
  constructor(){
    super();
    this.state={todos};
    this.handleAddTodo=this.handleAddTodo.bind(this);
  }
  removeTodo(index){
    this.setState({
      todos:this.state.todos.filter((e,i)=>{
        return i!==index})
    });
  }

  handleAddTodo(todo){
    this.setState({todos: [...this.state.todos, todo]})
    //una funcion que añade o almacena un nuevo dato a la aplicacion
  }

  render()
  {
    const todos=this.state.todos.map((todo, i)=>{
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">          
            <div className="card-title text-center">
              <h3> {todo.titulo}</h3>
              <span className="badge badge-pill badge-danger ml-2">
              {todo.prioridad}
              </span>
            </div>
            <div className="card-body">
              {todo.descripcion}             
            </div>
            <div className="card-footer">
              <button 
              className="btn btn-danger" 
              onClick={this.removeTodo.bind(this, i)}>
              Eliminar
              </button>
            </div>
          </div>
        </div>
        
      )
    });

    return (
    <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Tarea
            <span className="badge badge-pill badge-danger ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <Navegation onAddTodo={this.handleAddTodo}></Navegation>
            </div>
            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}
export default App;
