import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from 'react-router-dom';
function App() {

  return (
    <>
    <div style={{height:'100vh'}}>
    <Header />
    <Outlet/>
    <Footer />
    </div>
    </>
  )
}

export default App
