import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import 'aos/dist/aos.css'
import {
    faArrowRightLong,
    faDownload,
    faFileDownload,
    
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import { useRouter } from 'next/router';

const PriceDetail = () => {
    const Router = useRouter();

    const [group, setGroup] = useState('');

    const onClick = () => {
        Router.replace("/details/price_details");
    }

    const options = [
        {
            name: 'Qualified Team',
        },
        {
            name: 'Affordable pricing',
        },
        {
            name: 'Quick service',
        },
        {
            name: 'Full service',
        },
        {
            name: 'Emergency power solutions',
        },
        {
            name: 'Virtually any electrical',
        },
    ];

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
  return (
    <>
        <main className='font-raleway w-full rounded bg-white'>
            <div className="font-raleway relative bg-[url('/priceDetailsBanner.png')] bg-no-repeat bg-cover w-full h-[378px] md:px-20 py-10">
                <div className='absolute bottom-0 left-0 top-0 right-0 bg-overlay'>
                    <div data-aos = "fade-up" className='md:max-w-[1440px] md:m-auto'>
                        <div className='mt-16 p-10 text-center text-white font-raleway'>
                            <h2 className='font-bold text-[42px] pb-2'>PRIZE DETAILS</h2>
                            <h6 className='font-bold text-[20px]'>HOME-PRIZE-PRIZE DETAILS</h6>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='bg-slate-50 p-5 md:px-20 container-full mx-auto'>
                <div className='w-full pr-0 pl-0 mb-10 md:mb-0 pt-10 text-center md:text-left'>
                        <div className='md:mb-10 md:pb-10'>
                            <div data-aos = "fade-up" className='md:mb-10 md:pb-10'>
                                <img 
                                    src = '/serviceDetails01.png'
                                    className="md:w-[100%] relative z-10"
                                />
                            </div>
                            <div data-aos = "fade-up" className="mb-10">
                                {/* <h4 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-3">About us</h4> */}
                                <h4 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-3 mt-5 md:mt-5">FLAT RATE 1</h4>
                                <div className='md:flex md:justify-between'>
                                    <h5 className="font-bold uppercase md:text-[42px] text-4xl mb-5">QUALITY SERVICE IS OUR GUARANTEE</h5>
                                    <h4 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-3">$199</h4>
                                </div>
                                <p className="text-left">We offer a wide range of plumbing services catered to both residential and commercial clients. Even the all-powerful Pointing has no control about the blind texts. Qualified team Affordable pricing Quick service We offer a wide range of plumbing services catered to both residential and
                                </p>
                                <div className="py-10">
                                    <div className="grid grid-cols-2">
                                        {options.map((option, index) => (
                                        <label className="inline-flex items-center text-left" key={index}>
                                            <input
                                            type="radio"
                                            className="form-radio h-4 w-4 text-orange-500"
                                            value={option.name}
                                            checked={group === option.name}
                                            onChange={() => setGroup(option.name)}
                                            />
                                            <span className="ml-2 text-gray-700">{option.name}</span>
                                        </label>
                                        ))}
                                    </div>
                                </div>

                                <p className='text-left'>No job is too big or too small, we’ve got you covered. In addition to our services, you can check out
                                    our shop for a wide range of plumbing supplies and equipment. When it comes to plumbing we are your
                                    one stop shop.</p>
                            </div>
                        </div>
                        <div className=''>
                            <div data-aos = "fade-up" className='pb-10 mb-10'>
                                <img 
                                    src = '/priceDetails2.png'
                                    className="md:w-[100%] relative z-10"
                                />
                            </div>
                            <div data-aos = "fade-up" className="mb-10 text-left">
                                {/* <h4 className="text-orange-500 uppercase font-bold md:text-[32px] text-2xl pb-3">About us</h4> */}
                                <h5 className="font-bold uppercase md:text-[42px] text-4xl mb-5">QUALITY SERVICE IS OUR GUARANTEE</h5>
                                <p className="">We offer a wide range of plumbing services catered to both residential and commercial clients. Even the all-powerful Pointing has no control about the blind texts. Qualified team Affordable pricing Quick service We offer a wide range of plumbing services catered to both residential and
                                </p>
                                <div className="md:py-10">
                                    {/* <div className="grid grid-cols-2">
                                        {options.map((option, index) => (
                                        <label className="inline-flex items-center" key={index}>
                                            <input
                                            type="radio"
                                            className="form-radio h-4 w-4 text-orange-500"
                                            value={option.name}
                                            checked={group === option.name}
                                            onChange={() => setGroup(option.name)}
                                            />
                                            <span className="ml-2 text-gray-700">{option.name}</span>
                                        </label>
                                        ))}
                                    </div> */}
                                    <ul className='divide-y text-left'>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black font-raleway">
                                            <div className="flex items-center p-4">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>We offer a wide range of plumbing services catered</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black font-raleway">
                                            <div className="flex items-center p-4">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>We offer a wide range of plumbing services catered</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black font-raleway">
                                            <div className="flex items-center p-4">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>We offer a wide range of plumbing services catered</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black font-raleway">
                                            <div className="flex items-center p-4">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>We offer a wide range of plumbing services catered</p>

                                            </div>
                                        </li>
                                        <li className="text-left cursor-pointer hover:bg-gray-100 hover:bg-opacity-20 border-none text-black font-raleway">
                                            <div className="flex items-center p-4">
                                                <FontAwesomeIcon icon={faArrowRightLong} className="h-6 w-6 text-orange-500"/>
                                                
                                                <p className='ml-2'>We offer a wide range of plumbing services catered</p>

                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <p className='text-left'>No job is too big or too small, we’ve got you covered. In addition to our services, you can check out
                                    our shop for a wide range of plumbing supplies and equipment. When it comes to plumbing we are your
                                    one stop shop.</p>
                            </div>
                        </div>

                    </div>
            </div>
        </main>
    </>
  )
}

export default PriceDetail