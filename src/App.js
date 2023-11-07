// App.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Header from './componants/header';
import Footer from './componants/footer';
import Project from "./componants/project";
import Cover from "./componants/cover";
import SectionSeparator from "./componants/sectionSeparator";
import ParticlesBackground from "./animation/particuleConfig";

import './styles/app.css';
function App() {
    useEffect(() => {
        const follower = document.querySelector('.mouse_following');
        function updateFollowerPosition(e) {
            gsap.to(follower, {
                x: e.clientX - follower.offsetWidth / 2 + window.scrollX,
                y: e.clientY - follower.offsetHeight / 2 + window.scrollY,
                filter: 'blur(10px)',
                duration: 0.1,
            });
        }
        document.addEventListener('mousemove', (e) => {
            updateFollowerPosition(e);
        });

        document.addEventListener('scroll', (e) => {
            updateFollowerPosition(e);
        });

    }, []);

    return (
        <div className="App">
            <ParticlesBackground />
            <div className="mouse_following"></div>
            <Header />
            <Cover />
            <SectionSeparator />
            <Project />
            <SectionSeparator />
            <Footer />
        </div>
    );
}

export default App;
