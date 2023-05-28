// import React from "react";
import HeroPic from "../assets/png/hero-pic.png";
// import { ReactComponent as ReactLogo } from '../assets/hero-pic.svg';
 


export const Hero = () => {
  return (
    <>
        <div className=" " id="hero-background">
        <style jsx>
                {`
                    .animate__animated.animate__bounce {
                        --animate-duration: 4s;
                        animation-iteration-count: infinite;
                      }
                `}
                </style>

            <div className="flex flex-col-reverse h-[56rem] md:h-[35rem] bottom-[18rem] md:bottom-0 md:grid md:grid-cols-2 md:-space-x-10 relative ">
                {/* left */}
                <div className="flex flex-col top-3 items-center md:flex-col -py-12 md:-py-0 md:ps-20 md:items-start justify-center text-center md:text-start space-y-8 md:space-y-16 relative md:bottom-16">
                    <h1 className="text-2xl md:text-3xl md:tracking-wider animate__animated animate__fadeInUp" id="hero-h1">
                        We provide easy solution <br />
                        to exchange your <span className="font-bold"> Bitcoin/ <br />
                        GiftCard for money </span> 
                    </h1>
    
                    <h2 className="text-base md:text-xl px-3 md:px-0 animate__animated animate__fadeInUp">
                        CoinBase is a platform for trading your bitcoin and <br />
                        giftcard at the best rate, why not give us a trial.
                    </h2>
    
                    <span className="bg-white text-purple-600 font-bold rounded-full px-9 py-3 cursor-pointer">GET STARTED</span>
    
                </div>
    
                {/* right */}
               
                <div className="relative md:flex md:flex-col top-3 md:top-0 mx-auto animate__animated animate__bounce">
                    <img src={HeroPic} alt="landing page" id="hero-image"/>
                </div>
    
            </div>
            
        </div>
    </>
  )
}
