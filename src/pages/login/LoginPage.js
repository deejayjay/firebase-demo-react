import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BiMessageSquareError } from "react-icons/bi";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { auth } from "libs/firebase";
import { Label, Input } from "ui/forms";
import { SubmitButton } from "ui/buttons";
import { LoginPageStyles, FormControl } from "./styles";

function LoginPage(props) {
  // Start with state declarations
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();

  const notify = (errorCode) => {
    let message = "";
    switch (errorCode) {
      case "auth/user-not-found":
        message = "User does not exist";
        break;
      case "auth/invalid-email":
        message = "Email is invalid";
        break;
      case "auth/wrong-password":
        message = "Password is incorrect";
        break;

      default:
        message = "Unexpected error occured";
        break;
    }

    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: <BiMessageSquareError />,
      transition: Zoom
    });
  };

  function onHandleSignIn(e) {
    e.preventDefault();

    // Send the email and password to firebase to authenticate
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Go to the dashboard page
        navigator("/dashboard");
      })
      .catch((error) => {
        // If authentication fails, show error
        notify(error.code);
      });
  }

  return (
    <>
      <LoginPageStyles>
        <ToastContainer />
        <header>
          <h1>Sign In to Dashboard</h1>
        </header>
        <form onSubmit={onHandleSignIn}>
          <FormControl>
            <Label>Email</Label>
            <Input type="text" placeholder="janedoe@gmail.com" onChange={(e) => setEmail(e.target.value.trim())} />
          </FormControl>
          <FormControl>
            <Label>Password</Label>
            <Input type="password" onChange={(e) => setPassword(e.target.value.trim())} />
          </FormControl>
          <FormControl>
            <SubmitButton padding="0.5rem 0" margin="0.5rem 0 0 0">
              Sign In
            </SubmitButton>
          </FormControl>
        </form>
      </LoginPageStyles>
    </>
  );
}

export default LoginPage;
