import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const AnyProblem = () => {
    const onClick = () => {

    }
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
  return (
    <>
        <main className='bg-[#F9F8F9]'>
            <div 
                className="text-center md:text-left w-full md:h-[623px] bg-[url('/problem.png')] bg-no-repeat bg-cover mx-auto text-gray-800 relative md:p-20 pt-[50px] md:pt-0">
                <div className="md:max-w-[1440px] mx-auto md:flex items-center">
                    <div className="w-full md:w-2/5 md:px-10 px-5 mb-10 md:mb-0">
                        <div className="">
                            <img src="/worker.png"
                                className="md:w-[435px] w-[265px] md:h-[548px] h-[348px] m-auto md:absolute  bottom-0" alt=""/>
                        </div>
                    </div>
                    <div data-aos = "fade-up" className="w-full md:w-3/5 md:px-10 px-5 pb-[50px] md:pb-0">
                        <div className="md:mt-28 mt-10 md:px-10 px-5">
                            <h5 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-3">CALL: 012-345-6789</h5>
                            <h4 className="font-bold uppercase md:text-[42px] text-4xl mb-5">HAVE ANY PROBLEMS?</h4>
                            <p className="">We offer a wide range of plumbing services catered to both residential and commercial
                                clients. Even the all-powerful Pointing has no control about the blind texts.</p>
                            <div className="pt-10">
                                <button className="bg-black hover:bg-orange-500 text-white font-medium py-2 my-2 md:my-0 ml-2 px-5 rounded-md mr-3" onClick={onClick}>
                                    Contact Us
                                </button>
                                <button className="bg-black hover:bg-orange-500 hover:text-white text-white font-medium py-2 my-2 md:my-0 px-5 rounded-md" onClick={onClick}>
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default AnyProblem