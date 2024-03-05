import { Link } from "react-router-dom";
import MarqueeNotice from "./Marqueenotice";
export default function Homebanner(){
    return(
        <>
                <section id="home" class="w3l-banner py-5">
        <div class="banner-content" style={{paddingLeft:"300px", paddingRight:"100px"}}>

                <div class="row align-items-center pt-sm-5 pt-4">
                    <div class="col-md-6">
                        <h3 class="mb-lg-4 mb-3">Your Kids Deserve The<span class="d-block">Best Education</span>
                        </h3>
                        <p class="banner-sub">Active Learning, Expert Teachers & Safe Environment</p>
                        <div class="d-flex align-items-center buttons-banner">
                            <Link to='/admission'>
                            <a href="contact.html" class="btn btn-style mt-lg-5 mt-4" style={{width:"300px"}}>Admission Now</a>&nbsp;&nbsp;&nbsp;&nbsp;
                            </Link>
                        </div>
                    </div>
                    <div class="col-md-6 right-banner-2 text-end position-relative mt-md-0 mt-5">
                        <div class="sub-banner-image mx-auto">
                            <img src="assets/images/banner.png" class="img-fluid position-relative" alt=" " />
                        </div>
                        <div class="banner-style-1 position-absolute">
                            <div class="banner-style-2 position-relative">
                                <h4>Back to School</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MarqueeNotice/>
    </section>

    
        </>
    );
}