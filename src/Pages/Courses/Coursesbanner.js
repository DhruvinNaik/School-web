import { Link } from "react-router-dom";

export default function Coursesbanner(){
    return(
        <>
                <section class="inner-banner py-5">
        <div class="w3l-breadcrumb py-lg-5" style={{paddingLeft:"100px", paddingRight:"100px"}}>
            
                <h4 class="inner-text-title pt-5">Courses</h4>
                <ul class="breadcrumbs-custom-path">
                    <Link to='/'>
                    <li><a href="index.html">Home</a></li></Link>
                    <li class="active"><i class="fas fa-angle-right"></i>Courses</li>
                </ul>
            </div>
       
    </section>

    <Coursesdata/>
        </>
    );
}

function Coursesdata(){
    return(
        <>
                <div class="w3l-grids-block-5 py-5" style={{paddingLeft:"100px", paddingRight:"100px"}}>
    
            <div class="title-main text-center mx-auto mb-md-5 mb-4" style={{maxWidth:"500px;"}}>
                <p class="text-uppercase">Best Courses</p>
                <h3 class="title-style">Find The Right Course For You</h3>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="coursecard-single">
                        <div class="grids5-info position-relative">
                            <img src="assets/images/c1.jpg" alt="" class="img-fluid" />
                            <div class="meta-list">
                                <a href="courses.html">Art & Design</a>
                            </div>
                        </div>
                        <div class="content-main-top">
                            <div class="content-top mb-4 mt-3">
                                <ul class="list-unstyled d-flex align-items-center justify-content-between">
                                    <li> <i class="fas fa-book-open"></i> 43 Lesson</li>
                                    <li> <i class="fas fa-star"></i> 4.5</li>
                                </ul>
                            </div>
                            <h4><a href="courses.html">Educational Programs</a></h4>
                            <p>Explore our comprehensive educational programs tailored to nurture every student's potential.</p>
                            <div class="top-content-border d-flex align-items-center justify-content-between mt-4 pt-4">
                            
                                <a class="btn btn-style-primary" href="courses.html">Know Details<i
                                        class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div class="coursecard-single">
                        <div class="grids5-info position-relative">
                            <img src="assets/images/c2.jpg" alt="" class="img-fluid" />
                            <div class="meta-list">
                                <a href="courses.html" class="sec-2">Meditation</a>
                            </div>
                        </div>
                        <div class="content-main-top">
                            <div class="content-top mb-4 mt-3">
                                <ul class="list-unstyled d-flex align-items-center justify-content-between">
                                    <li> <i class="fas fa-book-open"></i> 72 Lesson</li>
                                    <li> <i class="fas fa-star"></i> 4.3</li>
                                </ul>
                            </div>
                            <h4><a href="courses.html">Best Meditation Classes</a></h4>
                            <p>Embark on a journey of inner peace and mindfulness with our exceptional meditation classes offered on our school website.</p>
                            <div class="top-content-border d-flex align-items-center justify-content-between mt-4 pt-4">
                               
                                <a class="btn btn-style-primary" href="courses.html">Know Details<i
                                        class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div class="coursecard-single">
                        <div class="grids5-info position-relative">
                            <img src="assets/images/c3.jpg" alt="" class="img-fluid" />
                            <div class="meta-list">
                                <a href="courses.html" class="sec-3">Games</a>
                            </div>
                        </div>
                        <div class="content-main-top">
                            <div class="content-top mb-4 mt-3">
                                <ul class="list-unstyled d-flex align-items-center justify-content-between">
                                    <li> <i class="fas fa-book-open"></i> 14 Lesson</li>
                                    <li> <i class="fas fa-star"></i> 4.2</li>
                                </ul>
                            </div>
                            <h4><a href="courses.html">Games Program in a Week</a></h4>
                            <p>Immerse in a week-long gaming program at our school, fostering skills and fun for all enthusiasts.</p>
                            <div class="top-content-border d-flex align-items-center justify-content-between mt-4 pt-4">
                                
                                <a class="btn btn-style-primary" href="courses.html">Know Details<i
                                        class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-lg-4 col-md-6 mt-4">
                    <div class="coursecard-single">
                        <div class="grids5-info position-relative">
                            <img src="assets/images/c4.jpg" alt="" class="img-fluid" />
                            <div class="meta-list">
                                <a href="courses.html">Development</a>
                            </div>
                        </div>
                        <div class="content-main-top">
                            <div class="content-top mb-4 mt-3">
                                <ul class="list-unstyled d-flex align-items-center justify-content-between">
                                    <li> <i class="fas fa-book-open"></i> 23 Lesson</li>
                                    <li> <i class="fas fa-star"></i> 5.0</li>
                                </ul>
                            </div>
                            <h4><a href="courses.html">Development Program</a></h4>
                            <p>Elevate student potential with our comprehensive development program on our school website.</p>
                            <div class="top-content-border d-flex align-items-center justify-content-between mt-4 pt-4">
                                
                                <a class="btn btn-style-primary" href="courses.html">Know Details<i
                                        class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-4">
                    <div class="coursecard-single">
                        <div class="grids5-info position-relative">
                            <img src="assets/images/c5.jpg" alt="" class="img-fluid" />
                            <div class="meta-list">
                                <a href="courses.html" class="sec-2">Audio & Music</a>
                            </div>
                        </div>
                        <div class="content-main-top">
                            <div class="content-top mb-4 mt-3">
                                <ul class="list-unstyled d-flex align-items-center justify-content-between">
                                    <li> <i class="fas fa-book-open"></i> 40 Lesson</li>
                                    <li> <i class="fas fa-star"></i> 4.6</li>
                                </ul>
                            </div>
                            <h4><a href="courses.html">Best Music Classes</a></h4>
                            <p>Unlock your musical potential with our enriching music classes tailored for students of all skill levels.</p>
                            <div class="top-content-border d-flex align-items-center justify-content-between mt-4 pt-4">
                                
                                <a class="btn btn-style-primary" href="courses.html">Know Details<i
                                        class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mt-4">
                    <div class="coursecard-single">
                        <div class="grids5-info position-relative">
                            <img src="assets/images/c6.jpg" alt="" class="img-fluid" />
                            <div class="meta-list">
                                <a href="courses.html" class="sec-3">Labs</a>
                            </div>
                        </div>
                        <div class="content-main-top">
                            <div class="content-top mb-4 mt-3">
                                <ul class="list-unstyled d-flex align-items-center justify-content-between">
                                    <li> <i class="fas fa-book-open"></i> 20 Lesson</li>
                                    <li> <i class="fas fa-star"></i> 4.8</li>
                                </ul>
                            </div>
                            <h4><a href="courses.html">Labs Programs</a></h4>
                            <p>Explore innovative Labs Program offering hands-on learning experiences in diverse disciplines on our school website.</p>
                            <div class="top-content-border d-flex align-items-center justify-content-between mt-4 pt-4">
                               
                                <a class="btn btn-style-primary" href="courses.html">Know Details<i
                                        class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   
            {/* <div class="pagination-style text-center mt-5">
                <ul>
                    <li> <a href="#none" class="not-allowed" disabled="">
                            <span class="fa fa-angle-double-left" aria-hidden="true"></span>
                        </a>
                    </li>
                    <li><a class="active" href="#page">1</a></li>
                    <li>
                        <a href="#page">2</a>
                    </li>
                    <li>
                        <a href="#page">3</a>
                    </li>
                    <li>
                        <a href="#page"><span class="fa fa-angle-double-right" aria-hidden="true"></span>
                        </a>
                    </li>
                </ul>
            </div> */}

        </div>
  
        </>
    );
}