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

// TODO: make sure all fields are filled when submitting new post DONE
// TODO: add DATE propery to post

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

  validateForm = () => {
    if (
      this.state.title == null ||
      this.state.title === "" ||
      this.state.content == null ||
      this.state.content === "" ||
      this.state.author == null ||
      this.state.author === "" ||
      this.state.topic == null ||
      this.state.topic === ""
    ) {
      alert("Please Fill All Required Field");
      return false;
    }
    return true;
  };

  submitHandler = () => {
    let timestamp = Date.now(); // new Date().toLocaleString();
    console.log(timestamp);
    const data = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author,
      topic: this.state.topic,
      timestamp: timestamp
    };
    if (this.validateForm()) {
      this.setState({ modal: !this.state.modal });
      this.props.firebaseRef.push(data);
    }
  };

  modalHandler = () => {
    this.setState({ modal: !this.state.modal });
    console.log(this.state.modal);
  };

  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <Button color="danger" onClick={this.modalHandler}>
            New Vent
          </Button>
        </div>

        <Modal
          isOpen={this.state.modal}
          toggle={this.modalHandler}
          className={styles.NewPostModal}
        >
          <ModalHeader toggle={this.modalHandler}>New Vent</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label className={styles.title} for="exampleEmail">
                Title
              </Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Vent Title"
                onChange={event => this.setState({ title: event.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label className={styles.content} for="content">
                Vent
              </Label>
              <Input
                type="textarea"
                name="email"
                id="exampleEmail"
                placeholder="Type your vent"
                maxLength="170"
                onChange={event =>
                  this.setState({ content: event.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label className={styles.author} for="author">
                Author
              </Label>
              <Input
                type="textarea"
                name="email"
                id="exampleEmail"
                placeholder="Your name"
                onChange={event =>
                  this.setState({ author: event.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label className={styles.topic} for="author">
                Topic
              </Label>
              <Input
                type="select"
                name="topicSelect"
                id="exampleSelect"
                onChange={event => this.setState({ topic: event.target.value })}
              >
                <option value="">--Choose a Topic--</option>
                <option value="Browns">Browns</option>
                <option value="Indians">Indians</option>
                <option value="Cavs">Cavs</option>
                <option value="Other">Other</option>
              </Input>
            </FormGroup>
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
