import Footer from "../../Common/Footer";
import Navbar from "../../Common/Navbar";
import About from "../About/About";
import Features from "../Features/Features";
import Choosblock from "./Block";
import Content from "./Content";
import Courses from "./Courses";
import Homebanner from "./Homebanner";
import Homedata from "./Homedata";


export default function Home(){
    return(
        <>
            <Navbar/>
    <Homebanner/>

    <About/>
    <Features/>
    <Homedata/>

    <Content />
    <Courses/>
    <Choosblock/>
    <Footer/>
        </>
    );
}