import HeroPic from "../assets/hero-pic.png"

export const Hero = () => {
  return (
    <>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 " id="hero-background">

            {/* left */}
            <div className="flex flex-col items-center md:flex-col md:ps-20 md:items-start justify-center text-center md:text-start space-y-9 mb-5">
                <h1>
                    We provide easy solution <br />
                    to exchange your Bitcoin/ <br />
                    GiftCard for money
                </h1>

                <h2 className="text-xs">
                    CoinBase is a platform for trading your bitcoin and <br />
                    giftcard at the best rate, why not give us a trial.
                </h2>

                <span className="bg-white text-slate-950 rounded-full px-9 py-3 cursor-pointer">GET STARTED</span>

            </div>

            {/* right */}
            <div className="md:flex md:flex-col">
                <img src={HeroPic} alt="" />
                

            </div>
            
        </div>
    </>
  )
}
