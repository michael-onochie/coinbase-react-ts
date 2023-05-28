import LineLG from "../assets/line-lg.png";


export const Blog = () => {
    return (
      <>
        <div className="flex h-[550px] bg-slate-100 md:h-[640px] md:mt-24" >
          <div className="flex flex-col h-58 md:h-25 w-3/4 bg-slate-100 mx-auto my-auto rounded-2xl md:pt-10">
            <div className="flex flex-col space-y-8 md:space-y-8 items-center mb-10 px-5">
              <div className="flex flex-col items-center space-y-2 mt-10 mb-10 md:mb-0'">
                <h1 className="text-4xl font-bold" id="span-text">
                  Our blog
                </h1>
                <img src={LineLG} alt="" />
              </div>
              <p className="mx-auto text-center text-xl">
                Get to know the latest stuff via our blog post
              </p>
            </div>

            <div className="w-full p-10 -mt-14 md:-mt-0 space-y-4 md:space-y-0 md:flex mx-auto my-auto md:-space-x-4 z-50">

              {/* Article 1 */}
              <div className="text-xs rounded-xl md:w-[23rem] md:h-[18rem] mx-auto mt-10 md:mt-0 z-50 p-[3px] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                <div className="flex-col justify-between h-full bg-white rounded-lg p-4 md:space-y-4">
                <p className="">19 JUNE | BUSINESS</p>
                  <h4 className="text-lg font-bold">
                    ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...
                  </h4>
                  <p className="text-sm text-justify">
                    Lorem ipsum dolor sit amet, magna habemus ius ad, qui
                    minimum voluptaria in. Ad mei modus quodsi complectitur,
                    postea...
                  </p>
                  <button
                    className="bg-white text-slate-950 rounded-full px-4 py-2 cursor-pointer"
                    id="button"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
              
               {/* Article 2 */}
              <div className="text-xs rounded-xl md:w-[30rem] md:h-64 mx-auto mt-34 p-[3px] md:translate-y-3 -z-50 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                <div className="flex-col justify-between h-full bg-white  rounded-lg p-4 md:space-y-4">
                <p className="">19 JUNE | BUSINESS</p>
                  <h4 className="text-lg font-bold">
                    ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...
                  </h4>
                  <p className="text-sm text-justify">
                    Lorem ipsum dolor sit amet, magna habemus ius ad, qui
                    minimum voluptaria in. Ad mei modus quodsi complectitur,
                    postea...
                  </p>
                  <button
                    className="bg-white text-slate-950 rounded-full px-4 py-2 cursor-pointer"
                    id="button"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
              
               {/* Article 3 */}
              <div className="text-xs rounded-xl md:w-[23rem] md:h-[18rem] mx-auto  mt-10 p-[3px] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                <div className="flex-col justify-between h-full bg-white  rounded-lg p-4 md:space-y-4">
                <p className="">19 JUNE | BUSINESS</p>
                  <h4 className="text-lg font-bold">
                    ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...
                  </h4>
                  <p className="text-sm text-justify">
                    Lorem ipsum dolor sit amet, magna habemus ius ad, qui
                    minimum voluptaria in. Ad mei modus quodsi complectitur,
                    postea...
                  </p>
                  <button
                    className="bg-white text-slate-950 rounded-full px-4 py-2 cursor-pointer"
                    id="button"
                  >
                    READ MORE
                  </button>
                </div>
              </div>

            </div>


          </div>
        </div>
      </>
    );
  };
  

  