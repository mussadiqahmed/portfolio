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
          .greet-main {
            padding: 20px 15px;
          }

          .button-greeting-div {
            display: flex;
            flex-direction: row;
            gap: 10px;
            align-items: center;
          }

          .download-link-button {
            text-decoration: none;
          }

          @media (max-width: 768px) {
            .greet-main {
              padding: 30px 10px;
            }

            .button-greeting-div {
              flex-direction: column;
              align-items: center;
              gap: 5px;
            }

            .button-greeting-div .button,
            .button-greeting-div .download-link-button .button {
              width: 100%;
              max-width: 300px;
              text-align: center;
            }
          }

          @media (max-width: 320px) {
            .greet-main {
              padding: 90px 10px;
            }

            .greeting-text-div {
              margin-top: 10px;
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
                />
              )}
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}
