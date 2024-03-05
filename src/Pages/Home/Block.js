import Callblock from "../../Common/Callblock";

export default function Choosblock(){
    return(
        <>
                <section class="w3l-service-1 py-5" style={{paddingLeft:"100px", paddingRight:"100px"}}>
            <div class="title-main text-center mx-auto mb-md-5 mb-4" style={{maxWidth:"500px;"}}>
                <p class="text-uppercase">Why Choose Us</p>
                <h3 class="title-style">Tools For Teachers And Learners</h3>
            </div>
            <div class="row content23-col-2 text-center">
                <div class="col-md-6">
                    <div class="content23-grid content23-grid1">
                        <h4><a href="about.html">Expert Teachers</a></h4>
                    </div>
                </div>
                <div class="col-md-6 mt-md-0 mt-4">
                    <div class="content23-grid content23-grid2">
                        <h4><a href="about.html">Safe Environment</a></h4>
                    </div>
                </div>
            </div>
    </section>
    <Statesblock/>
    <Testimonialblock/>
    <Blogblock/>
    <Callblock/>
        </>
    );
}

function Statesblock(){
    return(
        <>
                <section class="w3-stats pt-4 pb-5" id="stats" style={{paddingLeft:"100px", paddingRight:"100px"}}>
    
            <div class="title-main text-center mx-auto mb-md-5 mb-4" style={{maxWidth:"500px;"}}>
                <p class="text-uppercase">Our Statistics</p>
                <h3 class="title-style">We are Proud to Share with You</h3>
            </div>
            <div class="row text-center pt-4">
                <div class="col-md-3 col-6">
                    <div class="counter">
                        <img src="assets/images/icon-1.png" alt="" class="img-fluid" />
                        <div class="timer count-title count-number mt-sm-1" data-to="36076" data-speed="1500"></div>
                        <p class="count-text">Students Enrolled</p>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="counter">
                        <img src="assets/images/icon-2.png" alt="" class="img-fluid" />
                        <div class="timer count-title count-number mt-3" data-to="786" data-speed="1500"></div>
                        <p class="count-text">Our Branches</p>
                    </div>
                </div>
                <div class="col-md-3 col-6 mt-md-0 mt-5">
                    <div class="counter">
                        <img src="assets/images/icon-3.png" alt="" class="img-fluid" />
                        <div class="timer count-title count-number mt-3" data-to="3630" data-speed="1500"></div>
                        <p class="count-text">Total Courses</p>
                    </div>
                </div>
                <div class="col-md-3 col-6 mt-md-0 mt-5">
                    <div class="counter">
                        <img src="assets/images/icon-4.png" alt="" class="img-fluid" />
                        <div class="timer count-title count-number mt-3" data-to="6300" data-speed="1500"></div>
                        <p class="count-text">Awards Won</p>
                    </div>
                </div>
            </div>
    
    </section>
        </>
    );
}

function Testimonialblock(){
    return(
        <>
                <section class="w3l-index4 py-5" id="testimonials" style={{paddingLeft:"100px", paddingRight:"100px"}}>

            <div class="content-slider text-center">
                <div class="clients-slider">
                    <div class="mask">
                        <ul>
                            <li class="anim1">
                                <img src="assets/images/testi1.jpg" class="img-fluid rounded-circle"
                                    alt="client image" />
                                <blockquote class="quote"><q>Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse
                                        cillum dolore eu. Excepteur sint occaecat cupidatat
                                        non proident, sunt in culpa qui officia deserunt mollit anim id est
                                        laborum.
                                    </q> </blockquote>
                                <div class="source">- Mario Spe</div>
                            </li>

                            <li class="anim2">
                                <img src="assets/images/testi2.jpg" class="img-fluid rounded-circle"
                                    alt="client image" />
                                <blockquote class="quote"><q>Sed ut perspiciatis unde omnis iste natus error sit
                                        voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                                        illo
                                        inventore.
                                    </q> </blockquote>
                                <div class="source">- Petey Cru</div>
                            </li>
                            <li class="anim3">
                                <img src="assets/images/testi3.jpg" class="img-fluid rounded-circle "
                                    alt="client image" />
                                <blockquote class="quote"><q>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam,
                                        quis nostrud exercitation.
                                    </q> </blockquote>
                                <div class="source">- Anna Sth</div>
                            </li>
                            <li class="anim4">
                                <img src="assets/images/testi1.jpg" class="img-fluid rounded-circle"
                                    alt="client image" />
                                <blockquote class="quote"><q>Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse
                                        cillum dolore eu. Excepteur sint occaecat cupidatat
                                        non proident, sunt in culpa qui officia deserunt mollit anim id est
                                        laborum.
                                    </q> </blockquote>
                                <div class="source">- Gail For</div>
                            </li>
                            <li class="anim5">
                                <img src="assets/images/testi2.jpg" class="img-fluid rounded-circle"
                                    alt="client image" />
                                <blockquote class="quote"><q>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam,
                                        quis nostrud exercitation.
                                    </q> </blockquote>
                                <div class="source">- Boye Fra</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
      
    </section>
        </>
    );
}

function Blogblock(){
    return(
        <>
                <div class="w3l-blog-block-5 py-5" id="blog" style={{paddingLeft:"100px", paddingRight:"100px"}}>

            <div class="title-main text-center mx-auto mb-md-5 mb-4" style={{maxWidth:"500px;"}}>
                <p class="text-uppercase">Our News</p>
                <h3 class="title-style">Latest <span>Blog</span> Posts</h3>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="blog-card-single">
                        <div class="grids5-info">
                            <a href="#blog"><img src="assets/images/blog2.jpg" alt="" /></a>
                            <div class="blog-info">
                                <h4><a href="#blog">Education Programs...</a></h4>
                                <p>mpower young minds through interactive learning experiences, fostering curiosity and critical thinking skills for a brighter tomorrow.</p>
                                <div class="d-flex align-items-center justify-content-between mt-4">
                                    <a class="d-flex align-items-center" href="#blog" title="23k followers">
                                        <img class="img-fluid" src="assets/images/testi2.jpg" alt="admin"
                                            style={{maxWidth:"40px"}} /> <span class="small ms-2">Aaradhya Gupta</span>
                                    </a>
                                    <p class="date-text"><i class="far fa-calendar-alt me-1"></i>Oct 06, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div class="blog-card-single">
                        <div class="grids5-info">
                            <a href="#blog"><img src="assets/images/blog1.jpg" alt="" /></a>
                            <div class="blog-info">
                                <h4><a href="#blog">Games Programs...</a></h4>
                                <p>Embark on a journey of fun and excitement with our selection of games and recreational activities, where laughter and learning go hand in hand.</p>
                                <div class="d-flex align-items-center justify-content-between mt-4">
                                    <a class="d-flex align-items-center" href="#blog" title="23k followers">
                                        <img class="img-fluid" src="assets/images/testi1.jpg" alt="admin"
                                            style={{maxWidth:"40px"}} /> <span class="small ms-2">Ananya Patel</span>
                                    </a>
                                    <p class="date-text"><i class="far fa-calendar-alt me-1"></i>Oct 10, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div class="blog-card-single">
                        <div class="grids5-info">
                            <a href="#blog"><img src="assets/images/blog3.jpg" alt="" /></a>
                            <div class="blog-info">
                                <h4><a href="#blog">Articles Programs...</a></h4>
                                <p>Ignite your creativity and passion for the arts with our enriching programs that celebrate expression, imagination, and cultural diversity..</p>
                                <div class="d-flex align-items-center justify-content-between mt-4">
                                    <a class="d-flex align-items-center" href="#blog" title="23k followers">
                                        <img class="img-fluid" src="assets/images/testi3.jpg" alt="admin"
                                            style={{maxWidth:"40px"}} /> <span class="small ms-2">Priya Sharma
                                        </span>
                                    </a>
                                    <p class="date-text"><i class="far fa-calendar-alt me-1"></i>Oct 12, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}

