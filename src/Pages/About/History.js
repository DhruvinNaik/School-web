import React from 'react';
import './About.css'; // Import CSS file for styling
import Future from '../../Image/banner.jpg';
export default function History() {
    return (
        <>
            <div className="background">
                <div className="container">
                    <div className="card" id='card1'>
                        <img src={Future} alt="Image 1" style={{marginBottom:"10px"}}/>
                        <h4 style={{marginBottom:"10px"}}>Inception & Legendary Past</h4>
                        <p style={{ color: "gray",marginBottom:"10px" }}>Late Sh. Jagan Nath Abrol devoted his entire life to uplift the downtrodden and needy people.</p>
                        <button className='readmore'>Read More</button>
                    </div>
                    <div className="card">
                        <img src="https://i.pinimg.com/originals/0a/65/c2/0a65c271f14b5e6ed02bf1eb00f6953e.jpg" alt="Image 2" style={{marginBottom:"10px"}}/>
                        <h4 style={{marginBottom:"10px"}}>Present Prospects</h4>
                        <p style={{ color: "gray",marginBottom:"10px" }}>MV School was established in 2004 with a modest strength of 70 students on rolls.</p>
                        <button className='readmore'>Read More</button>
                    </div>
                    <div className="card">
                        <img src="https://i.pinimg.com/originals/b5/19/58/b519583530e9e198dd335eb365277986.jpg" alt="Image 3" style={{marginBottom:"10px"}}/>
                        <h4 style={{marginBottom:"10px"}}>Future Prospects</h4>
                        <p style={{ color: "gray",marginBottom:"10px" }}>To be a premier educational institution which aims at a holistic, student-centered learning environment.</p>
                        <button className='readmore'>Read More</button>
                    </div>
                </div>
            </div>
        </>
    );
}
