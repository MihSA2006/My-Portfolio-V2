import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { socialLinks } from '../data/dataSocials';
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    ArrowUpRightIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
    const { t } = useLanguage();
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("idle"); // idle, loading, success, error

    const onSubmit = async (event) => {
        event.preventDefault();
        setStatus("loading");
        setResult("");

        const formData = new FormData(event.target);
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch(import.meta.env.VITE_WEB3FORMS_URL, {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                setResult(t.contact.messages?.success || "Success!");
                event.target.reset();
            } else {
                setStatus("error");
                setResult(data.message || t.contact.messages?.error || "Error");
            }
        } catch {
            setStatus("error");
            setResult(t.contact.messages?.error || "Error");
        }
    };

    return (
        <div className="relative w-full min-h-[calc(100vh-60px)] lg:h-screen bg-white text-black lg:overflow-hidden font-sans flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-12 lg:py-0">

            {/* Watermark Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <h1 className="text-[25vw] lg:text-[15vw] font-black uppercase tracking-tighter text-gray-50 opacity-[0.03] select-none">
                    {t.contact.title}
                </h1>
            </div>

            <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                {/* Left Side: Info */}
                <div className="w-full lg:w-1/2 space-y-12 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="space-y-4 flex flex-col items-center lg:items-start">
                        <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
                            <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-black">{t.contact.title}</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-black leading-none">
                            {t.contact.subtitle}
                        </h2>
                        <p className="text-gray-500 max-w-md text-sm md:text-base leading-relaxed">
                            {t.contact.description}
                        </p>
                    </div>

                    <div className="space-y-4 w-full">
                        {/* Email box */}
                        <div className="group flex items-center justify-between p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-black transition-all duration-300 cursor-pointer">
                            <div className="flex items-center space-x-6">
                                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                                    <EnvelopeIcon className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{t.contact.info.email.label}</p>
                                    <p className="text-sm font-bold text-black">{t.contact.info.email.value}</p>
                                </div>
                            </div>
                            <ArrowUpRightIcon className="w-5 h-5 text-gray-300 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </div>

                        {/* Phone box */}
                        <div className="group flex items-center justify-between p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-black transition-all duration-300 cursor-pointer">
                            <div className="flex items-center space-x-6">
                                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                                    <PhoneIcon className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{t.contact.info.call.label}</p>
                                    <p className="text-sm font-bold text-black">{t.contact.info.call.value}</p>
                                </div>
                            </div>
                            <ArrowUpRightIcon className="w-5 h-5 text-gray-300 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </div>

                        {/* Location box */}
                        <div className="group flex items-center justify-between p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-black transition-all duration-300 cursor-pointer">
                            <div className="flex items-center space-x-6">
                                <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                                    <MapPinIcon className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{t.contact.info.location.label}</p>
                                    <p className="text-sm font-bold text-black">{t.contact.info.location.value}</p>
                                </div>
                            </div>
                            <ArrowUpRightIcon className="w-5 h-5 text-gray-300 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <form onSubmit={onSubmit} className="w-full lg:w-1/2 bg-gray-50 p-6 md:p-12 rounded-3xl border border-gray-100 shadow-sm space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t.contact.fields.name}</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 outline-none focus:border-black transition-all font-medium"
                            placeholder={t.contact.fields.name}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t.contact.fields.email}</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 outline-none focus:border-black transition-all font-medium"
                            placeholder={t.contact.fields.email}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">{t.contact.fields.message}</label>
                        <textarea
                            name="message"
                            rows="4"
                            required
                            className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 outline-none focus:border-black transition-all font-medium resize-none"
                            placeholder={t.contact.fields.message}
                        ></textarea>
                    </div>
                    
                    <button 
                        type="submit"
                        disabled={status === "loading"}
                        className={`w-full bg-black text-white py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-all active:scale-[0.98] mt-4 shadow-xl flex justify-center items-center gap-3 disabled:bg-gray-400 disabled:cursor-not-allowed`}
                    >
                        {status === "loading" ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                Sending...
                            </>
                        ) : (
                            t.contact.fields.submit
                        )}
                    </button>

                    {result && (
                        <div className={`text-center p-4 rounded-xl text-xs font-bold uppercase tracking-widest ${
                            status === "success" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                        }`}>
                            {result}
                        </div>
                    )}
                </form>
            </div>

            <div className="flex lg:absolute lg:right-6 md:lg:right-10 lg:top-1/2 lg:-translate-y-1/2 lg:flex-col space-x-8 lg:space-x-0 lg:space-y-8 z-20 mt-12 lg:mt-0 justify-center">
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-all duration-300 hover:scale-110">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
                <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-all duration-300 hover:scale-110">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6"><path fillRule="evenodd" d="M12.008 1.996C6.486 1.996 2 6.483 2 12.005c0 1.764.462 3.42 1.306 4.85l-1.397 5.105 5.228-1.371a9.98 9.98 0 004.871 1.263h.004c5.524 0 10.007-4.488 10.007-10.01 0-2.678-1.042-5.193-2.936-7.086a10.038 10.038 0 00-7.075-2.76zm-.004 16.32a8.318 8.318 0 01-4.24-1.155l-.304-.18-3.155.827.842-3.076-.197-.314A8.303 8.303 0 013.684 12c0-4.595 3.738-8.334 8.336-8.334 2.227 0 4.319.867 5.894 2.443 1.574 1.576 2.441 3.668 2.441 5.895 0 4.595-3.739 8.334-8.334 8.334zm4.575-6.242c-.25-.125-1.484-.733-1.714-.817-.23-.083-.398-.125-.565.125-.167.25-.65.817-.798.983-.148.167-.297.188-.547.063-.25-.125-1.058-.39-2.016-1.241-.745-.662-1.248-1.48-1.396-1.73-.148-.25-.016-.385.11-.51.112-.112.25-.292.374-.438.125-.146.167-.25.25-.417.083-.166.042-.312-.02-.437-.064-.125-.566-1.365-.776-1.87-.205-.494-.413-.427-.565-.435-.148-.008-.318-.009-.485-.009-.167 0-.44.062-.67.312-.23.25-.88.86-.88 2.096 0 1.236.9 2.43 1.026 2.597.125.166 1.77 2.704 4.288 3.788.6.258 1.066.413 1.431.528.602.19 1.15.163 1.583.1.483-.07 1.484-.607 1.693-1.194.21-.588.21-1.092.147-1.194-.062-.103-.23-.166-.48-.291z" clipRule="evenodd" /></svg>
                </a>
                <a href={socialLinks.linkedin} className="text-gray-500 hover:text-black transition-all duration-300 hover:scale-110">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
                <div className="w-[1px] h-16 bg-gray-300 mx-auto mt-4 hidden lg:block"></div>
            </div>

            {/* Rotated text - Copyright (Same as Me.jsx) */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[9px] uppercase font-bold tracking-[0.4em] text-gray-400 hidden xl:block whitespace-nowrap">
                {t.contact.copyright}
            </div>

            {/* Mobile copyright - visible on small screens */}
            <div className="mt-12 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 xl:hidden">
                {t.contact.copyright}
            </div>
        </div>
    );
};

export default Contact;
