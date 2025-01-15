import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./component/Header";
import Login from "./pages/Auth/Login"
import Footer from "./component/Footer";
import Signup from "./pages/Auth/Signup";
import PostAd from "./pages/PostAdd";
import Auth from "./pages/Auth/Auth";
import GetPostAd from "./items/GetPostAd";
import MyAccount from "./pages/myaccounts/MyAccount";
import Categories from "./categories/Categories";
import Routing from "./categories/[id]/routing";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EditPost from "./pages/myaccounts/edit/edit";
function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "/auth" && <Header />}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/post-add" element={<PostAd />} />
        <Route path="/getpost-ad" element={<GetPostAd />}/>
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<Routing />} />
      </Routes>
     <Footer />
      </>
  )
}

export default App
