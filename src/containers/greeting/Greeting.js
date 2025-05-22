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
            padding: 20px 15px !important;
          }

          .button-greeting-div {
            display: flex !important;
            flex-direction: row !important;
            gap: 10px !important;
            align-items: center !important;
          }

          .download-link-button {
            text-decoration: none !important;
          }

          @media (max-width: 768px) {
            .greet-main {
              padding: 30px 10px !important;
            }

            .button-greeting-div {
              flex-direction: column !important;
              align-items: center !important;
              gap: 5px !important;
            }

            .button-greeting-div .button,
            .button-greeting-div .download-link-button .button {
              width: 100% !important;
              max-width: 300px !important;
              text-align: center !important;
            }
          }

          @media (max-width: 320px) {
            .greet-main {
              padding: 90px 10px !important;
            }

            .greeting-text-div {
              margin-top: 10px !important;
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
                      <Button text=" my resume" />
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
