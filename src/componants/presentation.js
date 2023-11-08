import React, { useEffect, useState } from 'react';
import './../styles/presentation.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Presentation() {
    useEffect(() => {
        const presentation_content = document.querySelector('.presentation_content');

        gsap.to(presentation_content, {
            scrollTrigger: {
                trigger: presentation_content,
                start: 'top 80%',
                end: 'top 40%',
                toggleActions: 'play reverse reverse reverse',
                scrub: 0,
                markers: true,
            },
            scale: 0.7,
            scrub: 0,
            boxShadow: '0px 0px 50px 4px #4446c1',
            borderRadius: '30px',

            duration: 1,
        });

        const presentation_content_image = document.querySelector('.presentation_content_image');

        gsap.fromTo(presentation_content_image, {
            opacity: 1,
            y: 650
        }, {
            opacity: 1,
            y: 350,
            duration: 1,
            zIndex: 999999,
            scrollTrigger: {
                trigger: presentation_content_image,
                start: 'top 100%',
                end: 'top 50%',
                toggleActions: 'play none none reverse',
                scrub: 0,
                ondurationchange: 2,
                markers: true
            }
        });


    }, []);

    return (
        <div className="presentation">
            <div className="presentation_container">
                <div className="presentation_title">
                    <h1>Présentation</h1>
                </div>
                <div className="presentation_content_image">
                    <img className="presentation_image" src="https://picsum.photos/200/300" alt="" />
                </div>
                <div className="presentation_content">
                    <div className="presentation_content_text">
                        <p className="presentation_text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Nesciunt, quibusdam
                            quas. Quos, voluptates. Quia, quibusdam. Quisquam, quod. Nesciunt, quibusdam quas. Quos,
                            voluptates. Quia, quibusdam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presentation;
