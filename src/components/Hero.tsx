import HeroPic from "../assets/hero-pic.png"

export const Hero = () => {
  return (
    <>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2" id="hero-background">

            {/* left */}
            <div className="ps-20 flex md:flex-col items-start justify-center space-y-9">
                <h1>
                    We provide easy solution <br />
                    to exchange your Bitcoin/ <br />
                    GiftCard for money
                </h1>

                <h2>
                    CoinBase is a platform for trading your bitcoin and <br />
                    giftcard at the best rate, why not give us a trial.
                </h2>

                <span className="bg-white text-slate-950 rounded-full px-9 py-3">GET STARTED</span>

            </div>

            {/* right */}
            <div className="md:flex md:flex-col">
                <img src={HeroPic} alt="" />
                

            </div>
            
        </div>
    </>
  )
}
