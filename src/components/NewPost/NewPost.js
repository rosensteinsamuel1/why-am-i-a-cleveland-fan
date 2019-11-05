import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import styles from "./NewPost.module.css";

//TODO: make sure all fields are filled when submitting new post

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      author: "",
      topic: "",
      modal: false
    };

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler = () => {
    const data = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author,
      topic: this.state.topic
    };
    this.setState({ modal: !this.state.modal });
    console.log(data);
    this.props.firebaseRef.push(data);
  };

  modalHandler = () => {
    this.setState({ modal: !this.state.modal });
    console.log(this.state.modal);
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.modalHandler}>
          New Vent
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.modalHandler}>
          <ModalHeader toggle={this.modalHandler}>New Vent</ModalHeader>
          <FormGroup>
            <Label for="exampleEmail">Title</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Vent Title"
              onChange={event => this.setState({ title: event.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="content">Vent</Label>
            <Input
              type="textarea"
              name="email"
              id="exampleEmail"
              placeholder="Type your vent"
              maxLength="200"
              onChange={event => this.setState({ content: event.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Author</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Your name"
              onChange={event => this.setState({ author: event.target.value })}
            />
          </FormGroup>
          <ModalBody>
            <label>Topic</label>
            <select
              className={styles.topicSelect}
              value={this.state.topic}
              onChange={event => this.setState({ topic: event.target.value })}
            >
              <option value="">--Choose Category--</option>
              <option value="Browns">Browns</option>
              <option value="Indians">Indians</option>
              <option value="Cavs">Cavs</option>
              <option value="Other">Other</option>
            </select>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.submitHandler}>
              Submit Vent
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default NewPost;
