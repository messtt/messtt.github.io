import React, { useEffect, useRef } from 'react';
import '../styles/cover.css';
import p5 from 'p5';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import lottie from 'lottie-web';
import animationData from '../assets/scroll_down.json';
import { animationTextRandom } from '../animation/text_random';

gsap.registerPlugin(ScrollToPlugin);

function Cover() {
    const canvasRef = useRef(null); // Add a canvas ref

    useEffect(() => {
        const animationContainer = document.getElementById('your-lottie-animation');
        const anim = lottie.loadAnimation({
            container: animationContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData,
        });
        const box = document.querySelector('.cover');

        gsap.to(box, {
            duration: 2, // Durée de l'animation en secondes
            background: 'linear-gradient(to right, #000E00, #222222)',
            repeat: -1,
            yoyo: true,
        });
    }, []);

    return (
        <div className="cover">
            <div className="cover_animation" ref={canvasRef}></div>
            <div className="content">
                <div className="content_box">
                    <h1 className="content_title">Hello, I'm <span className="content_title_name">Corentin</span></h1>
                    <button className="content_button">Voir plus</button>
                </div>
            </div>
        </div>
    );
}

export default Cover;
