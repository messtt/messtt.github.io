import React from 'react';
import './../styles/footer.css';

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
                                <img className="logo_discord" src="https://assets.stickpng.com/images/62b2261f038aad4d3ed7ca48.png" alt="discord" width={20} height={20}/>
                            </a>
                        </li>
                        <li className="li_second_header_media">
                            <a href="https://www.instagram.com/">
                                <img className="logo_instagram" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="instagram" width={20} height={20}/>
                            </a>
                        </li>
                        <li className="li_second_header_media">
                            <a href="https://slack.com/">
                                <img className="logo_slack" src="https://cdn.icon-icons.com/icons2/3053/PNG/512/slack_macos_bigsur_icon_189725.png" alt="slack" width={20} height={20}/>
                            </a>
                        </li>
                        <li className="li_second_header_media">
                            <a href="https://github.com/">
                                <img className="logo_github" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" width={20} height={20}/>
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
