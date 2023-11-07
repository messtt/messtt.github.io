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
        const sub = document.querySelectorAll('.content_subtitle_name');
        const spawn_text_1 = document.querySelectorAll('.spawn_text_1');
        const spawn_text_2 = document.querySelectorAll('.spawn_text_2');
        const spawn_text_3 = document.querySelectorAll('.spawn_text_3');
        const animationContainer = document.getElementById('your-lottie-animation');
        const anim = lottie.loadAnimation({
            container: animationContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData,
        });
        const box = document.querySelector('.cover');

        function despawn_text(element) {
            gsap.to(element, {
                y: 300,
                duration: 2,
                opacity: 0,
                stagger: 0.2,
            });
        }

        function spawn_text(element, index) {
            gsap.fromTo(element, {
                y: 0,
                x: -300,
                opacity: 0,
                display: 'none',
                color: '#4446c1',
            }, {
                duration: 3,
                display: 'flex',
                opacity: 1,
                stagger: 0.2,
                color: 'white',
                y: 0,
                x: 0,

            });
        }

        let currentIndex = 0;

        async function changeText() {
            switch (currentIndex) {
                case 0:
                    despawn_text(spawn_text_2);
                    despawn_text(spawn_text_3);
                    spawn_text(spawn_text_1, 0);
                    break;
                case 1:
                    despawn_text(spawn_text_1);
                    despawn_text(spawn_text_3);
                    spawn_text(spawn_text_2, 0);
                    break;
                case 2:
                    despawn_text(spawn_text_1);
                    despawn_text(spawn_text_2);
                    spawn_text(spawn_text_3, 0);
                    break;
                default:
                    break;
            }
            currentIndex++;
            if (currentIndex > 2) {
                currentIndex = 0;
            }
        }
        spawn_text_2.forEach(element => {
            element.style.display = 'none';
        });
        spawn_text_1.forEach(element => {
            element.style.display = 'none';
        });
        spawn_text_3.forEach(element => {
            element.style.color = 'white';
        });
        setInterval(changeText, 5000);

    }, []);

    return (
        <div className="cover">
            <div className="cover_animation" ref={canvasRef}></div>
            <div className="content">
                <div className="content_box">
                    <h1 className="content_title">Hello,</h1>
                    <h2 className="content_title">I'm <span>Corentin</span></h2>
                    <h2 className="content_title">
                        <span className="content_subtitle_name">
                            <div className="spawn_text_1">I</div>
                            <div className="spawn_text_1">'</div>
                            <div className="spawn_text_1">m</div>
                            <div className="spawn_text_1">&nbsp;</div>
                            <div className="spawn_text_1">D</div>
                            <div className="spawn_text_1">e</div>
                            <div className="spawn_text_1">v</div>
                            <div className="spawn_text_1">e</div>
                            <div className="spawn_text_1">l</div>
                            <div className="spawn_text_1">o</div>
                            <div className="spawn_text_1">p</div>
                            <div className="spawn_text_1">e</div>
                            <div className="spawn_text_1">r</div>
                        </span>
                        <span className="content_subtitle_name">
                            <div className="spawn_text_2">I</div>
                            <div className="spawn_text_2">'</div>
                            <div className="spawn_text_2">m</div>
                            <div className="spawn_text_2">&nbsp;</div>
                            <div className="spawn_text_2">D</div>
                            <div className="spawn_text_2">e</div>
                            <div className="spawn_text_2">s</div>
                            <div className="spawn_text_2">i</div>
                            <div className="spawn_text_2">g</div>
                            <div className="spawn_text_2">n</div>
                            <div className="spawn_text_2">e</div>
                            <div className="spawn_text_2">r</div>
                        </span>
                        <span className="content_subtitle_name">
                            <div className="spawn_text_3">I</div>
                            <div className="spawn_text_3">'</div>
                            <div className="spawn_text_3">m</div>
                            <div className="spawn_text_3">&nbsp;</div>
                            <div className="spawn_text_3">I</div>
                            <div className="spawn_text_3">n</div>
                            <div className="spawn_text_3">t</div>
                            <div className="spawn_text_3">e</div>
                            <div className="spawn_text_3">g</div>
                            <div className="spawn_text_3">r</div>
                            <div className="spawn_text_3">a</div>
                            <div className="spawn_text_3">t</div>
                            <div className="spawn_text_3">o</div>
                            <div className="spawn_text_3">r</div>
                        </span>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Cover;
