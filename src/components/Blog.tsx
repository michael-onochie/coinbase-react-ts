import LineLG from "../assets/line-lg.png";
import BlogBlocks from "../assets/blog-blocks.png";


export const Blog = () => {
    return (
      <>
        <div className="flex bg-fuchsia-400 h-[420px] md:h-[640px]" >
          <div className="flex flex-col h-58 md:h-25 w-3/4 bg-slate-100 mx-auto my-auto rounded-2xl md:pt-10">
  
            <div className="flex flex-col space-y-16 items-center mb-10 px-5">
              <div className="space-y-2">
                  <h1>Our blog</h1>
                  <img src={LineLG} alt="" />
              </div>
              <p className='mx-auto text-center'>Get to know the latest stuff via our blog post</p>                  
            </div>
            
            <div className="w-full">
              <img src={BlogBlocks} alt="" className="w-full" />
            </div>

          </div>
        </div>
      </>
    );
  };
  