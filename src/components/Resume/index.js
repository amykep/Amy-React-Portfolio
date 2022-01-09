import React from 'react';
import resumeImg from "../../images/resume.png";


function Resume()
{
    return (
        <section>
            <div className="container">
                <img src={resumeImg} alt="Amy Resume" />
            </div>
        </section>
    );
}

export default Resume;