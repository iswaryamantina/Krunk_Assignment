import React from "react";
import "./Message.css";

function Message({ isSender, pic }) {
    const senderMessage =
        "Hi Sam! I am your personal shopping assistant assistant, how can i help you today?";
    const receiverMessage = "I am looking for a hand bag, with long strap.";
    return (
        <div
            className="message-container"
            style={{
                alignItems: isSender ? "flex-start" : "flex-end",
            }}
        >
            {pic ? (
                <div>
                    <div className="message">
                        <div
                            className="message-content"
                            style={{
                                justifyContent: "flex-start",
                                flexDirection: "column",
                                backgroundColor: "rgb(217, 232, 239)",
                            }}
                        >
                            <div className="image-content">
                                <div className="image">
                                    <img src={pic} alt="bag" width="70%" />
                                </div>

                                <div
                                    className="image-captions"
                                    style={{
                                        width: "100%",
                                    }}
                                >
                                    <div
                                        className="image-heading"
                                        style={{ fontWeight: "600" }}
                                    >
                                        Bags on Timpu
                                    </div>
                                    <div
                                        style={{
                                            color: "grey",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {"1123 products >"}
                                    </div>
                                </div>
                            </div>
                            <div className="image-message">
                                Or set filter and help us choose the best bag
                                for you.
                            </div>
                        </div>
                        <div
                            className="time"
                            style={{
                                justifyContent: "flex-start",
                                marginLeft: "8%",
                            }}
                        >
                            4:48 PM
                        </div>
                    </div>
                </div>
            ) : (
                <div className="normal-message">
                    {isSender ? (
                        <div className="message">
                            <div
                                className="message-content"
                                style={{
                                    justifyContent: "flex-start",
                                    backgroundColor: isSender
                                        ? "rgb(217, 232, 239)"
                                        : "rgb(201, 238, 201)",
                                }}
                            >
                                {senderMessage}
                            </div>
                            <div
                                className="time"
                                style={{
                                    justifyContent: "flex-start",
                                    marginLeft: "8%",
                                }}
                            >
                                4:45 PM
                            </div>
                        </div>
                    ) : (
                        <div className="message">
                            <div
                                className="message-content"
                                style={{
                                    justifyContent: "flex-end",
                                    backgroundColor: isSender
                                        ? "rgb(217, 232, 239)"
                                        : "rgb(201, 238, 201)",
                                }}
                            >
                                {receiverMessage}
                            </div>
                            <div
                                className="time"
                                style={{
                                    justifyContent: "flex-end",
                                }}
                            >
                                4:46 PM
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Message;
