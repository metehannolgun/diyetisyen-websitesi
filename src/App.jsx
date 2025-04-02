import Navbar from './Components/Navbar'
import AppRoutes from './AppRoutes'
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
   <Router>
    <Navbar />
    <AppRoutes />
   </Router>
  )
}

export default App