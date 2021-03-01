import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Todos from './Todos/Todos'
import AddTodo from './AddTodo/AddTodo'
import Utils from '../Utils'

class TodosBox extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            todos: []
        }
    }

    //get all user's todos and check if has incompleted
    getUserTodos = async () => 
    {
        const todos = await Utils.getItemsById(this.props.match.params.id, "https://jsonplaceholder.typicode.com/todos")
        this.setState({todos : todos})
        this.hasIncompletedTasks();
    }

    componentDidMount() 
    {
        this.getUserTodos();
    }

    componentDidUpdate(prevProps)
    {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.getUserTodos();
        }
    }

    /*
    add new todo to todos array in state
    new todo is always incompleted -> run check if has incompleted todos
    redirect back to todos list
    */
    addTodo = async (title) => 
    {
        let todosArr = this.state.todos;
        let lastTodoId = 0;
        if (todosArr.length > 0) {
            lastTodoId = todosArr[todosArr.length - 1].id
        }
        let newTodoId = lastTodoId + 1;

        let newTodo = {
            id: newTodoId,
            userId: this.props.match.params.id,
            title: title,
            completed: false
        }

        let newTodosArr = todosArr.concat(newTodo);
        await this.setState({todos: newTodosArr});
        this.hasIncompletedTasks();
        this.props.history.push(`/user/${this.props.match.params.id}`)
    }

    //mark selected todo as completed -> -> run check if has incompleted todos
    markCompleted = async (id) =>
    {
        let todos = this.state.todos;
        let todoIndex = todos.findIndex(t => t.id === parseInt(id))
        todos[todoIndex].completed = true;           
        await this.setState({todos: todos})
        this.hasIncompletedTasks();
    }

    //check if user has incompleted tasks and update user in users state
    hasIncompletedTasks = () =>
    {
        let hasIncompleted = false;

        this.state.todos.forEach(t => {
            if (t.completed === false)
                hasIncompleted = true
        })

        hasIncompleted ? this.props.updateHasIncompletedTasks(this.props.match.params.id, true) : 
            this.props.updateHasIncompletedTasks(this.props.match.params.id, false);
    }

    render()
    {
        return (
            <div>  
                <Switch>
                    <Route 
                        exact path="/user/:id/addTodo"
                        render={(props) => <AddTodo {...props} addTodo={t => this.addTodo(t)}/>}
                    />
                    <Route 
                        path="/user/:id"
                        render={(props) => <Todos {...props} todos={this.state.todos} markCompleted={id => this.markCompleted(id)}/>}
                    />
                </Switch>
            </div>
        )
    }
}

export default TodosBox;