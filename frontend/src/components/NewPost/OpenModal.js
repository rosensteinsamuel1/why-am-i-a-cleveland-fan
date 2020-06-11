import React, { useState } from "react";
import styles from "./OpenModal.module.scss";
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
      <button
        type="button"
        onClick={openModal}
        className={styles.modal__btn_open}
      >
        Open Modal
      </button>

      <Modal ref={modalRef}>
        <div>
          <button
            onClick={() => modalRef.current.close()}
            style={{ marginRight: "2rem" }}
            className={styles.modal__btn_close}
          >
            Close Modal
          </button>
        </div>

        <h1>New Vent</h1>
        <form onSubmit={submitHandler}>
          <div className={styles.modal__title}>
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
          <div className={styles.modal__content}>
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
          <div>
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
            <button type="submit" className={styles.modal__btn_submit}>
              Submit Post
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default OpenModal;
