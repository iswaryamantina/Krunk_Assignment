import React from "react";
import Header from "../Components/Header/Header";
import Message from "../Components/Message/Message";
import Option from "../Components/Option/Option";
import { AiOutlinePaperClip } from "react-icons/ai";
import bag from "../assets/bag.png";
import "./Home.css";

function Home() {
    const options = ["Clutch", "Fabric lining", "Baggit", "Multi"];
    const filters = [
        "Strap - Long X",
        "Colour X",
        "Size X",
        "Brand X",
        "Material X",
    ];
    return (
        <div>
            <Header />
            <Message isSender={true} pic={null} />
            <Message isSender={false} pic={null} />
            <div className="options-heading">Popular tags for handbag</div>
            <div className="options-container">
                {options.map((option) => (
                    <Option option={option} />
                ))}
            </div>
            <Message isSender={true} pic={bag} />
            <div className="options-heading">Select filters</div>
            <div className="filters-container">
                {filters.map((filter) => (
                    <Option option={filter} />
                ))}
            </div>
            <div className="footer-message">
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Type a message"
                        style={{
                            border: "none",
                            outline: "none",
                        }}
                    />
                    <div className="icon-container">
                        <AiOutlinePaperClip
                            color="gray"
                            size={36}
                            cursor="pointer"
                        />
                    </div>
                </div>
                <div className="left-icon">{">"}</div>
            </div>
        </div>
    );
}

export default Home;
