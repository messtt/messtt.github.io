import React, { useEffect } from 'react';
import './../styles/project.css';
import { gsap } from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';
import { scrollToPosition } from '../utils/scroll';

function ProjectBox() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const animateBox = (box, xValue, yValue, boxShadow) => {
            gsap.to(box, {
                x: xValue,
                y: yValue,
                boxShadow: boxShadow,
                duration: 0.5,
            });
        };

        const handleMouseEnter = (box) => {
            animateBox(box, 10, 10, '0px 0px 10px 0px rgba(0,0,0,0)');
        };

        const handleMouseLeave = (box) => {
            animateBox(box, 0, 0,  '10px 10px 10px 0px rgba(0, 0, 0, 0.32)');
        };

        const boxes = document.querySelectorAll('.project_box');

        boxes.forEach((box) => {
            box.addEventListener('mouseenter', () => {
                handleMouseEnter(box);
            });
            box.addEventListener('mouseleave', () => {
                handleMouseLeave(box);
            });
        });
    }, []);

    return (
        <div className="project_box">
            <div className="project_box_img">
                <img className="img_project" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/03/web-images.jpg?auto=format&q=60&w=1600&h=824&fit=crop&crop=faces" alt={"projet1"}/>
            </div>
            <div className="project_box_content">
                <h3 className="project_box_content_title">Projet 1</h3>
                <p className="project_box_content_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc. Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc.</p>
                <button className="project_box_content_button">temporaire</button>
            </div>
        </div>
    );
}

function Project() {
    useEffect(() => {
        let lastScrollTop = 0;
        const project = document.querySelector('.project');
        gsap.registerPlugin(ScrollTrigger);

        const scrollHorizontalElement = document.querySelector('.project_box');

        const horizontalAnimation = gsap.from(scrollHorizontalElement, {
            x: 2000, // Adjust the horizontal scroll amount as needed
            ease: 'none', // Choose the animation easing that suits your needs
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
            <h2 className="project_title">Mes projets</h2>
            <div className="project_grid">
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
            </div>
        </div>
    );
}

export default Project;
