import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { LOGO, supportedLanguages, USER_AVATAR } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/slices/gptSlice";
import { changeLanguage } from "../utils/slices/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, displayName, email, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth).catch((error) => console.log(error));
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  };

  return (
    <header className="w-full absolute top-0 left-0 z-50 px-4 md:px-8 py-4 bg-gradient-to-b from-black to-transparent flex flex-col md:flex-row items-center justify-between gap-4">
      <img className="w-32 md:w-40" src={LOGO} alt="Netflix Logo" />

      {user && (
        <button
          onClick={handleGPTSearchClick}
          className="bg-red-600 text-white font-semibold px-4 py-2 rounded hover:bg-red-700 transition w-full md:w-auto text-center"
        >
          {showGPTSearch ? "Netflix" : "GPT Search"}
        </button>
      )}

      {showGPTSearch && (
        <div className="relative">
          <select
            onChange={handleLanguageChange}
            className="bg-black text-white px-4 py-2 rounded border border-white"
          >
            {supportedLanguages.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {user && (
        <div className="flex items-center space-x-3">
          <img
            className="w-10 h-10 rounded-full object-cover border border-white"
            src={USER_AVATAR}
            alt="User"
          />
          <button
            onClick={handleSignOut}
            className="text-white font-semibold hover:underline"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
