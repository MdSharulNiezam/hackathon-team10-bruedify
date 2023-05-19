// Navgation for Public View Home Page
import IntroductionPage from './pages/IntroductionPage';
import SignInPage from './pages/SignInPage';
import CreateAccPage from './pages/CreateAccPage';
import ContactPage from './pages/ContactPage';

//  Navigation for Member
import IndexPage from './pages/IndexPage';
import CoursesPage from './pages/CoursesPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Qul Nav
import InternshipPage from './pages/InternshipPage';
import JobPage from './pages/JobPage';
import MyLearningPage from './pages/MyLearningPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Home Navigation */}
        <Route path="/" element={<IntroductionPage />} />
        <Route path="/SignIn" element={<SignInPage />} />
        <Route path="/CreateAccount" element={<CreateAccPage />} />
        <Route path="/ContactUs" element={<ContactPage />} />

        {/* Member Navigation */}
        <Route path="/Index/:Email" element={<IndexPage />} />
        <Route path="/Index/Courses" element={<CoursesPage />} />
          {/* Qul */}
        <Route path="/InternshipPage" element={<InternshipPage />} />
        <Route path="/JobPage" element={<JobPage />} />
        <Route path="/MyLearningPage" element={<MyLearningPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/CartPage" element={<CartPage />} />
      </Routes>
    </Router>
  )
}

export default App;
