import GreetingPic from "../assets/greeting-pic.png";

export const Greeting = () => {
  return (
    <>
        <div className="min-h-screen flex flex-col-reverse md:grid md:grid-cols-2">


            {/* right */}
            <div className="flex md:flex-col ps-20 items-start justify-center space-y-9">
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
                <span className="rounded-full px-9 py-3" id="button">Discover</span>
            </div>

             {/* left */}
             <div className="flex items-center">
                <img className="" src={GreetingPic} alt="" />
            </div>
            
        </div>
    </>
  )
}
