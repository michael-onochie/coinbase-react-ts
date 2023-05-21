import CoinbaseLogo from "../assets/coinbase-footer.png";
import SocialMediaIcons from "../assets/social-media-icons.png";
import IgBlock from "../assets/ig-block.png";
import IgBlockAdd from "../assets/ig-block-add.png";


export const Footer = () => {
  return (
    <>
      <div className="flex h-40 md:h-60 bg-slate-600 text-[8px] md:text-[16px] w-full">
        <div className="grid grid-cols-4 space-x-4 md:space-x-8 w-full h-60 bg-slate-950 text-white px-8 pt-4 md:px-16">

            {/* First row */}
            <div className="grid grid-col text-center -space-y-40 md:space-y-1.5">
                <img src={CoinbaseLogo} alt="" className="md:ms-10" /> 
                <div className="flex flex-col items-center text-center justify-center">
                  <p> 
                      Fusce ut elit aliquet, fermentum leo vel, tempus
                       nunc. Fusce eu rhoncus augue. Fusce vel metus
                      pharetra, fermentum
                  </p>
                  <img src={SocialMediaIcons} alt="" className="mt-3"/>
                </div>
            </div>

            {/* Second row */}
            <div className="grid grid-col text-center -space-y-16 md:space-y-1.5">
              <h1>CoinBase Links</h1>
                <div className="space-y-1.5">
                  <p>Home</p>
                  <p>About Us</p>
                  <p>Blog</p>
                  <p>Sell</p>
                  <p>Contact Us</p>
                </div>
            </div>

            {/* Third row */}
            <div className="grid grid-col text-center -space-y-16 md:space-y-1.5">
              <h1>Contact Us</h1>
              <div className="space-y-1.5">
                <p>(+234) 137632128</p>
                <p>coinbase@yahoo.com</p>
                <p>Address goes here</p>
                <p>Download Our App</p>
              </div>
            </div>
            
            {/* Forth row */}
            <div className="grid grid-col text-center space-y-3">
              <h1>Contact Us</h1>
              <div className="flex flex-row md:space-x-1">
                <img src={IgBlock} alt="" className="invisible md:visible"/>
                <img src={IgBlockAdd} alt="" className="invisible md:visible"/>
                <img src={IgBlock} alt="" className="invisible md:visible"/>
              </div>
              <div className="flex flex-row md:space-x-1">
                <img src={IgBlock} alt="" className="invisible md:visible"/>
                <img src={IgBlock} alt="" className="invisible md:visible"/>
                <img src={IgBlock} alt="" className="invisible md:visible"/>
              </div>
            </div>


            {/* Fourth row */}
            {/* <div className="grid grid-col text-center items-center space-x-6 space-y-1">
              <h1 className="mb-0 md:ms-10  md:mb-6">CoinBase Instagram</h1>
              <div className="flex flex-row md:space-x-1">
                <img src={IgBlock} alt="" />
                <img src={IgBlockAdd} alt="" />
                <img src={IgBlock} alt="" />
              </div>
              <div className="flex flex-row md:space-x-1">
                <img src={IgBlock} alt="" />
                <img src={IgBlock} alt="" />
                <img src={IgBlock} alt="" />
              </div>
            </div> */}

        {/* Black inner box end */}
        </div>
      </div>
    </>
  );
};
