import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <>
      <style>
        {`
          /* Minimal CSS for button layout fix, top content visibility, and padding */
          .greet-main {
            padding: 20px 15px; /* Left/right padding and top space for desktop */
          }

          .button-greeting-div {
            display: flex;
            flex-direction: row; /* Side-by-side on larger screens */
            gap: 10px; /* Space between buttons */
            align-items: center;
          }

          /* Style for the download link to match Button component */
          .download-link-button {
            text-decoration: none;
          }

          /* Mobile screens */
          @media (max-width: 768px) {
            .greet-main {
              padding: 30px 10px; /* Left/right padding, top padding for mobile */
            }

            .button-greeting-div {
              flex-direction: column; /* Stack buttons vertically */
              align-items: center; /* Center buttons on mobile */
              gap: 5px; /* Space between buttons */
            }

            .button-greeting-div .button,
            .button-greeting-div .download-link-button .button {
              width: 100%; /* Full-width buttons on mobile */
              max-width: 300px; /* Limit max width */
              text-align: center;
            }
          }

          /* Extra small screens (e.g., 320px) */
          @media (max-width: 320px) {
            .greet-main {
              padding: 90px 10px; /* More top padding to prevent content hiding */
            }
            .greeting-text-div {
              margin-top: 10px; /* Extra margin to counteract Fade animation */
            }
          }
        `}
      </style>
      <Fade bottom duration={1000} distance="40px">
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <div className="greeting-text-div">
              <div>
                <h1
                  className={isDark ? "dark-mode greeting-text" : "greeting-text"}
                >
                  {greeting.title}{" "}
                  <span className="wave-emoji">{emoji("👋")}</span>
                </h1>
                <p
                  className={
                    isDark
                      ? "dark-mode greeting-text-p"
                      : "greeting-text-p subTitle"
                  }
                >
                  {greeting.subTitle}
                </p>
                <div id="resume" className="empty-div"></div>
                <SocialMedia />
                <div className="button-greeting-div">
                  <Button text="Contact me" href="#contact" />
                  {greeting.resumeLink && (
                    <a
                      href={require("./resume.pdf")}
                      download="Resume.pdf"
                      className="download-link-button"
                    >
                      <Button text="Download my resume" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="greeting-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={landingPerson} />
              ) : (
                <img
                  alt="man sitting on table"
                  src={require("../../assets/images/manOnTable.svg")}
                ></img>
              )}
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}
