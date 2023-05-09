import Arrow from '../assets/arrow.png';
import DoubleArrow from '../assets/double-arrow.png';
import Line from '../assets/line.png';
import Eth from '../assets/eth.png';
import Btc from '../assets/bitcoin.png';
import Bank from '../assets/bank.png';



export const Services = () => {
  return (
    <>
      <div className="h-96 flex bg-fuchsia-600 ">
        <div className="grid grid-cols-3 h-80 w-3/4 bg-slate-100 mx-auto my-auto rounded-2xl">
            

            {/* First row */}
            <div className="grid-col">
                <h1>
                    OUR RATES
                </h1>
                <img src={Line} alt="" />

                <div className="flex space-x-5">

                    <img className='h-6' src={Btc} alt="" />
                    <div>BTC</div>
                    <div>
                        <p>We buy @ 350/$</p>
                        <p>We sell @ 370/$</p>
                    </div>
                </div>

                <div className="flex space-x-5">

                    <img className='h-6' src={Eth} alt="" />
                    <div>ETH</div>
                    <div>
                        <p>We buy @ 350/$</p>
                        <p>We sell @ 370/$</p>
                    </div>
                </div>
                

            </div>

            {/* Second row */}
            <div className="grid-col">
                <h1>
                    OUR RESERVES
                </h1>
                <img src={Line} alt="" />

                <div className="flex space-x-5">
                    <img className='h-6' src={Bank} alt="" />
                    <div>Bank Transfer</div>
                    <div>
                        <p>NGN #3452030.24/$</p>
                    </div>
                </div>

                <div className="flex space-x-5">
                    <img className='h-6' src={Btc} alt="" />
                    <div>Bitcoin</div>
                    <div>
                        <p>389.98 BTC</p>
                    </div>
                </div>

                <div className="flex space-x-5">
                    <img className='h-6' src={Eth} alt="" />
                    <div>Ethereum</div>
                    <div>
                        <p>1000.00 ETH</p>
                    </div>
                </div>
                

            </div>

            {/* Third row */}
            <div className="grid-col">
                <h1>
                    LATEST EXCHANGES
                </h1>
                <img className='' src={Line} alt="" /> 

                <div className="">
                    <span className="p-1 bg-fuchsia-500 rounded-lg">8 hours ago</span>
                    <div className='flex'>
                        <p>Bitcoin BTC</p>
                        <img src={Arrow} alt="" width={20} height={10} />
                        <p>Bank</p>
                    </div>
                    <p>Transfer NGN</p>
                    <div className='flex'>
                        <p>1.16 BTC</p>
                        <img src={DoubleArrow} alt="" width={20} height={10} />
                        <p>696152299929 NGN</p>
                    </div>
                    <img className='flex -mt-20 -mb-20 justify-start self-start' src={Line} alt="" width={200}/>
                    <div className='flex'>
                        <p>Amazon Card</p>
                        <img src={Arrow} alt="" width={20} height={10} />
                        <p>Bank</p>
                    </div>
                    <p>Transfer NGN</p>
                </div>
                

            </div>

        {/* White inner box end */}
        </div>


      </div>
    </>
  );
};
