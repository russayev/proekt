import React from "react";
import { useNavigate } from 'react-router-dom';

import '../App.css'


const Footer = () => {

    const navigate = useNavigate();
  
  // Определите текущий путь
    const currentPath = window.location.pathname;

  // Проверьте текущий путь и примените соответствующий стиль
     const footerStyle = currentPath === '/products' || currentPath === '/shoes' ? 'product-footer' : 'app-footer';


  return (
    <div className={`footer ${footerStyle}`}>
        <hr/>
        <div className="accept">
            <div>
            <h3>We accept</h3>
            <a href="#">
            <img src="http://surl.li/ogaat" alt="error" />

            </a>
            </div>
            <div>
                <h3>Like what you see? You'll like us even more here</h3>
                <a href="#">
                {/* <img src="./images/apps.jpg" alt="error"/> */}
                <img src="http://surl.li/ogaap" alt="error"/>
                </a>
            </div>
        </div>
        <hr/>
        <div className="ending">
            <div>
                <a href="#"><p>Buy In Bulk</p></a>
                <a href="#"><p>Write A Testimonial</p></a>
            </div>
            <div>
                <a href="#"><p>Whitehat</p></a>
                <a href="#"><p>Site Map</p></a>
                <a href="#"><p>Terms Of Use</p></a>
                <a href="#"><p>Privacy Policy</p></a>
                <a href="#"><p>Your Data & Security</p></a>
                <a href="#"><p>Grievance Redressal</p></a>
            </div>
        </div>
    </div>
  );
};


export default Footer;