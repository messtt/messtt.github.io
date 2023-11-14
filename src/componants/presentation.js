import React, { useEffect } from 'react';
import './../styles/presentation.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pp from './../assets/Photo_profil_Corentin_Albertus.PNG';

gsap.registerPlugin(ScrollTrigger);
function Presentation() {

    useEffect(() => {
        const presentation_content = document.querySelector('.presentation_content');
        const presentation_content_image = document.querySelector('.presentation_content_image');
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (!isMobile) {

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
