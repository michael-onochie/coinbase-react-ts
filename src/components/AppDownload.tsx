import PlayStore from '../assets/google-play-store.png';
import AppStore from '../assets/app-store.png';
import IphoneX1 from '../assets/X-1.png';
import IphoneX2 from '../assets/X-2.png';



export const AppDownload = () => {
  return (
    <>
        <div className=''>
            
            <div className='text-center mx-auto space-y-12 mt-3'>
                <div>
                    <h1>Download our app</h1>
                    <p>
                        Discover exclusive deals and discounts with
                        our mobile experience.
                    </p>
                </div>
                <div className='flex flex-row justify-center'>
                    <img src={PlayStore} alt="" />
                    <img src={AppStore} alt="" />
                </div>
            </div>

            <div className='flex md:justify-center w-[100%]' id="section-app-download">
                <div className='flex flex-row items-center md:justify-center ms-4 space-x-7 w-[40%] h-[80%] md:w-[100%] md:h-[100%] md:ms-0 md:space-x-14' id="phone-download">
                    <img src={IphoneX1} alt="" />
                    <img src={IphoneX2} alt="" />
                </div>

            </div>
        </div>
    </>
  )
}
