import React from 'react';
import HeroSection from '../components/HeroSection';
import BlogSection from '../components/BlogSection';
import DepartmentSection from '../components/DepartmentSection';
import FanFactSection from '../components/FanFactSection';
import ProgramSection from '../components/ProgramSection';
import CampusSection from '../components/CampusSection';
import TestimonialSection from '../components/TestimonialSection';
import EventSection from '../components/EventSection';

const Home = () => {
    return (
        <main>
            <HeroSection />
            <BlogSection />
            <DepartmentSection />
            <FanFactSection />
            <ProgramSection />
            <CampusSection />
            <TestimonialSection />
            <EventSection />
            {/* Other sections */}
        </main>
    );
};

export default Home;