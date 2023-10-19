import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import NotFound from "./Pages/Shared/NotFound";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./Pages/Login/RequireAuth";
// import Tools from './Pages/Home/Tools';
import Blogs from "./Pages/Blogs/Blogs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder";
import AddReview from "./Pages/Dashboard/AddReview";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import RequreAdmin from "./Pages/Login/RequreAdmin";
import AddProducts from "./Pages/Dashboard/AddProducts";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import Payment from "./Pages/Dashboard/Payment";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Accessories from "./Pages/Accessories/Accessories";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/accessories"
          element={<Accessories></Accessories>}
        ></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route
            path="addproducts"
            element={<AddProducts></AddProducts>}
          ></Route>
          <Route
            path="manageorders"
            element={<ManageOrders></ManageOrders>}
          ></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route
            path="manageproducts"
            element={<ManageProducts></ManageProducts>}
          ></Route>
          <Route
            path="makeadmin"
            element={
              <RequreAdmin>
                <MakeAdmin></MakeAdmin>
              </RequreAdmin>
            }
          ></Route>
        </Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
