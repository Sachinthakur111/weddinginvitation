import React from 'react';
import '../OurStory.css';
import img3 from '../images/relationship.jpg'
import img2 from '../images/date.jpg'
import img1 from '../images/meet.jpeg'
const WeadingDetails = () => {
    return (
        <section className="section w-details-area center-text">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="heading">
                            <span>We Love Each Other</span>
                            <h2 className="title">Our Story</h2>
                            <p>To love a person is to see all of their magic, and to remind them of it when they have forgotten.</p>
                            <p>Ah, life grows lovely where you are.</p>
                            <span className="heading-bottom"><i className="icon icon-star"></i></span>
                        </div>
                    </div>
                    <div className="col-md-12 col-md-offset-0">
                        <ul className="timeline animate-box fadeInUp animated-fast">
                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img1})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">First We Met</h3>
                                        <span className="date">August 20, 2021</span>
                                    </div>
                                    <div className="timeline-body">
                                        
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img2})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">First Date</h3>
                                        <span className="date"><i className="icon icon-date"></i>September 20, 2021</span>
                                    </div>
                                    <div className="timeline-body">
                                        
                                    </div>
                                </div>
                            </li>
                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img3})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">In A Relationship</h3>
                                        <span className="date">March 10, 2022</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>It's our engagement time. We started new relationship.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WeadingDetails;