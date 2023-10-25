import React, { useEffect, useRef } from 'react';
import '../styles/cover.css';
import p5 from 'p5';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { scrollToPosition } from '../utils/scroll';

function Cover() {
    const canvasRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);

        const sketch = (p) => {
            let squares = [];
            const squareSize = 50;

            p.setup = () => {
                p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasRef.current);
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
                p.background(220);

                for (let i = 0; i < squares.length; i++) {
                    const square = squares[i];
                    const distance = p.dist(p.mouseX, p.mouseY, square.x, square.y);
                    const size = p.map(distance, 0, p.width, 5, 30);
                    p.fill(255, 0, 0);
                    p.rect(square.x, square.y, size, size);
                }
            };
        };

        new p5(sketch);

    }, []);

    return (
        <div className="cover">
            <div className="cover_animation" ref={canvasRef}></div>
            <div className="content">
                <div className="content_box">
                    <h1 className="content_title">Hello, I'm <span className="content_title_name">Corentin</span></h1>
                    <p className="content_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc.</p>
                    <button className="content_button" onClick={() => scrollToPosition(window.innerHeight)}>temporaire</button>
                </div>
            </div>
        </div>
    );
}

export default Cover;
