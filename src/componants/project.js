import React, { useEffect } from 'react';
import './../styles/project.css';
import { gsap } from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Project() {
    useEffect(() => {
        const boxes = document.querySelectorAll('.container');
        const scrollHorizontalElement = document.querySelector('.project_box');
        const isLeft = true;
        let boxesPosition = 2000;

        const horizontalAnimation = gsap.from(scrollHorizontalElement, {
            x: 2000,
            ease: 'none',
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
                    markers: true,
                    toggleActions: 'restart none none none',
                },
                x: boxesPosition,
                scrub: true,
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
        <div className="project">
            <div className="container project_box1">
                <img src="https://th.bing.com/th/id/OIG.jFBs3qXz4ADuUkgdmy2S?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" className="img_project" alt="Votre image" />
                <div className="project_image_title image_title_box1">Hac ex causa conlaticia stipe Valerius humatur ille Publicola et subsidiis amicorum mariti inops cum liberis uxor alitur Reguli et dotatur ex aerario filia Scipionis, cum nobilitas florem adultae virginis diuturnum absentia pauperis erubesceret patris.</div>
            </div>
            <div className="container project_box2">
                <div className="project_image_title image_title_box2">Hac ex causa conlaticia stipe Valerius humatur ille Publicola et subsidiis amicorum mariti inops cum liberis uxor alitur Reguli et dotatur ex aerario filia Scipionis, cum nobilitas florem adultae virginis diuturnum absentia pauperis erubesceret patris.</div>
                <img src="https://th.bing.com/th/id/OIG.jFBs3qXz4ADuUkgdmy2S?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" className="img_project" alt="Votre image" />
            </div>
            <div className="container project_box3">
                <img src="https://th.bing.com/th/id/OIG.jFBs3qXz4ADuUkgdmy2S?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" className="img_project" alt="Votre image" />
                <div className="project_image_title image_title_box3">Hac ex causa conlaticia stipe Valerius humatur ille Publicola et subsidiis amicorum mariti inops cum liberis uxor alitur Reguli et dotatur ex aerario filia Scipionis, cum nobilitas florem adultae virginis diuturnum absentia pauperis erubesceret patris.</div>
            </div>
        </div>
    );
}

export default Project;
