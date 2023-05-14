import LineLG from "../assets/line-lg.png";

export const Subscribe = () => {
  return (
    <>
        <div className="h-[350px] md:h-[280px] mt-32 md:mt-72">

            <div className="text-center mx-auto space-y-12">
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold" id="span-text">Subscribe our newsletter</span>
                    <img src={LineLG} alt="" />
                </div>
                <p className="leading-8">
                    Subscribe to our newsletter for daily/weekly <br />
                    update of our products and services.
                </p>

                <div className="flex flex-col md:flex-row items-center md:justify-center mt-5 mb-8 space-y-4 md:space-y-0 md:space-x-12">
                    <input className="rounded-xl ps-2 px-4" type="email" placeholder="EMAIL" id="subscribe-input"/>
                    <span className="rounded-full px-9 py-3" id="button">DISCOVER</span>
                </div>
            </div>
    
        </div>
    </>
  )
}
