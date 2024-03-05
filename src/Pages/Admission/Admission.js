
import { Link } from "react-router-dom";
import Callblock from "../../Common/Callblock";
import Footer from "../../Common/Footer";
import Navbar from "../../Common/Navbar";
import Form from "./Form";

export default function Admission(){
    return(
        <>
            <Navbar/>
            <Admissionbanner/>
            <Form/><br/><br/><br/>
            <Callblock/>
            <Footer/>
        </>
    );
}

function Admissionbanner(){
    return(
        <>
            <section class="inner-banner2 py-5">
        <div class="w3l-breadcrumb py-lg-5" style={{paddingLeft:"100px", paddingRight:"100px"}}>
           
                <h4 class="inner-text-title pt-5">Admission</h4>
                <ul class="breadcrumbs-custom-path">
                    <Link to='/'>
                    <li><a href="index.html">Home</a></li></Link>
                    <li class="active"><i class="fas fa-angle-right"></i>Admission</li>
                </ul>
            </div>
        
    </section>
        </>
    );
}