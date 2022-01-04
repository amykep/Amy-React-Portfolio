import React from 'react';
import project1 from "../../images/dog-cat-breed.png";
import project2 from "../../images/project2-sm.png";
import project3 from "../../images/project 2.png";
import project4 from "../../images/project 5.png";

function Projects()
{
    return (
        <section id="projects" class="right-side proj">
            <div class="proj-title">
                <h2>Projects Sample</h2>
                <p>To be replaced with actual work in the future.</p>
            </div>
            <div class="proj-img">
                <div>
                    <h3>Project 1:</h3><a href="https://amykep.github.io/dog-cat-breed-search/">
                        <img src={project1} alt="Dod-Cat-Breeds" /></a>
                </div>
                <div>
                    <h3>Project 2:</h3><a href="https://peaceful-ridge-93332.herokuapp.com/">
                        <img src={project2} alt="Online Course Library" /></a>
                </div>
                <div class="proj-img">
                    <div>
                        <h3>Project 3:</h3>
                        <img src={project3} alt="project 3" />
                    </div>
                    <div>
                        <h3>Project 4:</h3>
                        <img src={project4} alt="project 4" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;