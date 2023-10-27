import React, { useEffect, useRef } from 'react';
import '../styles/cover.css';
import p5 from 'p5';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { scrollToPosition } from '../utils/scroll';
import lottie from 'lottie-web';
import animationData from '../assets/animation_lo5u2mqc.json';
import { animationTextRandom } from '../animation/text_random';

function Cover() {
    document.addEventListener("DOMContentLoaded", function() {
        animationTextRandom(document.querySelector(".content_title_name"));
    });
    const canvasRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);

        const sketch = (p) => {
            let squares = [];
            const squareSize = 20;

            p.setup = () => {
                p.createCanvas(window.innerWidth, p.windowHeight).parent(canvasRef.current);
                p.noStroke();
                const horizontalSquares = p.windowWidth / squareSize;
                const verticalSquares = p.height / squareSize;
                for (let i = 0; i < horizontalSquares; i++) {
                    for (let j = 0; j < verticalSquares; j++) {
                        const x = i * squareSize;
                        const y = j * squareSize;
                        squares.push({ x, y, size: squareSize });
                    }
                }
            };

            p.draw = () => {
                p.background(76, 78, 204)

                for (let i = 0; i < squares.length; i++) {
                    const square = squares[i];
                    const distance = p.dist(p.mouseX, p.mouseY, square.x, square.y);
                    const size = p.map(distance, 0, p.width, 15, 70);
                    p.fill(35, 39, 42);
                      p.rect(square.x, square.y, size, size);
                }
            };
        };

        new p5(sketch);

        const animationContainer = document.getElementById('your-lottie-animation');
        const anim = lottie.loadAnimation({
            container: animationContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData,
        });

    }, []);

    return (
        <div className="cover">
            <div className="cover_animation" ref={canvasRef}></div>
            <div className="content">
                <div className="content_box">
                    <h1 className="content_title">Hello, I'm <span className="content_title_name">Corentin</span></h1>
                    <p className="content_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc.</p>
                    <button className="content_button" >Voir plus</button>
                </div>
                <div className="lottie-container">
                    <div className="lottie" id="your-lottie-animation" onClick={() => scrollToPosition(window.innerHeight)}>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Cover;
