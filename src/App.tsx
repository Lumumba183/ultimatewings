import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ArticleMenstrualHealth from './pages/articles/ArticleMenstrualHealth'
import ArticleChildrenEducation from './pages/articles/ArticleChildrenEducation'
import ArticleWidowsEmpowerment from './pages/articles/ArticleWidowsEmpowerment'
import ArticleMobileClinics from './pages/articles/ArticleMobileClinics'
import ArticleCommunitySTEM from './pages/articles/ArticleCommunitySTEM'
import ArticleGirlsEducationDay from './pages/articles/ArticleGirlsEducationDay'
import ArticleFriendshipCommunity from './pages/articles/ArticleFriendshipCommunity'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-warm-cream">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/blog/pads-are-not-charity" element={<ArticleMenstrualHealth />} />
          <Route path="/blog/63-children-and-counting" element={<ArticleChildrenEducation />} />
          <Route path="/blog/from-hardship-to-harvest" element={<ArticleWidowsEmpowerment />} />
          <Route path="/blog/mobile-clinics-healthcare" element={<ArticleMobileClinics />} />
          <Route path="/blog/community-stem-education" element={<ArticleCommunitySTEM />} />
          <Route path="/blog/girls-education-day-2026" element={<ArticleGirlsEducationDay />} />
          <Route path="/blog/together-we-rise" element={<ArticleFriendshipCommunity />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
