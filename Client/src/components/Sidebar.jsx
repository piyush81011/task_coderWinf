import React from 'react';

const Sidebar = () => {
    return (
        <div className="w-64 border-r border-gray-200 pt-10 pr-6">
            <ul className="space-y-4 text-gray-900">
                <li className="flex justify-between items-center cursor-pointer hover:text-red-500">
                    Woman's Fashion <span>&gt;</span>
                </li>
                <li className="flex justify-between items-center cursor-pointer hover:text-red-500">
                    Men's Fashion <span>&gt;</span>
                </li>
                <li className="cursor-pointer hover:text-red-500">Electronics</li>
                <li className="cursor-pointer hover:text-red-500">Home & Lifestyle</li>
                <li className="cursor-pointer hover:text-red-500">Medicine</li>
                <li className="cursor-pointer hover:text-red-500">Sports & Outdoor</li>
                <li className="cursor-pointer hover:text-red-500">Baby's & Toys</li>
                <li className="cursor-pointer hover:text-red-500">Groceries & Pets</li>
                <li className="cursor-pointer hover:text-red-500">Health & Beauty</li>
            </ul>
        </div>
    );
};

export default Sidebar;
