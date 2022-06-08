import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../../Api/news';
import { HashLink } from 'react-router-hash-link';
const UpdateNews = () => {
    const [allnewsData, setAllnewsData] = useState([]);
    useEffect(() => {
        setAllnewsData(newsData)
    }, []);
    const createId = (id, i) => 'cid' + (id)?.toLowerCase()?.replace(/ /g, '')?.slice(0, 3) + i
    return (
        <div className=" bg-gray-100 flex  content-center flex-col ">
            <div className="bg-white  p-4  ">
                {allnewsData.map((news, i) =>
                    <div key={i} >
                        <span className={news.publishDate.split('/')[1] !== newsData[i - 1]?.publishDate.split('/')[1] && " date ".concat("text-gray-900 relative inline-block  uppercase font-medium my-3 ", '')}>{news.publishDate.split('/')[1] !== newsData[i - 1]?.publishDate.split('/')[1] && news.publishDate.split('/')[1] + ' ' + news.publishDate.split('/')[2]}</span>
                        <div className="flex mb-4">
                            <div className="w-2/12">
                                <span className="text-sm text-gray-600 block">{news.publishDate.split('/')[0] + ' ' + news.publishDate.split('/')[1].slice(0, 3)}</span>
                            </div>
                            <div className="w-1/12">
                                <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
                            </div>
                            <div className="w-9/12">
                                <HashLink to={`news#${createId(news.news, i)}`}><span className="text-sm hover:text-sky-900 font-semibold block">{news.news}</span></HashLink>
                            </div>
                        </div>
                    </div>)
                }
                {/*   <div className="flex mb-4">
                        <div className="w-2/12">
                            <span className="text-sm text-gray-600 block">04/Feb</span>
                        </div>
                        <div className="w-1/12">
                            <span className="bg-red-400 h-2 w-2 rounded-full block mt-2"></span>
                        </div>
                        <div className="w-9/12">
                            <span className="text-sm font-semibold block">ডিপ্লেমা ইন ইঞ্জিনিয়ারিং পরীক্ষার উত্তরপত্র পূনঃ নিরীক্ষণ বিজ্ঞপ্তি</span>

                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-2/12">
                            <span className="text-sm text-gray-600 block">02/Feb</span>
                        </div>
                        <div className="w-1/12">
                            <span className="bg-indigo-600 h-2 w-2 rounded-full block mt-2"></span>
                        </div>
                        <div className="w-9/12">
                            <span className="text-sm font-semibold block">TEXTILE 4th,5th,6th SEMESTER BOARD RESULT-2021 </span>
                        </div>
                    </div>

                 <div>
                    <span className="text-gray-900 relative inline-block date uppercase font-medium my-3 tracking-widest">January 2022</span>
                    <div className="flex mb-2">
                        <div className="w-2/12">
                            <span className="text-sm text-gray-600 block">22/Jan</span>
                        </div>
                        <div className="w-1/12">
                            <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
                        </div>
                        <div className="w-9/12">
                            <span className="text-sm font-semibold block">মধ্যপর্ব পরীক্ষার নোটিশ 2022 </span>

                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-2/12">
                            <span className="text-sm text-gray-600 block">16/Jan</span>
                        </div>
                        <div className="w-1/12">
                            <span className="bg-yellow-400 h-2 w-2 rounded-full block mt-2"></span>
                        </div>
                        <div className="w-9/12">
                            <span className="text-sm font-semibold block">Vaccine Notice 11-01-2022</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="text-gray-900 relative inline-block date uppercase font-medium my-3 tracking-widest">December 2021</span>
                    <div className="flex mb-2">
                        <div className="w-2/12">
                            <span className="text-sm text-gray-600 block">12/Dec</span>
                        </div>
                        <div className="w-1/12">
                            <span className="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
                        </div>
                        <div className="w-9/12">
                            <span className="text-sm font-semibold block">TEXTILE 3rd Semester Result </span>
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-2/12">
                            <span className="text-sm text-gray-600 block">10/Jan</span>
                        </div>
                        <div className="w-1/12">
                            <span className="bg-yellow-400 h-2 w-2 rounded-full block mt-2"></span>
                        </div>
                        <div className="w-9/12">
                            <span className="text-sm font-semibold block">ডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিং শিক্ষাক্রমের পুনঃনিরীক্ষণের কার্যক্রম সংক্রান্ত বিজ্ঞপ্তিডিপ্লোমা ইন টেক্সটাইল ইঞ্জিনিয়ারিং শিক্ষাক্রমের পুনঃনিরীক্ষণের কার্যক্রম সংক্রান্ত বিজ্ঞপ্তি</span>
                        </div>
                    </div>
                </div> */}

            </div>
            <Link to="/news" className="text-center cursor-pointer absolute left-0 right-0 bottom-0 bg-slate-100 border-t-2 hover:text-sky-600 ">See more</Link>
        </div >
    );
};

export default UpdateNews;