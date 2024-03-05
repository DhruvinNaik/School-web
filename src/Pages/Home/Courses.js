import { Link } from "react-router-dom";

export default function Courses(){
    return(
        <>
                <div class="w3l-grids-block-5 home-course-bg py-5" id="courses" style={{paddingLeft:"100px", paddingRight:"100px"}}>

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
            </div>
            <div class="text-center mt-sm-5 mt-4 pt-sm-0 pt-1">
                <Link to='/courses'>
                <a class="btn btn-style btn-style-secondary mt-sm-3" href="courses.html">
                    Browse more courses</a>
                    </Link>
            </div>
        </div>
   
        </>
    );
}