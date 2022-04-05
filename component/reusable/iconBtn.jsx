import React, { useState } from "react";

const IconBtn = ({ icon, text, onClick }) => {
    const [hover, setHover] = useState(false);

    const styles = {
        container: {
            display: "flex",
            height: "fit-content",
            padding: "8px",
            gap: "8px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: hover ? "0px 2px 4px rgba(0, 0, 0, 0.08)" : "none"
        },
        text: {
            margin: 0,
            width: "fit-content",
            height: "fit-content",
        }
    };

    return (
        <div
            style={styles.container}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {icon}
            {text && <p style={styles.text}>{text}</p>}
        </div>
    );
}

export default IconBtn;