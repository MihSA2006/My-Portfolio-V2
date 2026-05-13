import React from 'react'
import { useLanguage } from '../context/LanguageContext';

const Hackathons = () => {
    const { t } = useLanguage();
    return (
        <div className="w-screen h-screen flex-shrink-0 snap-start bg-white flex items-center justify-center">
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tighter text-black">{t.hackathons.title}</h2>
        </div>
    )
}

export default Hackathons