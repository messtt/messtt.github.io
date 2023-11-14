// App.js
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Header from './componants/header';
import Footer from './componants/footer';
import Project from "./componants/project";
import Cover from "./componants/cover";
import Presentation from "./componants/presentation";
import SectionSeparator from "./componants/sectionSeparator";
import ParticlesBackground from "./animation/particuleConfig";

gsap.registerPlugin();

import './styles/app.css';

function App() {
    useEffect(() => {
        const cursor = document.querySelector('.mouse_following');
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (!isMobile) {
            function updateFollowerPosition(e) {
                gsap.to(cursor, {
                    duration: 0.2,
                    left: e.clientX,
                    top: e.clientY,
                    ease: 'power4.out'
                });
            }
            window.addEventListener('mousemove', updateFollowerPosition);
        }
    }, []);

    return (
        <div className="App">

            <div className="mouse_following"></div>
            <Header />
            <Cover />
            <Presentation />
            <Project />
            <Footer />
        </div>
    );
}

export default App;
