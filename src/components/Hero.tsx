import React from "react";
import { ReactComponent as ReactLogo } from '../assets/hero-pic.svg';
 


export const Hero = () => {
  return (
    <>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:-space-x-10 -mb-10 pb-10" id="hero-background">

            {/* left */}
            <div className="flex flex-col items-center md:flex-col md:ps-20 md:items-start justify-center text-center md:text-start space-y-9 mb-5">
                <h1 className="text-2xl md:text-3xl md:tracking-wider">
                    We provide easy solution <br />
                    to exchange your <span className="font-bold"> Bitcoin/ <br />
                    GiftCard for money </span> 
                </h1>

                <h2 className="text-base md:text-xl">
                    CoinBase is a platform for trading your bitcoin and <br />
                    giftcard at the best rate, why not give us a trial.
                </h2>

                <span className="bg-white text-slate-950 rounded-full px-9 py-3 cursor-pointer">GET STARTED</span>

            </div>

            {/* right */}
            <div className="md:flex md:flex-col">
                {/* <img src={HeroPic} alt="" /> */}
                <ReactLogo />
            </div>
            
        </div>
    </>
  )
}
