import Eth from '../assets/eth.png';
import Btc from '../assets/bitcoin.png';


export const TradeAnywhere = () => {
  return (
    <>
      <div className="h-96 flex bg-fuchsia-600 ">
        <div className="grid h-80 w-3/4 bg-slate-100 mx-auto my-auto rounded-2xl">

            <h1 className='mx-auto'>Trade from anywhere</h1>

            <div className='flex space-x-4 mx-auto'>
                {/* bitcoin */}
                <div className='border-black border-2'>
                    <img src={Btc} alt="" />
                    <p>Bitcoin</p>
    
                </div>
    
                {/* gift cards */}
                <div className='border-black border-2'>
                    <img src={Eth} alt="" />
                    <p>Gift Cards</p>
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
