import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <footer className='container-fluid footer text-left mt-3'>
            <p className = 'mr-auto'>
                Developed by: 
                <strong>Sneha Sawla</strong>
            </p>
            <div style={{ float: 'right'}}>
                <Link to='snehasawla2409@gmail.com' style={{marginRight: '10px'}}>
                    <i 
                    className='fa fa-envelop-open'
                    aria-hidden='true'
                    style={{fontSize: "20px"}}></i>
                </Link>
                <Link 
                  to='https://www.github.com/Snehasawla'
                  target='_blank'
                  style ={{ marginRight: "10px"}}>
                      <i
                        className='fa fa-github'
                        aria-hidden='true'
                        style={{fontSize: '20px' }}></i>
                  </Link>
                  <Link 
                  to='https://www.linkedin.com/sneha-sawla'
                  target='_blank'
                  style ={{ marginRight: "10px"}}>
                      <i
                        className='fa fa-linkedin'
                        aria-hidden='true'
                        style={{fontSize: '20px' }}></i>
                  </Link>

            </div>
        </footer>
    )
}