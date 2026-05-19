import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const NavigationSidebar = ({ activeIndex, onNavigate }) => {
    const { t } = useLanguage();

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 xl:bottom-10 xl:left-20 xl:translate-x-0 z-[100] flex items-center bg-white/50 backdrop-blur-md px-6 py-3 rounded-full xl:bg-transparent xl:backdrop-blur-none xl:p-0">
            {t.nav.links.map((link, index) => (
                <div 
                    key={link.id}
                    className="flex items-center"
                >
                    <div
                        onClick={() => onNavigate(index)}
                        className={`group cursor-pointer flex flex-col items-center transition-all duration-300 ${activeIndex === index ? 'scale-110' : 'hover:scale-105'}`}
                    >
                        <span className={`text-[10px] xl:text-[11px] font-black tracking-tighter transition-all duration-300 ${activeIndex === index ? 'text-black' : 'text-gray-400 group-hover:text-black'}`}>
                            {link.label}
                        </span>
                        <div className={`mt-1 transition-all duration-500 ${activeIndex === index ? 'w-full h-[2px] bg-black' : 'w-0 h-[1px] bg-gray-300 group-hover:w-full'}`}></div>
                    </div>
                    
                    {index < t.nav.links.length - 1 && (
                        <div className="w-4 xl:w-16 h-[1px] bg-gray-200 mx-2 xl:mx-4"></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default NavigationSidebar;
