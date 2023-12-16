import { Row } from "antd";
import AnimatedBackground from "../main/AnimatedBackground";
import AnimatedTextarea from "./AnimatedTextarea";
import { TypeAnimation } from "react-type-animation";
import RecordButton from "./RecordButton";
import ActionContainer from "./ActionContainer";
import FileUploader from "./FileUploader";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <AnimatedBackground>
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
              height: "100vh",
            }}
          >
            <div>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "We are Speech",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "We are AI",
                  1000,
                  "We are Machine Learning",
                  1000,
                  "We are Speech To Text",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "4em",
                  display: "inline-block",
                  color: "white",
                  fontWeight: "900",
                  fontFamily: "appbold, Helvetica, Arial, sans-serif",
                  letterSpacing: "normal",
                  lineHeight: "120%",
                }}
                repeat={Infinity}
              />
            </div>
            <AnimatedTextarea />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              width: "30%",
              height: "100vh",
            }}
          >
            <ActionContainer title="Speech from realtime record">
              <RecordButton />
            </ActionContainer>
            <ActionContainer title="Speech from audio file">
              <FileUploader />
            </ActionContainer>
          </div>
        </div>
      </AnimatedBackground>
    </div>
  );
};
export default Home;
