import React, {Suspense, useContext} from "react";
import "./twitter.scss";
import Loading from "../loading/Loading";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import {twitterDetails} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const renderLoader = () => <Loading />;
const cantDisplayError =
  "<div className='centerContent'></div>";

function timeOut() {

}
var widthScreen = window.screen.width;

export default function Twitter() {
  const {isDark} = useContext(StyleContext);

  if (!twitterDetails.display) {
    return null;
  }
  if (!twitterDetails.userName) {
    console.error("Twitter username for twitter section is missing");
  }
  if (twitterDetails.userName) {
    return (
      // <Suspense fallback={renderLoader()}>
        <div className="tw-main-div" id="twitter">
          <div className="centerContent">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName={twitterDetails.userName}
              options={{height: 400, width: {widthScreen}}}
             
              autoHeight={false}
              borderColor="#fff"
              key={isDark ? "1" : "2"}
              theme={isDark ? "dark" : "light"}
              noFooter={true}
              onload={timeOut()}
            />
          </div>
        </div>
  
    );
  } else {
    return null;
  }
}
