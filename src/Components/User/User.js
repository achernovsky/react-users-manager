import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './User.css'

class User extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            user : this.props.data,
            showOtherData: false,
        }
    }

    handleInputChange = async (e) => {
        const value = e.target.value;
        const name = e.target.name;
        await this.setState({user: {...this.state.user, [name]: value}});
        this.props.setCurrentUser(this.state.user);
    }

    toggleOtherData = () => {
        this.setState({showOtherData: !this.state.showOtherData});
    }

    render()
    {
        let user = this.state.user;
        let id = user.id;
        let show = this.state.showOtherData ? "block" : "none";
        let borderColor = user.hasIncompleted ? "uncompletedTasks" : "completedTasks";
        let userSelected = (this.props.selectedUserId === id) ? "userSelected" : "";

        return (
            <div className={`user ${borderColor} ${userSelected}`}  >
                <Link to={`/user/${id}`} onClick={() => this.props.selectUser(id)}>
                    <strong>ID: {id}</strong>
                </Link>
                <br/>
                <br/>
                <div className="data-row">
                    <strong>Name:&nbsp;</strong>
                    <input className="textbox" type="text" name="name" value={user.name} onChange={this.handleInputChange}/>
                </div>
                <div className="data-row">
                    <strong>Email:&nbsp;</strong>
                    <input className="textbox" type="text" name="email" value={user.email} onChange={this.handleInputChange}/>
                </div>
                
                <input type="button" value="Other Data" className="m-right" onMouseEnter={this.toggleOtherData}/>

                <div className="other-data" style={{display: show}}>
                    <div className="data-row">
                        <strong>Street:&nbsp;</strong>
                        <input className="textbox" type="text" name="street" value={user.street} onChange={this.handleInputChange}/>
                    </div>
                    <div className="data-row">
                        <strong>City:&nbsp;</strong>
                        <input className="textbox" type="text" name="city" value={user.city} onChange={this.handleInputChange}/>
                    </div>
                    <div className="data-row">
                        <strong>Zipcode:&nbsp;</strong>
                        <input className="textbox" type="text" name="zipcode" value={user.zipcode} onChange={this.handleInputChange}/>
                    </div>
                </div>

                <input type="button" value="Update" className="btn m-right" onClick={() => this.props.updateUser(id)}/>
                <input type="button" value="Delete" className="btn" onClick={() => this.props.deleteUser(id)}/>            
            </div>
        )
    }
}

export default User;