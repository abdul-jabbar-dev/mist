
import React from 'react';
import { newsData as data } from '../Api/news';
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';
import noImage from '../resource/headerlogo.png'


const News = () => {
    const fileDownload = e => {
        if (e.target.src !== window.location.origin.concat(noImage)) {
            e.target.classList.add('hover:blur-sm')
            e.target.classList.add('newsImageDownload')
            e.target.classList.add('cursor-pointer')
            e._targetInst.sibling.stateNode.classList.remove('hidden')
        }
    }
    const createId = (id,i) => 'cid' + (id)?.toLowerCase()?.replace(/ /g, '')?.slice(0, 3) + i
    return (
        <>
            <Navbar></Navbar>
            <div>
                <div className="bg-gray-100" >
                    <section className='container mx-auto'>
                        <section className="text-gray-600 body-font">
                            {
                                data.map((item, i) => <div key={i} className="container px-5  mx-auto">
                                    <span className={item.publishDate.split('/')[1] !== data[i - 1]?.publishDate.split('/')[1] && " date ".concat("text-gray-900 relative inline-block  uppercase font-medium my-3 ", '')}>{item.publishDate.split('/')[1] !== data[i - 1]?.publishDate.split('/')[1] && item.publishDate.split('/')[1] + ' ' + item.publishDate.split('/')[2]}</span>

                                    <div id={createId(item.news,i)} className="p-5 bg-white flex items-center mx-auto border-b my-1 border-gray-200 rounded-lg sm:flex-row flex-col">
                                        <div className="sm:w-32 mb-auto sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                                            <a href={item.file ? item.file:null} target="_blank" download="YourName resume.pdf" rel="noopener noreferrer" className='relative'>
                                                <img
                                                    className=' relative  '
                                                    onMouseEnter={e => fileDownload(e)}
                                                    onMouseLeave={e => e._targetInst.sibling.stateNode.classList.add('hidden')}
                                                    alt='news'
                                                    src={item.file ? item.file : noImage} />

                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 hidden w-6 absolute select-none top-[40%] right-[40%] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>

                                            </a>
                                        </div>
                                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                            <h1 className="text-black text-xl title-font font-bold mb-2">{item.news}</h1>
                                            <p className="leading-relaxed text-base">{item?.description}</p>
                                            <div className="py-4">
                                                <div className=" inline-block mr-2" >
                                                    <div className="flex  pr-2 h-full items-center">
                                                        <svg className="text-yellow-500 w-6 h-6 mr-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <circle cx="12" cy="12" r="9" />
                                                            <path d="M9 12l2 2l4 -4" />
                                                        </svg>
                                                        <p className="title-font font-medium">{item.publishDate}</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="md:flex font-bold text-gray-800">
                                                <div className="w-full md:w-1/2 flex space-x-3">
                                                    <div className="w-1/2">
                                                        <h2 className="text-gray-500 text-sm">Publish Time</h2>
                                                        <p className='text-sm font-normal'>{item.publishTime}</p>
                                                    </div>
                                                    <div className="w-1/2">
                                                        <h2 className="text-gray-500 text-sm">Source</h2>
                                                        <p className='text-sm font-normal'>{item.source}</p>
                                                    </div>
                                                </div>
                                                <div className="w-full md:w-1/2 flex space-x-3">
                                                    <div className="w-1/2">
                                                        <h2 className="text-gray-500 text-sm" >Publisher</h2>
                                                        <p className='text-sm font-normal'>{item.publisher}</p>
                                                    </div>
                                                    <div className="w-1/2">
                                                        <h2 className="text-gray-500 text-sm">Title</h2>
                                                        <p className='text-sm font-normal'>description</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </section>
                    </section>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default News;