import './About.css';

import History from './History';
export default function About(){
    return(
        <>
            <div class="title-main text-center mx-auto mb-md-5 mb-4" style={{maxWidth:"500px;",marginTop:"40px"}}>
                <h3 class="title-style">WELCOME TO MV SCHOOLS</h3><br/>
                <h4 style={{color:"gray"}}>MVIS envisions to Design, Develop & Deliver best possible education to develop world class citizens</h4><br/>
                <p style={{marginRight:"400px",marginLeft:"400px"}}>MVIS has been developed with a spirit and vision to be a center of excellence for holistic development of students. It is a CBSE affiliated, English medium School, from Pre-Nursery to Class 12th with Science, Commerce and Humanities Streams. We provide opportunities to our students, as per their individual capabilities.<br/></p>
                <p style={{color:"gray"}}>MVIS has demonstrated its excellence by securing top positions in CBSE Examinations in District Samba along with merit performances in sports and curricular events.</p>
                <History/>
            </div>
  
        </>
    );
}