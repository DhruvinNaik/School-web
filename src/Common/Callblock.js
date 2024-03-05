import { Link } from "react-router-dom";

export default function Callblock(){
    return(
        <>
        <section class="w3l-call-to-action-6" style={{paddingLeft:"200px", paddingRight:"200px", padding:"50px"}}>
      
            <div class="d-lg-flex align-items-center justify-content-between">
                <div class="left-content-call">
                    <h3 class="title-big">Call To Enroll Your Child</h3>
                    <p class="text-white mt-1">Begin the change today!</p>
                </div>
                <div class="right-content-call mt-lg-0 mt-4">
                    <ul class="buttons">
                        
                        <li class="phone-sec me-lg-4"><i class="fas fa-phone-volume"></i>
                            <a class="call-style-w3" href="tel:+1(23) 456 789 0000"> +91 98765 43210</a>
                        </li><Link to='/admission'>
                        <li><a href="contact.html" class="btn btn-style btn-style-2 mt-lg-0 mt-3">Join for free</a>
                        </li></Link>
                    </ul>
                </div>
            </div>
     
    </section>
        </>
    );
}
