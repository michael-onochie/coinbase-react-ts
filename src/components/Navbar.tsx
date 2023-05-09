import NavbarLogo from "../assets/navbar-logo.png";

export const Navbar = () => {
  return (
    <>
        <header>
            <div className="header-content">
    
                <img src={NavbarLogo} alt="" />
    
                <input type="checkbox" id="hamburger" aria-label="menu button" />
                <label htmlFor="hamburger"><span></span></label>
    
    
                <nav aria-label="main navigation">
                  <ul className="menus font-bold">
                    <div className="menus font-bold ml-52 mr-24 space-x-5">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact Us</a></li>
                    </div>
                    <li>
                      <button 
                        type="button" 
                        aria-haspopup="true" 
                        aria-expanded="true" 
                        aria-controls="dropdown1"  
                        className="relative left-6"
                      >
                        Sell Bitcoin / Giftcard<span className="arrow"></span>   
                      </button>
                      <ul className="dropdown" id="dropdown1">
                        <li><a href="#">Sell Bitcoin</a></li>
                        <li><a href="#">Sell Giftcard</a></li>
                      </ul>
                    </li>
                    <span className="relative left-6 rounded-full px-9 py-2" id="button">Login</span>
                  </ul>
                </nav>
            </div>
        </header>
    </>
  )
}
