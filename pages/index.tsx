import type { NextPage } from 'next';
import Navbar from '../shared/components/navbar';
import Footer from '../shared/components/footer';
import SeoTags from '../shared/utils/seo-tags';
import Hero from '../components/home/hero';
import Strengths from '../components/home/strengths';
import TechMarquee from '../components/home/tech-marquee';
import SelectedWork from '../components/home/selected-work';
import Career from '../components/home/career';
import Contact from '../components/home/contact';
import { profile } from '../shared/data/profile';

const Home: NextPage = () => {
    return (
        <>
            <SeoTags
                title={`${profile.name} — Software Engineer & CTO`}
                description="Software engineer and CTO at Oodser and Praeta Consult in Kigali. Full-stack development with Next.js, Express and NestJS, plus Docker, CI/CD, VPS infrastructure, authentication and production support."
                path="/"
                personSchema
            />
            <Navbar />
            <main id="main">
                <Hero />
                <TechMarquee />
                <Strengths />
                <SelectedWork />
                <Career />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default Home;
