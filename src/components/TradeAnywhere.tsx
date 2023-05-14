import Eth from '../assets/eth.png';
import Btc from '../assets/bitcoin.png';
import LineLG from "../assets/line-lg.png";


export const TradeAnywhere = () => {
  return (
    <>
      <div className="h-96 flex bg-fuchsia-600 ">
        <div className="grid h-80 space-y-4 w-3/4 bg-slate-100 mx-auto my-auto rounded-2xl">

            <div className='flex flex-col items-center space-y-2 mt-3'>
                <h1 className=''>Trade from anywhere</h1>
                <img src={LineLG} alt="" />
            </div>
            

            <div className='flex flex-col h-[70%] space-y-7 md:h-[100%] md:flex-row md:space-x-11 mx-auto'>
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
