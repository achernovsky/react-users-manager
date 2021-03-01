import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './AddTodo.css'

class AddTodo extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            title: '',
        }
    }

    handleInputChange = async (e) => 
    {
        await this.setState({title: e.target.value});
    }

    render()
    {
        const id = this.props.match.params.id;

        return (
        <div className="add-todo">
            <h3>Add New Todo - User {id}</h3>
            <div className="add-todo-body">
                Title: <input type="text" name="title" onChange={this.handleInputChange}/><br/>
                <div>
                    <Link to={`/user/${id}`}>
                            <button type="button" className="btn m-right">Cancel</button>
                    </Link>
                    <input type="button" value="Add" className="btn" onClick={() => this.props.addTodo(this.state.title)}/>                          
                </div>
            </div>
        </div>
        )
    }
}

export default AddTodo;