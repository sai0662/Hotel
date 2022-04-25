import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='main-footer'>
            <div className='container'>
                <div className='footer-links'>
                     <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>CONTACT</h2>
                            <li>SaiTeja Potluri</li>
                           <ul>
                               <li>
                                   Hyderabad
                               </li>
                              
                               <li>
                                   500026
                               </li>
                           </ul>
                           <ul>
                               <li>+91-8885987564</li>
                               <li>sait0662@gmail.com</li>
                           </ul>
                        
                        </div>

                        <div className='footer-link-items2'>
                            <h2>COMPANY</h2>
                           <li>
                           
                           <Link to='/Contact' style={{textDecoration:'none',color:'grey'}}>About Us</Link> 
                           </li>
                          
                        
                        </div>  

                        <div className='footer-link-items3'>
                            <h2>MORE LINKS</h2>
                           
                               
                               <li>
                                   <Link to='/Home' style={{textDecoration:'none',color:'grey'}}>Home</Link>
                               </li>
                              </div> 
                     </div>
                </div>
            </div>
            <div className='footer-row'>
                <span>© 2022 ,Hotels.</span>
            </div>
        </div>
    );
}

export default Footer;