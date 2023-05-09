import ExperiencePic from "../assets/experience-pic.png";

export const Experience = () => {
  return (
    <>
        <div className="min-h-screen flex flex-col-reverse md:grid md:grid-cols-2">

            {/* left */}
            <div className="ps-20 flex md:flex-col items-start justify-center space-y-9">
                <h1>Great experience with coinbase</h1>
                
                <h2>
                    CoinBase is an online site and a p2admin platform that allows
                    users to buy, sell and/ or exchange digital and fiat assets safely.
                    Owned and managed by CoinBase Business Services established
                    and Incoperated in Nigeria.
                </h2>

                <span className="rounded-full px-9 py-3" id="button">Discover</span>

            </div>

            {/* right */}
            <div className="flex items-center">
                <img className="" src={ExperiencePic} alt="" />

            </div>

            
            
        </div>
    </>
  )
}
