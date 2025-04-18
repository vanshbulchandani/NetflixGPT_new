import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [issignin, setsignin] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggle = () => {
    setsignin(!issignin);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    console.log("Validation Message:", message);
    setErrorMessage(message);

    if (message) return;
    if (!issignin) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative h-screen w-screen bg-black text-white overflow-hidden">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg"
          alt="Netflix Banner"
          className=" top-0 left-0 w-full h-full object-cover -z-10"
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
