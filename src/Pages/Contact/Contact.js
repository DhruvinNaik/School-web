import { Link } from "react-router-dom";
import Footer from "../../Common/Footer";
import Navbar from "../../Common/Navbar";

export default function Contact(){
    return(
        <>
            <Navbar/>
            <Cbanner/>
            <Info/>
            <Map/>


    <Footer/>
        </>
    );
}

function Cbanner(){
    return(
        <>
            <section class="inner-banner py-5">
        <div class="w3l-breadcrumb py-lg-5" style={{paddingLeft:"100px", paddingRight:"100px"}}>
           
                <h4 class="inner-text-title pt-5">Contact Us</h4>
                <ul class="breadcrumbs-custom-path">
                <Link to='/'>
                    <li><a href="index.html">Home</a></li></Link>
                    <li class="active"><i class="fas fa-angle-right"></i>Contact Us</li>
                </ul>
            </div>
        
    </section>
        </>
    );
}

function Info(){
    return(
        <>
    <section class="w3l-contact py-5" id="contact" style={{paddingLeft:"100px", paddingRight:"100px"}}>
        
            <div class="title-main text-center mx-auto mb-md-5 mb-4" style={{maxWidth:"500px;"}}>
                <p class="text-uppercase">Get In Touch</p>
                <h3 class="title-style">Contact Us</h3>
            </div>
            <div class="row contact-block">
                <div class="col-md-7 contact-right">
                    <form class="signin-form" style={{backgroundColor: "rgba(189, 195, 201, 0.477)", padding:"20px", borderRadius:"10px"}}>
                        <div class="input-grids">
                            <div class="row">
                                <div class="col-sm-6">
                                    <input type="text" name="w3lName" id="w3lName" placeholder="Your Name"
                                        class="contact-input" required/>
                                </div>
                                <div class="col-sm-6">
                                    <input type="email" name="w3lSender" id="w3lSender" placeholder="Your Email"
                                        class="contact-input" required/>
                                </div>
                            </div>
                            <input type="text" name="w3lSubect" id="w3lSubect" placeholder="Subject"
                                class="contact-input" required/>
                            <input type="text" name="w3lWebsite" id="w3lWebsite" placeholder="Website URL"
                                class="contact-input"/>
                        </div>
                        <div class="form-input">
                            <textarea name="w3lMessage" id="w3lMessage" placeholder="Type your message here"
                                required></textarea>
                        </div>
                        <div class="text-start">
                            <button class="btn btn-style btn-style-3">Send Message</button>
                        </div>
                    </form>
                </div>
                <div class="col-md-5 ps-lg-5 mt-md-0 mt-5">
                    <div class="contact-left">
                        <div class="cont-details">
                            <div class="d-flex contact-grid">
                                <div class="cont-left text-center me-3">
                                    <i class="fas fa-building"></i>
                                </div>
                                <div class="cont-right">
                                    <h6>Company Address</h6>
                                    <p>Edu School, 10001, 5th Avenue, 12202 street, London.</p>
                                </div>
                            </div>
                            <div class="d-flex contact-grid mt-4 pt-lg-2">
                                <div class="cont-left text-center me-3">
                                    <i class="fas fa-phone-alt"></i>
                                </div>
                                <div class="cont-right">
                                    <h6>Call Us</h6>
                                    <p><a href="tel:+1(21) 234 4567">+1(21) 112 7368</a></p>
                                </div>
                            </div>
                            <div class="d-flex contact-grid mt-4 pt-lg-2">
                                <div class="cont-left text-center me-3">
                                    <i class="fas fa-envelope-open-text"></i>
                                </div>
                                <div class="cont-right">
                                    <h6>Email Us</h6>
                                    <p><a href="mailto:example@mail.com" class="mail">example@mail.com</a></p>
                                </div>
                            </div>
                            <div class="d-flex contact-grid mt-4 pt-lg-2">
                                <div class="cont-left text-center me-3">
                                    <i class="fas fa-headphones-alt"></i>
                                </div>
                                <div class="cont-right">
                                    <h6>Customer Support</h6>
                                    <p><a href="mailto:info@support.com" class="mail">info@support.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </section>
        </>
    );
}

function Map(){
    return(
        <>
    <div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7343.213985105295!2d72.55838!3d23.038198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85ff3a38c353%3A0xdabe316634ef7e5e!2sInfoLabz!5e0!3m2!1sen!2sin!4v1709316422736!5m2!1sen!2sin" width="100%" height="400" frameborder="0" style={{border: "0px;"}} allowfullscreen=""></iframe>

    </div>
        </>
    );
}

export {Info};