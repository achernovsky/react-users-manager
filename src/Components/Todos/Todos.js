import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Todos.css'

class Todos extends Component {
    render()
    {
        const todos = this.props.todos;
        const id = this.props.match.params.id;
        let show = "";

        const todosList = todos.map((todo) => {
            todo.completed ? show = "none" : show = "block";

            return  <div key={todo.id} className="todo">
                        <div><strong>Title: </strong><span>{todo.title}</span></div>
                        <div className="completed-row">
                            <div><strong>Completed: </strong><span>{todo.completed.toString()}</span></div>
                            <button style={{display: show}} className="btn" onClick={e => this.props.markCompleted(todo.id)}>Mark Completed</button>
                        </div>
                    </div>                              
        })

        return (
        <div className="todos">
            <div className="todos-header">
                <h3>Todos - User {id}</h3>
                <Link to={`/user/${id}/addTodo`}>
                        <button type="button" className="btn-add-todo btn">Add</button>
                </Link>                
            </div>
            <div className="todos-list">
                {todosList}
            </div>
            
        </div>
        )
    }
}

export default Todos;