import React from 'react'
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className="colz-icon">
                            <a target='_blank' href='https://www.facebook.com/profile.php?id=100014916303423'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a target='_blank' href='https://www.instagram.com/n.pham49/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a target='_blank' href='https://www.linkedin.com/in/nguyenphamdinh/'>
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a target='_blank' href='https://github.com/npham49'>
                                <i className='fa fa-github-square'></i>
                            </a>
                        </div>
                    </div>
                
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'm <span className="highlighted-text">Brian Pham</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Passionate Developer",
                                    1500,
                                    "Full-stack Developer",
                                    1500,
                                    "Analyst",
                                    1500,
                                ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Dedicated software/web developer with a strong interest 
                                in responsive, scalable applications.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn">
                            {""}
                            Contact Me{" "}
                        </button>
                        <a href="BrianPham-GeneralResume.pdf" download="BrianPham-GeneralResume.pdf">
                            <button className="btn highlighted-btn">Get Resume</button> 
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
            
        </div>
    )
}