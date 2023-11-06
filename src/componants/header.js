import React, { useEffect, useState } from 'react';
import './../styles/header.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lottie from 'lottie-web';
import animationData from '../assets/burger_menu.json';
import Logo from './../assets/logo.png';
import instagram_logo from './../assets/instagram-logo.png';
import slack_logo from './../assets/slack-logo.png';
import discord_logo from './../assets/discord.png';
import github_logo from './../assets/github-logo.png';

gsap.registerPlugin(ScrollTrigger);

function Header() {
    useEffect(() => {
        const animationContainer = document.getElementById('burger_animation');
        const burgerMenu = document.getElementById('burger_spawn_menu');
        const mainHeader = document.querySelector('.main_header');
        const li_main_header = document.querySelectorAll('.li_main_header');
        const secondHeader = document.querySelector('.second_header');

        const anim = lottie.loadAnimation({
            container: animationContainer,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: animationData,
        });

        let isMenuOpen = false;

        li_main_header.forEach((item) => {
            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    y: 5,
                    duration: 0.1,
                });
            });
            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    y: 0,
                    duration: 0.1,
                });
            });
        });



        animationContainer.addEventListener('click', () => {
            if (!isMenuOpen) {
                anim.playSegments([0, 60], true);
                gsap.to(burgerMenu, {
                    x: 0,
                    duration: 1,
                    display: 'block',
                });
            } else {
                anim.playSegments([60, 0], true);
                gsap.to(burgerMenu, {
                    x: -1000,
                    duration: 1,
                    display: 'none',
                });
            }
            isMenuOpen = !isMenuOpen;
        });

        // Animation de l'en-tête en réponse au défilement
        gsap.to(mainHeader, {
            scrollTrigger: {
                trigger: mainHeader,
                start: 'top top',
                end: 'top top',
                scrub: 1,
            },
            borderRadius: '10px',
            border: '5px solid #4446c1',
            top: '10px',
            scale: 0.9,
        });

        gsap.to(secondHeader, {
            scrollTrigger: {
                trigger: secondHeader,
                start: '43px',
                end: '43px',
                scrub: false,
                toggleActions: "restart none none none",
                onEnterBack: () => {
                    gsap.to(secondHeader, {
                        opacity: 1,
                        duration: 1,
                    });
                },
            },
            opacity: 0,
            duration: 1,
        });
    }, []);

    return (
        <header className="header">
            <div className="main_header">
                <div className="site_title">
                    <p className="title">CORENTIN.ALB</p>
                </div>
                <div className="nav_site">
                    <nav className="nav_main_header">
                        <ul className="ul_main_header">
                            <li className="li_main_header"><a className="a_category" href="/">Accueil</a></li>
                            <li className="li_main_header"><a className="a_category" href="/contact">Projets</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="nav_social">
                    <li className="li_main_header"><a className="a_category" href="/contact">Contact for a project</a></li>
                </div>
            </div>
            <div className="main_header_mobile">
                <div className="lottie" id="burger_animation"/>
                <p className="title">BLUEBLUE</p>
                <img className="logo" src={Logo} alt={"logo"} width={50} height={50}/>
            </div>
            <div className="burger_menu" id="burger_spawn_menu">
                <nav className="nav_main_header">
                    <ul className="ul_main_header">
                        <li className="li_main_header"><a className="a_category" href="/">Accueil</a></li>
                        <li className="li_main_header"><a className="a_category" href="/contact">Projets</a></li>
                        <li className="li_main_header"><a className="a_category" href="/contact">Competence</a></li>
                        <li className="li_main_header"><a className="a_category" href="/contact">Methode</a></li>
                        <li className="li_main_header"><a className="a_category" href="/contact">Tarifs</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
