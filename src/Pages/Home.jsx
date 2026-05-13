import React, { useState, useRef, useEffect } from 'react';
import Me from '../components/Me';
import MySkills from '../components/MySkills';
import MyProjects from '../components/MyProjects';
import Hackathons from '../components/Hackathons';
import NavBar from '../layout/NavBar';
import NavigationSidebar from '../components/NavigationSidebar';
import { useLanguage } from '../context/LanguageContext';
import useBgAnimation from '../hooks/useBgAnimation';

const Home = () => {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    const isScrolling = useRef(false);

    const canvasRef = useRef(null);
    useBgAnimation(canvasRef);

    const handleNavigate = (index) => {
        if (index < 0 || index >= t.nav.links.length) return;

        const element = document.getElementById(`section-${index}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
            setActiveIndex(index);
        }
    };

    const handleWheel = (e) => {
        if (isScrolling.current) return;

        if (Math.abs(e.deltaY) > 20) {
            isScrolling.current = true;
            if (e.deltaY > 0) {
                if (activeIndex < t.nav.links.length - 1) {
                    handleNavigate(activeIndex + 1);
                }
            } else {
                if (activeIndex > 0) {
                    handleNavigate(activeIndex - 1);
                }
            }

            setTimeout(() => {
                isScrolling.current = false;
            }, 1000);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index'));
                        setActiveIndex(index);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const sections = document.querySelectorAll('.page-section');
        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, [t.nav.links]);

    const renderSection = (index) => {
        switch (index) {
            case 0: return <Me />;
            case 1: return <MySkills />;
            case 2: return <MyProjects />;
            case 3: return <Hackathons />;
            case 4: return (
                <div className="w-screen h-screen flex-shrink-0 snap-start bg-white flex items-center justify-center">
                    <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tighter text-black">{t.contact.title}</h2>
                </div>
            );
            default: return null;
        }
    };

    return (
        <div className="relative w-full h-screen bg-white text-black overflow-hidden font-sans">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none opacity-80"
                style={{ zIndex: 1 }}
            />
            <NavBar activeIndex={activeIndex} onNavigate={handleNavigate} />

            <div
                ref={scrollContainerRef}
                className="flex w-full h-screen overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                onWheel={handleWheel}
                style={{ scrollBehavior: 'smooth' }}
            >
                {t.nav.links.map((_, index) => (
                    <div
                        key={index}
                        id={`section-${index}`}
                        data-index={index}
                        className="flex-shrink-0 w-screen h-screen snap-start page-section"
                    >
                        {renderSection(index)}
                    </div>
                ))}
            </div>

            <NavigationSidebar activeIndex={activeIndex} onNavigate={handleNavigate} />
        </div>
    );
};

export default Home;
