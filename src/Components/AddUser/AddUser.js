import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './AddUser.css'

class AddUser extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            name: "",
            email: ""
        }
    }

    handleInputChange = async (e) => 
    {
        const value = e.target.value;
        const name = e.target.name;
        await this.setState({[name]: value});
        this.props.setCurrentUser(this.state);
    }

    addUser = () => {
        if (this.state.name.length !== 0 && this.state.email.length !== 0) {
            this.props.addUser()
        } else {
            alert("Name and email cannot be empty!")
        }
    }

    render()
    {
        return (
        <div className="add-user">
            <h3>Add New User</h3>
            <div className="add-user-body">
                Name: <input type="text" name="name" onChange={this.handleInputChange}/><br/>
                Email: <input type="text" name="email" onChange={this.handleInputChange}/><br/>
                <div>
                    <Link to="/">
                            <button type="button" className="btn m-right">Cancel</button>
                    </Link>
                    <input type="button" value="Add" className="btn" onClick={() => this.addUser()}/>
                </div>

            </div>

        </div>
        )
    }
}


export default AddUser;
