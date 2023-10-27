import React, { useEffect } from 'react';
import './../styles/header.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Header() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const main_header = document.querySelector('.main_header');
        const second_header = document.querySelector('.second_header');
        const logo = document.querySelector('.logo');
        const highlightText = document.querySelector('.li_main_header');

        // Animation de l'en-tête en réponse au défilement
        gsap.to(main_header, {
            scrollTrigger: {
                trigger: main_header,
                start: 'top top',
                end: 'top top',
                scrub: 1,
                markers: false,
            },
            borderRadius: '10px',
            border: '5px solid #4446c1',
            top: '10px',
            scale: 0.9,
        });

        gsap.to(second_header, {
            scrollTrigger: {
                trigger: second_header,
                start: '43px',
                end: '43px',
                scrub: false,
                markers: false,
                toggleActions: "restart none none none",
                onEnterBack: () => {
                    gsap.to(second_header, {
                        opacity: 1,
                        duration: 1,
                    });
                },
            },
            opacity: 0,
            duration: 1,
        });

        // Animation de rotation du logo au survol
        logo.addEventListener('mouseenter', () => {
            gsap.to(logo, { rotation: 20, duration: 0.5 });
        });

        logo.addEventListener('mouseleave', () => {
            gsap.to(logo, { rotation: 0, duration: 0.5 });
        });
    }, []);

    return (
        <header className="header">
            <div className="second_header">
                <nav className="nav_second_header">
                    <ul className="ul_second_header_media">
                        <li className="li_second_header_media">
                            <a href="https://discord.com/">
                                <img className="logo_discord" src="../assets/discord.png" alt="discord" width={20} height={20}/>
                            </a>
                        </li>
                        <li className="li_second_header_media">
                            <a href="https://www.instagram.com/">
                                <img className="logo_instagram" src="../assets/instagram-logo.png" alt="instagram" width={20} height={20}/>
                            </a>
                        </li>
                        <li className="li_second_header_media">
                            <a href="https://slack.com/">
                                <img className="logo_slack" src="../assets/slack-logo.png" alt="slack" width={20} height={20}/>
                            </a>
                        </li>
                        <li className="li_second_header_media">
                            <a href="https://github.com/">
                                <img className="logo_github" src="../assets/github-logo.png" alt="github" width={20} height={20}/>
                            </a>
                        </li>
                    </ul>
                    <ul className="ul_second_header_contact">
                        <li className="li_second_header_contact">
                                <a className="mail a_category" href="mailto:corentin.albertus@hotmail.fr">corentin.albertus@hotmail.fr</a>
                        </li>
                        <li className="li_second_header_contact">
                                <a className="mail a_category" href="tel:+33782530637">0782530637</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="main_header">
                <nav className="nav_main_header">
                    <img className="logo" src="../assets/logo.png" alt={"logo"}/>
                    <ul className="ul_main_header">
                        <li className="li_main_header"><a className="a_category" href="/">Accueil</a></li>
                        <li className="li_main_header"><a className="a_category" href="/contact">Contact</a></li>
                        <li className="li_main_header"><a className="a_category" href="/contact">Contact</a></li>
                        <li className="li_main_header"><a className="a_category" href="/contact">Contact</a></li>
                        <li className="li_main_header"><a className="a_category" href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
