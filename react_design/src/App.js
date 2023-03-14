import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Header/header';
import Footer from './Footer/footer';
// import Home from './Home'
import About from './Pages/About/About';
import Login from './Pages/Login/login';
import Signup from './Pages/Signup/signup';
import ResetPassword from './Pages/Resetpassword/resetpassword';
import TermsConditions from './Pages/Termsconditions/termsconditions';
import Privacypolicy from './Pages/Privacypolicy/privacypolicy';
import Welcome from './Pages/Welcome/welcome';
import Categorytitle from './Pages/Categorytitle/categorytitle';
import Productdetail from './Pages/Productdetail/productdetail';
import Contactus from './Pages/Contactus/contactus';
import Userprofile from './Pages/Userprofile/userprofile';
import Yourorder from './Pages/Yourorder/yourorder';
import Passreset from './Pages/Passreset/passreset';
import Saveitem from './Pages/Saveitem/saveitem';
import Orderdetails from './Pages/Orderdetails/orderdetails';
import Payment from './Pages/Payment/payment';
import Checkout from './Pages/Checkout/checkout';
import Paid from './Pages/Paid/paid';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


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
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/categorytitle" element={<Categorytitle />} />
        <Route path="/product-detail" element={<Productdetail />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/user-profile" element={<Userprofile />} />
        <Route path="/your-order" element={<Yourorder />} />
        <Route path="/pass-reset" element={<Passreset />} />
        <Route path="/save-item" element={<Saveitem />} />
        <Route path="/order-details" element={<Orderdetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/paid" element={<Paid />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
