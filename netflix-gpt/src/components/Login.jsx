import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
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
      <form className="absolute w-full max-w-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 p-8 rounded-md shadow-lg">
        <h1 className="text-white text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-3 mb-4 w-full bg-gray-800 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            type="text"
            placeholder="Name"
          />
        )}

        <input
          className="p-3 mb-4 w-full bg-gray-800 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
          type="text"
          placeholder="Email or phone number"
        />
        <input
          className="p-3 mb-6 w-full bg-gray-800 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
          type="password"
          placeholder="Password"
        />
        <button className="p-3 bg-red-600 hover:bg-red-700 text-white rounded font-bold w-full mb-4">
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
