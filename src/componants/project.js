import React, { useEffect } from 'react';
import './../styles/project.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Project() {
    useEffect(() => {
        const boxes = document.querySelectorAll('.container');
        const scrollHorizontalElement = document.querySelector('.project_box');
        const project_image_title = document.querySelectorAll('.project_image_title');
        let isLeft = true;
        let boxesPosition = 2000;

        const horizontalAnimation = gsap.from(scrollHorizontalElement, {
            x: 2000,
            ease: 'none',
        });

        project_image_title.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                gsap.to(el, {
                    duration: 0.5,
                    textDecoration: 'text-decoration: underline overline #ff3028;',
                });
            });

            el.addEventListener('mouseleave', () => {
                gsap.to(el, {
                    duration: 0.5,
                    textDecoration: 'none',
                });
            });
        });

        boxes.forEach((box) => {
            if (isLeft) {
                boxesPosition = -boxesPosition;
            }
            gsap.from(box, {
                scrollTrigger: {
                    trigger: box,
                    scrub: true,
                    start: 'top bottom',
                    end: 'top center',
                    toggleActions: 'restart none none none',
                },
                x: window.innerWidth > 600 ? boxesPosition : 0, // Adjust as needed
                ease: 'none',
            });
        });

        ScrollTrigger.create({
            trigger: scrollHorizontalElement,
            start: 'top top',
            end: 'bottom top',
            animation: horizontalAnimation,
            scrub: true,
        });
    }, []);

    return (
        <div className="project" id="project">
            <div className="container project_box1">
                <img src="https://media.tarkett-image.com/large/TH_24567081_24594081_24596081_24601081_24563081_24565081_24588081_001.jpg" className="img_project" alt="Votre image" />
                <div className="project_image_title image_title_box1">Hac ex causa conlaticia stipe Valerius humatur ille Publicola et subsidiis amicorum mariti inops cum liberis uxor alitur Reguli et dotatur ex aerario filia Scipionis, cum nobilitas florem adultae virginis diuturnum absentia pauperis erubesceret patris.</div>
            </div>
            <div className="container project_box2">
                <div className="project_image_title image_title_box2">Hac ex causa conlaticia stipe Valerius humatur ille Publicola et subsidiis amicorum mariti inops cum liberis uxor alitur Reguli et dotatur ex aerario filia Scipionis, cum nobilitas florem adultae virginis diuturnum absentia pauperis erubesceret patris.</div>
                <img src="https://media.tarkett-image.com/large/TH_24567081_24594081_24596081_24601081_24563081_24565081_24588081_001.jpg" className="img_project" alt="Votre image" />
            </div>
            <div className="container project_box3">
                <img src="https://media.tarkett-image.com/large/TH_24567081_24594081_24596081_24601081_24563081_24565081_24588081_001.jpg" className="img_project" alt="Votre image" />
                <div className="project_image_title image_title_box3">Hac ex causa conlaticia stipe Valerius humatur ille Publicola et subsidiis amicorum mariti inops cum liberis uxor alitur Reguli et dotatur ex aerario filia Scipionis, cum nobilitas florem adultae virginis diuturnum absentia pauperis erubesceret patris.</div>
            </div>
        </div>
    );
}

export default Project;

