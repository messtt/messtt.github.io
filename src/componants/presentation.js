import React, { useEffect } from 'react';
import './../styles/presentation.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pp from './../assets/Photo_profil_Corentin_Albertus.PNG';

gsap.registerPlugin(ScrollTrigger);
function Presentation() {

    useEffect(() => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (!isMobile) {
            const presentation_container = document.querySelector('.presentation_container');
            const presentation_title = document.querySelector('.presentation_title');
            const presentation_image = document.querySelector('.presentation_image');
            const presentation_text = document.querySelector('.presentation_text');

            gsap.from(presentation_title, {
                scrollTrigger: {
                    trigger: presentation_title,
                    scrub: true,
                    start: 'top bottom',
                    end: 'top center',
                    toggleActions: 'restart none none none',
                },
                x: 200,
                opacity: 0,
                ease: 'none',
            });

            gsap.from(presentation_image, {
                scrollTrigger: {
                    trigger: presentation_image,
                    scrub: true,
                    start: 'top bottom',
                    end: 'top center',
                    toggleActions: 'restart none none none',
                },
                x: -200,
                opacity: 0,
                ease: 'none',
            });

            gsap.from(presentation_text, {
                scrollTrigger: {
                    trigger: presentation_text,
                    scrub: true,
                    start: 'top bottom',
                    end: 'top center',
                    toggleActions: 'restart none none none',
                },
                y: 200,
                opacity: 0,
                ease: 'none',
            });

            gsap.from(presentation_container, {
                scrollTrigger: {
                    trigger: presentation_container,
                    scrub: true,
                    start: 'top bottom',
                    end: 'top center',
                    toggleActions: 'restart none none none',
                },
                x: 200,
                opacity: 0,
                ease: 'none',
            });
        }
    }, []);

    return (
        <div className="presentation" id="presentation">
            <div className="presentation_container">
                <div className="presentation_title">
                    <h1>Corentin Albertus</h1>
                </div>
                <div className="presentation_content_image">
                    <img className="presentation_image" src={pp} alt="" />
                </div>
                <div className="presentation_content">
                    <div className="presentation_content_text">
                        <p className="presentation_text">
                            Étudiant en première année à Epitech
                            Montpellier, je travaille principalement
                            en C.
                            Curieux et motivé, j'aime acquérir de
                            nouvelles compétences au travers de
                            projets et j'aimerais découvrir le milieu
                            professionnel afin d'étendre mes
                            connaissances.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Presentation;
