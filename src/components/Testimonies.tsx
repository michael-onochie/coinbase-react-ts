import TsBubbles from "../assets/png/ts-bubbles.png";
import Stars from "../assets/png/stars.png";

export const Testimonies = () => {
  return (
    <>
      <div className='relative mt-[37rem] md:mt-[1rem] flex h-[800px] space-y-10' id="testimonials-bg">
        

        <div className="relative px-3 md:px-0 top-[12rem] text-center mx-auto space-y-11">
          <h3 className="text-2xl md:text-4xl font-extrabold font-['Poppins']">
            10,000 Satisfied clients <br />
            around the world
          </h3>
          <p className="px-3 md:px-0 text-sm md:text-lg font-['Poppins] leading-7 md:tracking-wider">
            Yeah! we are proud with numbers. We have helped thousands of clients <br />
            all around the world with our bespoke service. Hover on top of them <br />
            pic to view their testimonials.
          </p>



        <div className="relative top-16 md:-top-1 w-3/4 md:w-full mx-auto animate__animated animate__wobble">
          <img  className="md:h-64 md:w-full" src={TsBubbles}  alt="" />
            <div className="relative h-8 w-32 left-[4rem] bottom-8 md:bottom-28 md:left-[6rem] mx-auto md:h-14 md:w-48 z-50" id="holder-container">
              <div className="text-start ps-4 pt-0.5 md:pt-1 md:space-y-0.5">
                <p className=" text-[0.3rem] md:text-[0.5rem]">Femi from Nigeria</p>
                <img src={Stars} className="" alt="" width={40} height={40} /> 
                <p className="text-[0.3rem] md:text-[0.5rem]"><span className="font-bold">Wonderful service</span> </p>
                <p className="text-[0.3rem] md:text-[0.5rem]">Good deal and very wonderful service thank you.</p>
              </div>

              </div>
              
          
           
        </div>
          
        </div>

    

      </div>
    </>
  )
}

