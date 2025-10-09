import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from '@/pages/LandingPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Future routes:
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
