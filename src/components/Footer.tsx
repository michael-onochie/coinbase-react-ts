import CoinbaseLogo from "../assets/coinbase-footer.png";
import SocialMediaIcons from "../assets/social-media-icons.png"

export const Footer = () => {
  return (
    <>
      <div className="h-60 flex bg-slate-600">
        <div className="grid grid-cols-4 w-full h-60 justify-end bg-slate-950 text-white mx-auto my-auto px-16">
            

            {/* First row */}
            <div className="grid-col">
                <img src={CoinbaseLogo} alt="" />
                <p> 
                    Fusce ut elit aliquet, fermentum leo vel, tempus
                     nunc. Fusce eu rhoncus augue. Fusce vel metus
                    pharetra, fermentum
                </p>
                <img src={SocialMediaIcons} alt="" />
            </div>

            {/* Second row */}
            <div className="grid-col">
                <p>Home</p>
                <p>About Us</p>
                <p>Blog</p>
                <p>Sell</p>
                <p>Contact Us</p>
            </div>

            {/* Third row */}
            <div className="grid-col">
                <p>(+234) 137632128</p>
                <p>coinbase@yahoo.com</p>
                <p>Address goes here</p>
                <p>Download Our App</p>
            </div>


            {/* Fourth row */}
            <div className="grid-col">

                
            </div>

        {/* Black inner box end */}
        </div>


      </div>
    </>
  );
};
