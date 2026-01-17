import React from 'react';

const TopHeader = () => {
    return (
        <div className="bg-black text-white text-sm py-3 px-4">
            <div className="container mx-auto flex justify-between items-center sm:px-0">
                <div className="flex-1 flex justify-center items-center gap-2 text-xs sm:text-sm">
                    <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                    <a href="#" className="font-semibold underline hover:text-gray-300">ShopNow</a>
                </div>
                <div className="hidden sm:flex items-center gap-1 cursor-pointer hover:text-gray-300">
                    <span>English</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
