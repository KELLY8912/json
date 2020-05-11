import React, { Component } from 'react';

class Navegation extends Component{
    constructor(){
        super();
        this.state={
            titulo:'',
            responsable:'',
            descripcion:'',
            prioridad:''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(e){        
        const {value, name}=e.target;
        console.log(value, name);
        this.setState({[name]:value});
        //console.log(this.state);//mnuestra e estado actual de estado
        
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState=({
            titulo:'',
            responsable:'',
            descripcion:'',
            prioridad:''
        });
        
    }
    render(){
        return(
           <div className="card">
                <form onSubmit={this.handleSubmit} className="card-body">
                   <div className="form-group">
                        <input 
                        type="text" 
                        name="titulo"
                        className="form-control"
                        value={this.state.titulo}
                        onChange={this.handleInputChange}
                        placeholder="Titulo"/>
                    </div> 
                    <div className="form-group">
                        <input 
                        type="text" 
                        name="responsable"
                        className="form-control"
                        value={this.state.responsable}
                        onChange={this.handleInputChange}
                        placeholder="Responsable"
                        
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        name="descripcion"
                        className="form-control"
                        value={this.state.descripcion}
                        onChange={this.handleInputChange}
                        placeholder="Descripcion"
                        
                        />
                    </div>
                    <div className="form-group">
                        <select 
                        name="prioridad"
                        className="form-control"
                        value={this.state.prioridad}
                        onChange={this.handleInputChange}
                        >
                            <option>bajo</option>
                            <option>medio</option>
                            <option>alto</option>
                        </select>

                    </div>
                    <button type="submit" className="btn btn-primary">Registrar</button>
                </form>
           </div>
        )
    }
}
export default Navegation;