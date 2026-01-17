import React from 'react';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <div className="flex-1 pt-10 pl-10">
            <div className="bg-black text-white h-[344px] w-full flex items-center justify-around px-10">
                {/* Main Banner Text */}
                <div className="text-left">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-5xl"></span>
                        <span className="text-xl">iPhone 14 Series</span>
                    </div>
                    <h1 className="text-5xl font-bold mb-4">Up to 10% <br /> off Voucher</h1>
                    <div className="flex items-center gap-2 cursor-pointer hover:underline">
                        <span>Shop Now</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </div>
                {/* Main Banner Image */}
                <div>
                    <img
                        src="https://pngimg.com/uploads/iphone_14/iphone_14_PNG2.png"
                        alt="iPhone 14 Pro Max"
                        className="h-[300px] object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
