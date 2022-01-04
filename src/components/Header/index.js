import React from 'react';

function Header()
{
    return (
        <section className="header" id="header">
            <h1>Amy Keppler</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#resume">Resume</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default Header;