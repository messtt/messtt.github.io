import React, { useEffect } from 'react';
import 'particles.js';

const ParticlesBackground = () => {
    useEffect(() => {
        particlesJS("particles-container", {
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: "#000",
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000",
                    },
                    polygon: {
                        nb_sides: 5,
                    },
                },
                opacity: {
                    value: 0.5,
                    random: true,
                },
                size: {
                    value: 5,
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "bottom",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    },
                },
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse",
                    },
                    onclick: {
                        enable: true,
                        mode: "push",
                    },
                    resize: true,
                },
            },
            retina_detect: true,
        });
    }, []);
    return (
        <div id="particles-container" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
        }}></div>
    );
};

export default ParticlesBackground;
