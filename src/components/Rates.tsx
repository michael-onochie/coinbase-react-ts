import Arrow from '../assets/png/single-arrow.png';
import DoubleArrow from '../assets/png/double-arrow.png';
import Btc from '../assets/png/bitcoin.png';
import Eth from '../assets/png/eth.png';
import Bank from '../assets/png/bank-building.png';
import Line from '../assets/png/line-rate.png';


export const Rates = () => {
  return (
    <>
      <div className="flex bg-fuchsia-600 pt-36 md:pt-20 md:mt-7 h-[1500px] md:h-[800px]" id="rates-bg">
        <div className="flex flex-col bg-slate-100 h-[48rem] pt-4 md:h-[22rem] space-y-8 mx-auto my-auto w-3/4 md:flex-row px-5 md:space-x-16" id="rates-inner-box">

            <div className='flex flex-col md:flex-row mx-auto my-auto md:mt-2 w-full'>
                
                {/* Section 1 */}
                <div className='flex flex-col mx-auto h-56 w-64'>
                    <h2 className='w-full text-center font-bold' id='rates-heading'>OUR RATES</h2>
                    <div className='flex flex-col mx-auto md:text-sm md:space-y-4 md:pt-4'>
                        <div className='md:flex space-x-2 py-3 md:py-4 space-y-1 md:space-y-0 md:space-x-5 '>
                            <div className='flex gap-5'>
                                <img src={Btc} alt="" className='w-5 h-6' />
                                <h3>BTC</h3>
                            </div>
                            <div className='text-sm md:text-xs'>
                                <p>We Buy @ <span className='font-bold'>N350/$</span></p>
                                <p>We Sell @ <span className='font-bold'> N360/$</span></p>
                            </div>
                        </div>
                        <div className='md:flex space-x-2 py-3 md:py-4 space-y-4 md:space-y-0 md:space-x-5 '>
                            <div className='flex gap-5'>
                                <img src={Eth} alt="" className='w-5 h-6' />
                                <h3>ETH</h3>
                            </div>
                            <div className='text-sm md:text-xs'>
                                <p>We Buy @ <span className='font-bold'>N350/$</span></p>
                                <p>We Sell @ <span className='font-bold'> N360/$</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className='flex flex-col mx-auto md:h-56 w-64'>
                    <h2 className='w-full text-center font-bold' id='rates-heading'>OUR RESERVES</h2>
                    <div className='flex flex-col mx-auto md:text-sm pt-4'>
                        <div className='md:flex space-x-2 md:py-1 space-y-4 md:space-y-0 md:space-x-7 '>
                            <div className='flex gap-5'>
                                <img src={Bank} alt="" className='w-5 h-6' />
                                <h3>Bank</h3>
                            </div>
                            <div className='text-xs '>
                                <p>NGN</p>
                                <p className='text-center md:text-start'><span className='font-bold'>#3452030300303.24/$$</span></p>
                            </div>
                        </div>
                        <div className='md:flex space-x-2 py-3 md:py-4 space-y-4 md:space-y-0 md:space-x-5 '>
                            <div className='flex gap-5'>
                                <img src={Btc} alt="" className='w-5 h-6' />
                                <h3 >Bitcoin</h3>
                            </div>
                            <div className='text-base'>
                                <p className='text-center md:text-start'><span className='font-bold'>399.98 </span> BTC</p>
                            </div>
                        </div>
                        <div className='md:flex space-x-2 py-3 md:py-4 space-y-4 md:space-y-0 md:space-x-5 '>
                            <div className='flex gap-5'>
                                <img src={Eth} alt="" className='w-5 h-6' />
                                <h3>Ethereum</h3>
                            </div>
                            <div className='text-base'>
                                 <p className='text-center md:text-start'><span className='font-bold'>1000.00 </span> ETH</p>
                            </div>
                        </div>
                    </div>
                </div>

              
              

                {/* Section 3 */}
                <div className='flex flex-col mx-auto h-56 w-64'>
                    <h2 className='w-full text-center font-bold' id='rates-heading'>LATEST EXCHANGES</h2>
                
                    <div className=''>
                        <div className='space-y-4'>
                        <button className="bg-white text-xs text-slate-950 rounded-md px-2.5 py-1 cursor-pointer block mx-auto mt-2" id="button">DISCOVER</button>
                            <div className='flex space-x-2 text-sm'>
                                <p>BitCoin BTC</p>
                                <img src={Arrow} alt="arrow" className='inline-block h-3 w-5 my-auto' />
                                <p>Card</p>
                            </div>
                            
                            <p className='text-sm'>Transfer NGN</p>
                            <div className='flex space-x-2 text-sm'>
                                <p><span className='font-bold'>1.16 BTC</span> </p>
                                <img src={DoubleArrow} alt="arrow" className='inline-block h-3 w-5 my-auto' />
                                <p><span className='font-bold'>696152299929.23 NGN</span> </p>
                            </div>

                            <img src={Line} alt="line" />

                            <div className='flex space-x-2 text-sm'>
                                <p>Amazon Card</p>
                                <img src={Arrow} alt="arrow" className='inline-block h-3 w-5 my-auto' />
                                <p>Bank</p>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>


        </div>
      </div>
    </>
  );
};
