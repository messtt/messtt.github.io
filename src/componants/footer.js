import React, {useEffect} from 'react';
import './../styles/footer.css';
import instagram_logo from './../assets/instagram-logo.png';
import slack_logo from './../assets/slack-logo.png';
import discord_logo from './../assets/discord.png';
import github_logo from './../assets/github-logo.png';
import { gsap } from 'gsap';

gsap.registerPlugin();

function Footer() {
    useEffect(() => {
        const li_footer = document.querySelectorAll('.li_footer');
        const info = document.querySelector('.info');
        const li_contact_personal = document.querySelector('.li_contact_perso');
        const send_email = document.querySelector('.send_email');

        li_contact_personal.addEventListener('mouseenter', () => {
            send_email.style.color = '#000';
        });
        li_contact_personal.addEventListener('mouseleave', () => {
            send_email.style.color = '#ffffff';
        });

        li_footer.forEach((element) => {
            element.addEventListener('mouseenter', () => {
                li_contact_personal.style.color = '#ffffff';
                gsap.to(element, {
                    y: 5,
                    backgroundColor: '#ffffff',
                    duration: 0.2,
                });
            });
            element.addEventListener('mouseleave', () => {
                gsap.to(element, {
                    y: 0,
                    backgroundColor: '#000000',
                    duration: 0.2,
                });
            });

            gsap.fromTo(info, {
                opacity: 0,
                y: 0,
                scale: 2.5,
            }, {
                opacity: 1,
                y: -200,
                scale: 1.3,
                border: '1px solid #ffffff',
                borderRadius: '10px',
                padding: '20px 10vw',
                duration: 1,
                scrollTrigger: {
                    trigger: info,
                    marginTop: '100px',
                    backgroundColor: 'white',
                    marginBottom: '100px',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                }
            });
        });
    }, []);
    return (
        <footer className="footer" id="footer">
            <div className="info">
                <div className="info_contact_title">
                    <p className="info_contact_title_p">Corentin Albertus</p>
                    <h3 className="info_contact_title_h3">Contactez-moi</h3>
                </div>
                    <div className="info_contact_social">
                        <ul className="ul_second_header">
                            <li className="li_footer li_contact_perso">
                                <a className="send_email" href="#">
                                    Envoyer un mail
                                </a>
                            </li>
                        </ul>
                        <ul className="ul_second_header_media">
                            <li className="li_footer li_contact_media">
                                <a href="https://discord.com/">
                                    <img className="logo_discord" src={discord_logo} alt="discord" width={20} height={20}/>
                                </a>
                            </li>
                            <li className="li_footer li_contact_media">
                                <a href="https://discord.com/">
                                    <img className="logo_discord" src={discord_logo} alt="discord" width={20} height={20}/>
                                </a>
                            </li>
                            <li className="li_footer li_contact_media">
                                <a href="https://www.instagram.com/">
                                    <img className="logo_instagram" src={instagram_logo} alt="instagram" width={20} height={20}/>
                                </a>
                            </li>
                            <li className="li_footer li_contact_media">
                                <a href="https://slack.com/">
                                    <img className="logo_slack" src={slack_logo} alt="slack" width={20} height={20}/>
                                </a>
                            </li>
                            <li className="li_footer li_contact_media">
                                <a href="https://github.com/">
                                    <img className="logo_github" src={github_logo} alt="github" width={20} height={20}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;
