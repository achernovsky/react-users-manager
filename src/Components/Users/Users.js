import React, {Component} from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Utils from '../../Utils'
import User from '../User/User'
import AddUser from '../AddUser/AddUser'
import SearchBox from '../SearchBox/SearchBox'
import TodosBox from '../TodosBox'
import PostsBox from '../PostsBox'
import './Users.css'


class Users extends Component
{
    constructor()
    {
        super()
        this.state = {
            users : [], 
            currentUser : {},
            keyword: '',
            selectedUserId: 0
        }
    }

    async componentDidMount()
    {
        const users = await Utils.getAllUsers()
        this.setState({users : users})
    }

    //set user that is currently being edited
    setCurrentUser = (user) => {
        this.setState({currentUser: user})
    }

    //add user to users array in state
    addUser = async () => {
        // find the last user id and add 1
        let usersArr = this.state.users;
        let lastUserId = usersArr[usersArr.length - 1].id
        let newUaserId = lastUserId + 1;

        // add a new user to the end of users array
        await this.setState({currentUser : {...this.state.currentUser, id : newUaserId}});
        let newUsersArr = usersArr.concat(this.state.currentUser);
        this.setState({users: newUsersArr})
    }

    //updates an existing user by replacing it with current user being edited
    updateUser = () =>
    {
        let users = this.state.users;
        let user = this.state.currentUser;
        let updatedUsers = users.map(u => u.id === user.id ? user : u);
        this.setState({users: updatedUsers})
    }

    //deletes a user from users array
    deleteUser = (id) =>
    {
        let users = this.state.users.filter(x => x.id !== id);
        this.setState({users: users})
    }

    setKeyword = (e) => {
        this.setState({keyword: e.target.value})
    }

    //sets if user has incompleted tasks according to value received
    updateHasIncompletedTasks = async (id, value) =>
    {
        let users = this.state.users;
        let userIndex = users.findIndex(u => u.id === parseInt(id));
        if (users.length > 0) {
            users[userIndex].hasIncompleted = value;           
            await this.setState({users: users});
        }
    }

    selectUser = (id) => {
        this.setState({selectedUserId: id});
    }

    render()
    {
        const {users, keyword} = this.state;
        const filteredUsers = users.filter(user => {
            return (
                user.name.toLowerCase().includes(keyword.toLowerCase()) ||
                user.email.toLowerCase().includes(keyword.toLowerCase())
            )
        })

        let userList = filteredUsers.map((user) =>
        {
            return  <User 
                        key={user.id} 
                        data={user} 
                        setCurrentUser={u => this.setCurrentUser(u)} 
                        updateUser={id => this.updateUser(id)}
                        deleteUser={id => this.deleteUser(id)}
                        selectUser={id => this.selectUser(id)}
                        selectedUserId={this.state.selectedUserId}
                    />      
        })

        return (
        <div style={{display: "flex"}}>
            <div className="main">
                <h1>Users Manager</h1>
                <div className="search-row">
                    <SearchBox placeholder="Search name or email" setKeyword={this.setKeyword}/>
                    <Link to="/add">
                        <button type="button" className="btn">Add</button>
                    </Link>
                </div>
                <div>
                    {userList}
                </div>
            </div>
            <Switch>
                <Route 
                    path="/add" 
                    render={() => (
                        <AddUser 
                            setCurrentUser={d => this.setCurrentUser(d)}
                            addUser={this.addUser}
                        />
                    )}
                />
                <Route 
                    path="/user/:id"
                    render={props => 
                        <div>
                            <TodosBox {...props} updateHasIncompletedTasks={(id, value) => this.updateHasIncompletedTasks(id, value)}/>  
                            <PostsBox {...props}/>
                        </div>
                    }
                />
            </Switch>
        </div>
        )
    }
}

export default Users;
