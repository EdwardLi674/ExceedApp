import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Header } from "./Header/header";
import Footer from "./Footer/footer";
// import Home from './Home'
import About from "./Pages/About/About";
import Login from "./Pages/Login/login";
import Signup from "./Pages/Signup/signup";
import ResetPassword from "./Pages/Resetpassword/resetpassword";
import TermsConditions from "./Pages/Termsconditions/termsconditions";
import Privacypolicy from "./Pages/Privacypolicy/privacypolicy";
import Welcome from "./Pages/Welcome/welcome";
import Categorytitle from "./Pages/Categorytitle/categorytitle";
import Productdetail from "./Pages/Productdetail/productdetail";
import Contactus from "./Pages/Contactus/contactus";
import Userprofile from "./Pages/Userprofile/userprofile";
import Yourorder from "./Pages/Yourorder/yourorder";
import Passreset from "./Pages/Passreset/passreset";
import Saveitem from "./Pages/Saveitem/saveitem";
import Orderdetails from "./Pages/Orderdetails/orderdetails";
import Payment from "./Pages/Payment/payment";
import Checkout from "./Pages/Checkout/checkout";
import Paid from "./Pages/Paid/paid";
import "bootstrap/dist/css/bootstrap.min.css";
import { login } from "./redux/authSlice";
import { setInit } from "./redux/appsettingSlice";
import AuthRequire from "./services/AuthRequire";
import { getFormObj, server_domain } from "./services/constants";
import { post } from "./services/axios";
import { setError } from "./redux/appsettingSlice";

function App() {
  // const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  if (!isAuthenticated) {
    // when redux store is initialized but data in localstorage is still alive, then get data from
    // localstorage and restructure the redux store auth data.
    let isAuthStorage = sessionStorage.getItem("isAuthenticated");
    if (isAuthStorage === "done") {
      let userStorage = sessionStorage.getItem("user");
      dispatch(
        login({
          isAuthenticated: true,
          user: JSON.parse(userStorage),
        })
      );
    }
  }

  const handlerAppSettingData = async () => {
    let formData = getFormObj();
    formData.append("api_method", "app_settings");
    formData.append("app_version", "1");
    formData.append("device_info", "1");

    try {
      const response = await post(server_domain, formData);
      const data = response.data;
      if (data.error) {
        dispatch(
          setError({
            isShow: true,
            alert_title: response.data.alert_title,
            alert_text: response.data.alert_text,
            alert_action_button_title: response.data.alert_action_button_title,
            alert_action_url: response.data.alert_action_url,
            message: response.data.message,
          })
        );
        return;
      }

      const settingDatas = data.app_settings.content;
      const login_content = settingDatas.find(
        (settingData) => settingData.code === "LOGIN_PAGE"
      );
      const signup_content = settingDatas.find(
        (settingData) => settingData.code === "SIGNUP_PAGE"
      );
      const password_reset_content = settingDatas.find(
        (settingData) => settingData.code === "PASSWORD_RESET_PAGE"
      );
      const welcome_content = settingDatas.find(
        (settingData) => settingData.code === "WELCOME_PAGE"
      );
      const about_content = settingDatas.find(
        (settingData) => settingData.code === "ABOUT_PAGE"
      );
      const terms_content = settingDatas.find(
        (settingData) => settingData.code === "TERMS_PAGE"
      );
      const privacy_policy_content = settingDatas.find(
        (settingData) => settingData.code === "PRIVACY_PAGE"
      );
      const contact_us_content = settingDatas.find(
        (settingData) => settingData.code === "CONTACT_PAGE"
      );
      const logo = settingDatas.find(
        (settingData) => settingData.code === "LOGO"
      );

      dispatch(
        setInit({
          login_content,
          signup_content,
          password_reset_content,
          welcome_content,
          about_content,
          terms_content,
          privacy_policy_content,
          contact_us_content,
          logo,
        })
      );
    } catch (err) {
      dispatch(
        setError({
          isShow: true,
          alert_title: "Error",
          alert_text: "",
          alert_action_button_title: "",
          alert_action_url: "",
          message: err.toString(),
        })
      );
    }
  };

  handlerAppSettingData();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route
          path="/category/:id"
          element={
            <AuthRequire>
              <Categorytitle />
            </AuthRequire>
          }
        />
        <Route
          path="/item/:id"
          element={
            <AuthRequire>
              <Productdetail />
            </AuthRequire>
          }
        />
        <Route
          path="/user-profile"
          element={
            <AuthRequire>
              <Userprofile />
            </AuthRequire>
          }
        />
        <Route
          path="/your-order"
          element={
            <AuthRequire>
              <Yourorder />
            </AuthRequire>
          }
        />
        <Route path="/pass-reset" element={<Passreset />} />
        <Route
          path="/save-item"
          element={
            <AuthRequire>
              <Saveitem />
            </AuthRequire>
          }
        />
        <Route
          path="/order-details"
          element={
            <AuthRequire>
              <Orderdetails />
            </AuthRequire>
          }
        />
        <Route
          path="/payment"
          element={
            <AuthRequire>
              <Payment />
            </AuthRequire>
          }
        />
        <Route
          path="/checkout"
          element={
            <AuthRequire>
              <Checkout />
            </AuthRequire>
          }
        />
        <Route
          path="/paid"
          element={
            <AuthRequire>
              <Paid />
            </AuthRequire>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
