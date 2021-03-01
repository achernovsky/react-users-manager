import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Posts from './Posts/Posts'
import AddPost from './AddPost/AddPost'
import Utils from '../Utils'

class PostsBox extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            posts: []
        }
    }

    getUserPosts = async () => 
    {
        const posts = await Utils.getItemsById(this.props.match.params.id, "https://jsonplaceholder.typicode.com/posts")
        this.setState({posts : posts})
    }

    componentDidMount() 
    {
        this.getUserPosts();
    }

    componentDidUpdate(prevProps)
    {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.getUserPosts();
        }
    }

    /* add new posts to posts array in state
    redirect back to posts list */
    addPost = async (title, body) => 
    {
        let postsArr = this.state.posts;
        let lastPostId = 0;
        if (postsArr.length > 0) {
            lastPostId = postsArr[postsArr.length - 1].id
        }
        let newPostId = lastPostId + 1;

        let newPost = {
            id: newPostId,
            userId: this.props.match.params.id,
            title: title,
            body: body
        }

        let newPostsArr = postsArr.concat(newPost);
        await this.setState({posts: newPostsArr});
        this.props.history.push(`/user/${this.props.match.params.id}`)
    }

    render()
    {
        return (
            <div>  
                <Switch>
                    <Route 
                        exact path="/user/:id/addPost"
                        render={(props) => <AddPost {...props} addPost={(t, b) => this.addPost(t, b)}/>}
                    />
                    <Route 
                        path="/user/:id"
                        render={(props) => <Posts {...props} posts={this.state.posts}/>}
                    />
                </Switch>
            </div>
        )
    }
}

export default PostsBox;