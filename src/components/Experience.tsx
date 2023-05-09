import ExperiencePic from "../assets/experience-pic.png";

export const Experience = () => {
  return (
    <>
        <div className="min-h-screen flex flex-col-reverse md:grid md:grid-cols-2">

            {/* left */}
            <div className="flex md:flex-col items-start justify-center space-y-9">
                <h1>Welcome to CoinBase</h1>
                
                <h2>
                    We have the best rates. Simply start your exchange right now. Sign
                    up for our Affiliate program and earn commission from each
                    exchange. The earnings are credited in your account instantly an
                    can be withdrawn right away, Also note some exchange directions
                    are hidden for unregistered user. To ensure to have access to all
                    our exchange directions and benefits kindly sign up and verify your
                    identity.
                </h2>

                <span className="bg-fuchsia-600 rounded-full px-9 py-3">Discover</span>

            </div>

            {/* right */}
            <div className="flex items-center">
                <img className="" src={ExperiencePic} alt="" />

            </div>

            
            
        </div>
    </>
  )
}
