import React from "react";
import "./Header.css";
import roboAssistant from "../../assets/roboAssistant.png";

function Header() {
    return (
        <div className="header">
            <div className="robo-image-container">
                <img src={roboAssistant} alt="robo" className="robo-image" />
            </div>
            <div className="heading-content-container">
                <div className="chat-name-container">
                    <div className="chat-name">Timpu{" ☀️"}</div>
                </div>
                <div className="sub-heading">
                    <div className="caption">Chat assistant</div>
                    <div className="online-status">Online</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
