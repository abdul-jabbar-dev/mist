/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';

const ShortBanner = () => {
    return (
        <div class="grid md:grid-cols-3 gap-y-2 grid-cols-1 sm:gap-x-6 p-4 py-12 sm:text-center">

            <div className='shadow-2xl  w-full bg-sky-700 text-zinc-50 p-4 rounded-md'>
                <p className='text-2xl my-2 font-semibold'>আমাদের প্রোগ্রাম</p>
                <p className='text-gray-300'>ম্যানগ্রোভ ইনস্টিটিউট বর্তমানে 15টি প্রযুক্তিতে 4-বছরের ডিপ্লোমা ইন ইঞ্জিনিয়ারিং কোর্স অফার করে। ডিপ্লোমা ইন ইঞ্জিনিয়ারিং হল বাংলাদেশ কারিগরি শিক্ষা বোর্ড কর্তৃক পরিচালিত একটি 6 মাসের, 6-সেমিস্টারের কোর্স।</p>
            </div>
            <div className='shadow-2xl  w-full bg-red-500 text-zinc-50 p-4 rounded-md'>
                <p className='text-2xl my-2 font-semibold'>বেতন</p>
                <p className='text-gray-300'>আমরা শিক্ষার্থীদের সুবিধার জন্য একাধিক কিস্তিতে তাদের পরিশোধ করার বিকল্প সহ শিক্ষার্থীদের জন্য সাশ্রয়ী মূল্যের টিউশন ফি অফার করি</p>
            </div>
            <div className='shadow-2xl  w-full bg-sky-700 text-zinc-50 p-4 rounded-md'>
                <p className='text-2xl my-2 font-semibold'>স্কলারশিপ প্রোগ্রাম</p>
                <p className='text-gray-300'>আমরা নিশ্চিত করি যে আমাদের সমস্ত শিক্ষার্থী ডিগ্রী সম্পূর্ণ করার জন্য প্রয়োজনীয় সহায়তা পায়। চমৎকার একাডেমিক ফলাফলের পাশাপাশি আর্থিকভাবে লড়াই করা শিক্ষার্থীদের জন্য বৃত্তি পাওয়া যায়।</p>
            </div>
        </div>
    );
};

export default ShortBanner;