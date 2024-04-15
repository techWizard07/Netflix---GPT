import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";



const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptValue=useSelector(store=>store.gpt.showGptSearch)


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    
    return ()=>unsubscribe()
  }, []);

  const handleLanguageChange=(e)=>{
   dispatch(changeLanguage(e.target.value))
  }

 const handleGptSearch=()=>{
  dispatch(toggleGptSearch())
 }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
            {gptValue && <select onChange={handleLanguageChange} name="" id="" className="p-2 m-2 bg-gray-900 text-white rounded-sm">
            {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>}
          <button className="py-2 px-4 mr-4 h-12 bg-purple-400 text-white rounded-lg" onClick={handleGptSearch}>{gptValue ? "Go to Netflix": "GPT Search"}</button>
          <img
            className="w-12 h-12 rounded-md"
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white bg-red-400 h-8 px-4 rounded-md ml-2">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;