import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/me.jpg';

const Portfolio = () => {
    return (
        <div className='flex justify-center items-center py-64'>
            <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Movie"/></figure>
                <div class="card-body">
                    <h2 class="card-title">This is Humayra Nur Ananna</h2>
                    <p>Email Address: anannaanu974@gmail.com</p>
                    <p>Education Background: CSE 1st year</p>
                    <p>Tech Stack I know : Reactjs, Javascript, HTML, CSS, Mongodb, Bootstrap, Tailwind css, git and github</p>
                    <p>My 3 projects Link: 1. <Link to="https://perfume-inventory-system.web.app/ ">Perfume Inventory System</Link></p>
                    <p>2. <Link to="https://independent-service-prov-77fa5.web.app/ ">Independent Service Provider</Link></p>
                    <p>3. <Link to="https://lamp-light-analysis.netlify.app/ ">Lamp Light Analysis</Link></p>                      
                </div>
            </div>
        </div>
    );
};

export default Portfolio;