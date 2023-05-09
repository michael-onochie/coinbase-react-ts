import PlayStore from '../assets/google-play-store.png';
import AppStore from '../assets/app-store.png';
import IphoneX1 from '../assets/X-1.png';
import IphoneX2 from '../assets/X-2.png';



export const AppDownload = () => {
  return (
    <>
        <div className=''>
            
            <div className='text-center mx-auto'>
                <h1>Download our app</h1>
                <p>
                    Discover exclusive deals and discounts with
                    our mobile experience.
                </p>
                <div className='flex flex-row justify-center'>
                    <img src={PlayStore} alt="" />
                    <img src={AppStore} alt="" />
                </div>
            </div>

            <div className='flex flex-row justify-center' id="section-app-download">
                <div className='flex flex-row space-x-14' id="phone-download">
                    <img src={IphoneX1} alt="" />
                    <img src={IphoneX2} alt="" />
                </div>

            </div>
        </div>
    </>
  )
}
