import React, { useState } from "react";
import styles from "./NewPost.module.scss";
import Modal from "./Modal";

function OpenModal(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredContent, setEnteredContent] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredTopic, setEnteredTopic] = useState("");

  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  const validateForm = () => {
    if (
      enteredTitle == null ||
      enteredTitle === "" ||
      enteredContent == null ||
      enteredContent === "" ||
      enteredAuthor == null ||
      enteredAuthor === "" ||
      enteredTopic == null ||
      enteredTopic === ""
    ) {
      alert("Please Fill All Required Field");
      return false;
    }
    return true;
  };

  const submitHandler = e => {
    e.preventDefault();
    let timestamp = Date.now(); // new Date().toLocaleString();

    const data = {
      title: enteredTitle,
      content: enteredContent,
      author: enteredAuthor,
      topic: enteredTopic,
      timestamp: timestamp
    };
    if (validateForm()) {
      // this.setState({ modal: !this.state.modal });
      props.firebaseRef.push(data).then(console.log("data pushed: ", data));
    }
    setEnteredContent("");
    setEnteredTitle("");
    setEnteredAuthor("");
  };

  return (
    <div>
      <button type="button" onClick={openModal}>
        Open Modal
      </button>
      <Modal ref={modalRef}>
        <h1>Modal Header</h1>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={event => {
                setEnteredTitle(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="content">Vent</label>
            <input
              type="text"
              id="content"
              value={enteredContent}
              onChange={event => {
                setEnteredContent(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              value={enteredAuthor}
              onChange={event => {
                setEnteredAuthor(event.target.value);
              }}
            />
          </div>
          <label className={styles.topic} htmlFor="topicSelect">
            Topic
          </label>
          <select
            type="select"
            id="exampleSelect"
            value={enteredTopic}
            onChange={event => setEnteredTopic(event.target.value)}
          >
            <option value="">--Choose a Topic--</option>
            <option value="browns">Browns</option>
            <option value="indians">Indians</option>
            <option value="cavs">Cavs</option>
            <option value="other">Other</option>
          </select>
          <div className="blog-form__actions">
            <button type="submit">Submit Post</button>
          </div>
        </form>
        <button onClick={() => modalRef.current.close()}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default OpenModal;
