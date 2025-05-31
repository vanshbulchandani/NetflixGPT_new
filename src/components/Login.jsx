import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [issignin, setsignin] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggle = () => setsignin(!issignin);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!issignin) {
      // Sign up flow
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/139048048?v=4",
          })
            .then(() => {
              // Manually create updated user object to dispatch
              const updatedUser = {
                uid: user.uid,
                email: user.email,
                displayName: name.current.value,
                photoURL:
                  "https://avatars.githubusercontent.com/u/139048048?v=4",
              };

              dispatch(addUser(updatedUser));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    } else {
      // Sign in flow
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // onAuthStateChanged will handle dispatch
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }
  };

  return (
    <div className="relative h-screen w-screen bg-black text-white overflow-hidden">
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="Netflix Banner"
          className="top-0 left-0 w-full h-full object-cover -z-10"
        />
      </div>

      <form
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/75 p-10 w-3/12 max-w-md rounded-md text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl mb-6">
          {issignin ? "Sign In" : "Sign Up"}
        </h1>

        {!issignin && (
          <input
            type="text"
            placeholder="Name"
            ref={name}
            className="py-3 px-4 mb-4 w-full rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        )}

        <input
          type="text"
          placeholder="Email"
          ref={email}
          className="py-3 px-4 mb-4 w-full rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="py-3 px-4 mb-6 w-full rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        {ErrorMessage && (
          <p className="bg-red-500/10 border border-red-600 text-red-500 text-sm px-4 py-2 rounded mb-4">
            ⚠️ {ErrorMessage}
          </p>
        )}
        <button
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded"
          onClick={handleButtonClick}
        >
          {issignin ? "Sign In" : "Sign Up"}
        </button>

        <button
          type="button"
          onClick={toggle}
          className="text-sm text-gray-400 mt-4 focus:outline-none"
        >
          {issignin ? "New to Netflix?" : "Already registered?"}{" "}
          <span className="text-white hover:underline cursor-pointer">
            {issignin ? "Sign up now" : "Sign in now"}
          </span>
          .
        </button>
      </form>
    </div>
  );
};

export default Login;
