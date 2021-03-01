import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './AddPost.css'

class AddTodo extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }

    handleInputChange = async (e) => 
    {
        const value = e.target.value;
        const name = e.target.name;
        await this.setState({[name]: value});
    }

    render()
    {
        const id = this.props.match.params.id;
        const title = this.state.title;
        const body = this.state.body;

        return (
        <div className="add-post">
            <h3>Add New Post - User {id}</h3>
            <div className="add-post-body">
                Title: <input type="text" name="title" onChange={this.handleInputChange}/><br/>
                Body: <input type="text" name="body" onChange={this.handleInputChange}/><br/>
                <div>
                    <Link to={`/user/${id}`}>
                            <button type="button" className="btn m-right">Cancel</button>
                    </Link>
                    <input type="button" value="Add" className="btn" onClick={e => this.props.addPost(title, body)}/>                    
                </div>
            </div>
        </div>
        )
    }
}

export default AddTodo;