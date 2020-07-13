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
import styles from "./NewPost.module.scss";

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

  submitHandler = async () => {
    // let timestamp = Date.now(); // new Date().toLocaleString();
    // console.log(timestamp);
    const data = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author,
      topic: this.state.topic,
      // timestamp: timestamp
    };
    if (this.validateForm()) {
      this.setState({ modal: !this.state.modal });
      // Push data to firebase
      // this.props.firebaseRef.push(data);

      // Push data to MERN DB
      const response = await fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const responseData = await response.json();
      console.log('responseData: ', responseData)
    }
  };

  modalHandler = () => {
    this.setState({ modal: !this.state.modal });
    console.log(this.state.modal);
  };

  render() {
    return (
      <React.Fragment>
        <button
          className={styles.new_post__button}
          onClick={this.modalHandler}
          style={{ marginRight: "auto" }}
        >
          New Vent
        </button>

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
                <option value="browns">Browns</option>
                <option value="indians">Indians</option>
                <option value="cavs">Cavs</option>
                <option value="other">Other</option>
              </Input>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.submitHandler}>
              Submit Vent
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default NewPost;
