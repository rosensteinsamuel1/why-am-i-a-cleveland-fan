import React, { Component } from 'react';
import styles from './NewPost.module.css';

class NewPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            author: '',
            topic: ''
        }

        this.submitHandler = this.submitHandler.bind(this);
    }
    
    submitHandler = () => { //(e)
       // e.preventDefault();
        const data = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author,
            topic: this.state.topic
        }
        console.log(data)
        this.props.firebaseRef.push(data);
    }

    render () {
        return (
            <div className={styles.NewPost}>
                <h3>New Vent</h3>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <textarea rows="1" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})} />
                <label>Topic</label>
                <select className={styles.topicSelect} value={this.state.topic} onChange={(event) => this.setState({topic: event.target.value})}>
                    <option value="">--Choose Category--</option>
                    <option value="Browns">Browns</option>
                    <option value="Indians">Indians</option>
                    <option value="Cavs">Cavs</option>
                    <option value="Other">Other</option>
                </select>
                <button onClick= {this.submitHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;