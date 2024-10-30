import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./AboutUs";
import AddInstitute from './adminControl/AddInstitute';
import BlogM from "./adminControl/BlogM";
import Dashboard from './adminControl/Dashboard';
import ReportReviews from './adminControl/ReportReviews';
import VerifyRequests from './adminControl/VerifyRequests';
import ViewInstitutes from './adminControl/ViewInstitutes';
import BlogPage from "./Blogs";
import FAQPage from "./FAQs";
import ContactPage from "./ContactUs";
import HomeP from "./Home";
import './index.css';
import Listing from "./InstitutesList";
import LoginPage from "./Login";
import Profile from "./Profile";
import Register from "./Register";
import ServicePage from "./Services";
import SignuPage from "./Signup";
import AllBlogs from "./AllBlogs";
import Daycares from './Daycares';
import SpecialChildcare from './SpecialChildCare';
import RightSchool from './RightSchool';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeP/>} />
          <Route exact path="/login" element={<LoginPage/>} />
          <Route exact path="/signup" element={<SignuPage/>} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/abouts" element={<AboutPage />} />
          <Route exact path="/contacts" element={<ContactPage />} />
          <Route exact path="/services" element={<ServicePage />} />
          <Route path="/services/daycares" element={<Daycares />} />
          <Route path="/services/special-childcare" element={<SpecialChildcare />} />
          <Route path="/services/right-school" element={<RightSchool />} />
          <Route exact path="/blogs" element={<BlogPage />} />
          <Route exact path="/all-blogs" element={<AllBlogs />} />
          <Route exact path="/faqs" element={<FAQPage />} />
          
          {/* <Route exact path="/homepage" element={<HomePage />} /> */}
          <Route exact path="/viewProfile" element={<Profile />} />
          <Route exact path="/listing" element={<Listing />} />

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/add-institute" element={<AddInstitute />} />
          <Route path="/admin/view-institutes" element={<ViewInstitutes />} />
          <Route path="/admin/verify-requests" element={<VerifyRequests />} />
          <Route path="/admin/report-reviews" element={<ReportReviews />} />
          <Route path="/admin/blogM" element={<BlogM />} />


        </Routes>
        
      </Router>
  );
}

export default App;
