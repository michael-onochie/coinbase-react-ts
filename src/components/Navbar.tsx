

export const Navbar = () => {
  return (
    <>
        <header>
            <div className="header-content">
    
                <a href="#" className="logo">   Coinbase</a>
    
                <input type="checkbox" id="hamburger" aria-label="menu button" />
                <label htmlFor="hamburger"><span></span></label>
    
                <nav aria-label="main navigation">
                  <ul className="menus">
                    <li><a href="#">Home</a></li>
                    
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li>
                      <button 
                        type="button" 
                        aria-haspopup="true" 
                        aria-expanded="true" 
                        aria-controls="dropdown1"  
                      >
                        Sell Bitcoin / Giftcard<span className="arrow"></span>   
                      </button>
                      <ul className="dropdown" id="dropdown1">
                        <li><a href="#">Sell Bitcoin</a></li> 
                        <li><a href="#">Sell Giftcard</a></li>
                      </ul>
                    </li>
                    <li className='inline-block px-12 justify-center items-center bg-fuchsia-600 rounded-full ms-[26%] mb-3'><a href="#" className="text-center">Login</a></li>
                  </ul>
                </nav>
            </div>
        </header>
    </>
  )
}
