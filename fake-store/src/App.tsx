import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"
import "./styles.css"

function App() {

  return (
    <>
      <Router>
          <Header/>
          <AppRoutes/>
          <Footer/>
      </Router>
    </>
  )
}

export default App
