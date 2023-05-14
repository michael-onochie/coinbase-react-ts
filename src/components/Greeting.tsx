import GreetingPic from "../assets/greeting-pic.png";
import LineLG from "../assets/line-lg.png";

export const Greeting = () => {
  return (
    <>
        <div className="flex flex-col space-y-6 md:grid md:grid-cols-2 pb-6 md:h-[600px] md:-mb-32" id="greeting-bg">

            {/* left */}
            <div className="md:flex md:flex-col justify-center ">
                <img src={GreetingPic} alt="" />
            </div>
            

            {/* right */}
            <div className="flex flex-col px-10 md:flex-col items-center space-y-9 mb-8 md:px-6 md:py-5 justify-center">
                <div className="flex flex-col space-y-3 items-center md:items-start justify-center">
                    <h1 className="text-3xl font-bold text-center md:text-start"  id="span-text">Welcome to CoinBase</h1>
                    <img src={LineLG} alt="" />
                </div>
                
                <h2 className="text-start leading-loose" >
                    We have the best rates. Simply start your exchange right now. Sign
                    up for our Affiliate program and earn commission from each
                    exchange. The earnings are credited in your account instantly an
                    can be withdrawn right away, Also note some exchange directions
                    are hidden for unregistered user. To ensure to have access to all
                    our exchange directions and benefits kindly sign up and verify your
                    identity.
                </h2>

                <span className="bg-white text-slate-950 rounded-full px-9 py-3 cursor-pointer" id="button">DISCOVER</span>
            </div>
            
        </div>
    </>
  )
}
