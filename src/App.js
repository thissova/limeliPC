import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import OurWorks from "./components/OurWorks/OurWorks";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className={"app"}>
            <div className={"gradient_bg"}>
            <Navbar />
            <Header />
            </div>
            <AboutUs />
            <OurWorks />
            <Footer />
        </div>
    );
}

export default App;
