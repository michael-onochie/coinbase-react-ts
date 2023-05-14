import Eth from '../assets/eth.png';
import Btc from '../assets/bitcoin.png';
import LineLG from "../assets/line-lg.png";


export const TradeAnywhere = () => {
  return (
    <>
      <div className="flex h-[480px] md:h-96" id='trade-anywhere'>
        <div className="grid h-[390px] md:h-80 space-y-4 w-3/4 bg-slate-100 mx-auto my-auto md:mt-28 rounded-2xl">

            <div className='flex flex-col items-center space-y-2 mt-10 mb-10 md:mb-0'>
                <h1 className='text-2xl md:text-3xl font-bold' id='span-text'>Trade from anywhere</h1>
                <img src={LineLG} alt="" />
            </div>
            

            <div className='flex flex-col h-[70%] space-y-7 md:h-[100%] md:flex-row md:space-x-11 mx-auto font-bold'>
                {/* bitcoin */}
                <div className='mx-auto my-auto flex flex-col justify-center' id="border">
                  <div className='flex flex-col items-center justify-center space-y-6'>
                    <img src={Btc} alt="" />
                    <p>Bitcoin</p>
                  </div>
                </div>
    
                {/* gift cards */}
                <div className='mx-auto my-auto flex flex-col justify-center' id="border">
                  <div className='flex flex-col items-center justify-center space-y-6'>
                    <img src={Eth} alt="" />
                    <p>Gift Cards</p>
                  </div>
                </div>

            </div>

            <div>
            </div>
            

            

           
               


        {/* White inner box end */}
        </div>


      </div>
    </>
  );
};
