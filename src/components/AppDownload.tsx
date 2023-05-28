import PlayStore from '../assets/png/google-play-store.png';
import LineLG from "../assets/line-lg.png";
import AppStore from '../assets/png/app-store.png';
import IphoneX1 from '../assets/png/X-1.png';
import IphoneX2 from '../assets/png/X-2.png';
import 'animate.css';



export const AppDownload = () => {
  return (
    <>
        <div className=''>
            
            <div className='mx-auto space-y-12 mt-3'>
                <div className='items-center text-center space-y-10'>
                    <div className='flex flex-col items-center animate__animated animate__fadeInDown'>
                        <h1  className='text-4xl font-bold' id="span-text">Download our app</h1>
                        <img src={LineLG} alt="" />
                    </div>
                    <p className='font-medium pt-6 md:pt-10 md:text-2xl animate__animated animate__fadeInDown'>
                        Discover exclusive deals and discounts with <br />
                        our mobile experience.
                    </p>
                </div>
                <div className='flex flex-row justify-center items-center p-8 md:p-10 my-auto gap-4 animate__animated animate__fadeInDown'>
                    <img src={PlayStore} alt="" className='w-2/4 h-14 md:h-24 md:w-1/4'/>
                    <img src={AppStore} alt="" className='w-2/4 h-15 md:h-28  md:w-1/4'/>
                </div>
            </div>

            <div className='flex md:justify-center w-[100%]' id="section-app-download">
                <div className='flex flex-row items-center md:justify-center ms-4 space-x-7 w-[40%] h-[80%] md:w-[100%] md:h-[100%] md:ms-0 md:space-x-14 md:gap-6' id="phone-download">
                    <img src={IphoneX1} alt="" className='max-w-full h-auto md:h-96 w-56'/>
                    <img src={IphoneX2} alt="" className='max-w-full h-auto md:h-96 w-56'/>
                </div>

            </div>
        </div>
    </>
  )
}
