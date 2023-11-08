import React from 'react';
import './../styles/footer.css';
import instagram_logo from './../assets/instagram-logo.png';
import slack_logo from './../assets/slack-logo.png';
import discord_logo from './../assets/discord.png';
import github_logo from './../assets/github-logo.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="contact_box">
                <div className="content_contact_box">
                    <div>
                        <h3 className="content_contact_box_title">Prêt à améliorer votre relation client?</h3>
                    </div>
                    <div>
                        <button className="content_contact_box_button">
                            temporaire
                        </button>
                        <button className="content_contact_box_button">
                            temporaire
                        </button>
                    </div>
                </div>
            </div>

            <div className="info_contact">
                <div className="info_contact_box">
                    <h4 className="info_contact_box_title">Contact</h4>
                    <p className="info_contact_box_adress">199 rue eugenie cotton</p>
                    <p className="info_contact_box_city">34000 Montpellier</p>
                    <p className="info_contact_box_country">France</p>
                    <p className="info_contact_box_tel">+33 6 00 00 00 00</p>
                    <p className="info_contact_box_mail">corentin.albertus@hotmail.com</p>
                </div>
                <div className="info_contact_social">
                    <h4 className="info_contact_social_title">Suivez-moi</h4>
                    <ul className="ul_second_header_media">
                        <li className="li_second_header_media">
                            <a href="https://discord.com/">
                                <img className="logo_discord" src={discord_logo} alt="discord" width={20} height={20}/>
                            </a>
                        </li>
                        <li className="li_second_header_media">
                            <a href="https://www.instagram.com/">
                                <img className="logo_instagram" src={instagram_logo} alt="instagram" width={20} height={20}/>
                            </a>
                        </li>
                        <li className="li_second_header_media">
                            <a href="https://slack.com/">
                                <img className="logo_slack" src={slack_logo} alt="slack" width={20} height={20}/>
                            </a>
                        </li>
                        <li className="li_second_header_media">
                            <a href="https://github.com/">
                                <img className="logo_github" src={github_logo} alt="github" width={20} height={20}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="legacy">
                <a className="copyright" href="https://www.legalplace.fr/">Copyrights © 2023. Corentin Albertus</a>
            </div>
        </footer>
    );
}

export default Footer;
