import React, {useState, useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'


const Subscribe = () => {
    const [text, setText] = useState();
    const onClick = () => {

    }

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
  return (
    <>
        <main className='bg-[#FFF] pb-10'>
            <div data-aos = "fade-up" className="text-center md:pt-10 md:pb-10 p-5 md:p-10">

                <h6 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-5">SUBSCRIBE</h6>
                <h5 className="font-bold uppercase md:text-[42px] text-4xl mb-5">SUBSCRIBE For Last Updates</h5>
                <p>Subscribe our newsletter. join us and get the latest updates & patches! We do not spam will not share the
                    email to anyone.</p>
                <div className="md:flex md:justify-center md:items center md:w-full mt-5">
                    <div className="md:w-[500px]">
                        <input
                            className="border-2 border-orange-500 hover:border-blue-500 appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="text"
                            type="text"
                            placeholder="Enter text"
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />
                    </div>
                    <div className="mx-5 md:mt-0 mt-5">
                        <button className="bg-black hover:bg-orange-500 text-white font-medium py-2 px-5 rounded-md mr-3" onClick={onClick}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Subscribe