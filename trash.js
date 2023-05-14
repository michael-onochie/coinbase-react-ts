
export const Blog = () => {
    return (
      <>
        <div className="flex bg-fuchsia-400" style={{height: '35rem'}} >
          <div className="flex flex-col h-80 w-3/4 bg-slate-100 mx-auto my-auto rounded-2xl px-8" style={{height: '28rem'}}>
  
              <h1 className='mx-auto'>Our blog</h1>
              <p className='mx-auto'>Get to know the latest stuff via our blog post</p>
  
              <div className='flex my-auto justify-evenly -space-x-3'>
                  {/* blog1 */}
                  <div className='border-black border-2 rounded-xl h-60 my-auto bor'>
                      <div className='text-center px-2'>
                          <p>01 FEB 2019 | TECHNOLOGY </p>
                          <h1>HOW TO SELL YOUR ITUNES <br /> GIFTCARD WITH US</h1>
                          <p>
                              Lorem ipsum dolor sit amet, magna habemus
                              ius ad, qui minimum voluptaria in. Ad mei modus 
                              quodsi complectitur, postea...
                          </p>
                      <span className="bg-fuchsia-600 rounded-full px-3 p-1">READ MORE</span>
                      </div>
                  </div>
      
                  {/* blog2 */}
                  <div className='h-80 border-2 bg-white rounded-xl border-gray-800 my-auto z-10'>
                      <div className='text-center px-2'>
                          <p>19 JUNE 2019 | TECHNOLOGY </p>
                          <h1>HOW TO SELL YOUR ITUNES <br /> GIFTCARD WITH US</h1>
                          <p>
                              Lorem ipsum dolor sit amet, magna habemus
                              ius ad, qui minimum voluptaria in. Ad mei modus 
                              quodsi complectitur, postea...
                          </p>
                          <span className="bg-fuchsia-600 rounded-full px-3 p-1">READ MORE</span>
                      </div>
                  </div>
      
                  {/* blog3 */}
                  <div className='border-black border-2 rounded-xl h-60 my-auto'>
                      <div className="text-center px-2">
                          <p>01 DEC 2019 | TECHNOLOGY </p>
                          <h1>HOW TO SELL YOUR ITUNES <br /> GIFTCARD WITH US</h1>
                          <p>
                              Lorem ipsum dolor sit amet, magna habemus
                              ius ad, qui minimum voluptaria in. Ad mei modus 
                              quodsi complectitur, postea...
                          </p>
                          <span className="bg-fuchsia-600 rounded-full px-3 p-1">READ MORE</span>
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
  