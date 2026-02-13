import { useEffect, useState } from "react";
import "./CenterCard.css";
import Celebrations from "../celebrations";

export default function CenterCard() {
  const text =
    " I am very much happy to have both of you in my life. Today is day of love so I would dedicate this to the people I love the most, so we are going for a trip next month I need approval before that, I would proudly say that I got the best mother and sister , Sorry for not being there , will try to come there soon , So Happy Valentines day Kutty Ma 💖 and Paithiyam 💕. Trip Poroma illaya sollunga";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index]);

  const [position, setPosition] = useState({ top: "0%", left: "0%" });

  const moveButton = () => {
    const randomTop = Math.random() * 80; // 0 - 80%
    const randomLeft = Math.random() * 80; // 0 - 80%

    setPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  return (
    <div className="card">
      <p>
        {isSuccess
          ? "Hurray Next Month Trip Porom 🎉"
          : "Hi Dhanalakshmi & Vanisri"}
      </p>
      <div>
        {isSuccess ? (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "50px",
            }}
          >
            <div style={{ position: "absolute", top: "-10px", right: "15%" }}>
              {" "}
              <Celebrations />
            </div>
            <p className="description">
              {
                "Edho ennala mudichadhu 😌, Seri call pannunga detailed ah pesuvom"
              }
            </p>
          </div>
        ) : (
          <p className="description">{displayText}</p>
        )}
      </div>
      <div>
        {displayText.trim().length === text.trim().length && !isSuccess ? (
          <>
            <button className="yes_button" onClick={() => setIsSuccess(true)}>
              Yes
            </button>
            <button
              onMouseEnter={moveButton}
              style={
                position.top !== "0%"
                  ? {
                      position: "absolute",
                      top: position.top,
                      left: position.left,
                    }
                  : undefined
              }
              className="no_button"
            >
              No
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
