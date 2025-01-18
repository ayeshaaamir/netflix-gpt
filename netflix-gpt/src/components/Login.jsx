import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slices/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, seterrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleBtnClicked = () => {
    const msg = checkValidateData(
      email.current.value,
      password.current.value,
      name.current?.value
    );
    seterrorMsg(msg);
    if (msg) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e",
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              seterrorMsg(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-full max-w-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 p-8 rounded-md shadow-lg"
      >
        <h1 className="text-white text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-3 mb-4 w-full bg-gray-800 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            type="text"
            placeholder="Name"
          />
        )}

        <input
          ref={email}
          className="p-3 mb-4 w-full bg-gray-800 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
          type="text"
          placeholder="Email or phone number"
        />
        <input
          ref={password}
          className="p-3 mb-6 w-full bg-gray-800 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
          type="password"
          placeholder="Password"
        />
        <span className="text-red-500 text-lg font-bold py-2 text-center">
          {errorMsg}
        </span>

        <button
          onClick={handleBtnClicked}
          className="p-3 bg-red-600 hover:bg-red-700 text-white rounded font-bold w-full mb-4"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex justify-between text-gray-400 text-sm">
          <span
            onClick={toggleSignInForm}
            className="mr-2 font-bold text-lg cursor-pointer"
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already have an account? Sign In"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
