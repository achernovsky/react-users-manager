import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Posts.css';

class Posts extends Component {   
    render()
    {
        const posts = this.props.posts;
        const id = this.props.match.params.id;

        const postsList = posts.map((post) => {
            return  <div key={post.id} className="post">
                        <span><strong>Title: </strong>{post.title}</span><br/>
                        <span><strong>Body: </strong>{post.body}</span>
                    </div>                              
        })

        return (
        <div className="posts">
            <div className="posts-header">
                <h3>Posts - User {id}</h3>
                <Link to={`/user/${id}/addPost`}>
                        <button type="button" className="btn-add-post btn">Add</button>
                </Link>
            </div>
            <div className="posts-list">
                {postsList}
            </div>
        </div>
        )
    }
}

export default Posts;