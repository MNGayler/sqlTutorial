import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  let navigate = useNavigate();
  //formic intital values
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      navigate("/");
    });
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title:</label>
          <ErrorMessage name="title" component="span"></ErrorMessage>
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="(Example: Title...)"
          />
          <label>Post:</label>
          <ErrorMessage name="postText" component="span"></ErrorMessage>
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="postText"
            placeholder="(Example: Post...)"
          />
          <label>Username:</label>
          <ErrorMessage name="username" component="span"></ErrorMessage>
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="(Example: John...)"
          />
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
