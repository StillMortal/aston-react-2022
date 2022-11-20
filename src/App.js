import './App.css';
import AuthorizedHeader from "./components/Headers/AuthorizedHeader/AuthorizedHeader"
import Header from "./components/Headers/Header/Header";
import Profile from "./components/Profile/Profile";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import ReadMore from "./components/Profile/Cards/Card/ReadMore/ReadMore";
import Favorites from "./components/Favorites/Favorites";
import Search from "./components/Search/Search";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        // https://stackoverflow.com/questions/69832748/error-error-a-route-is-only-ever-to-be-used-as-the-child-of-routes-element
        <div className="app-wrapper">
            {localStorage.getItem("signUp") ? <AuthorizedHeader/> : <Header/>}
            <Routes>
                <Route path="/" element={<Profile/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/readmore" element={<ReadMore/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/search" element={<Search/>}/>
            </Routes>
        </div>
    );
}

export default App;
