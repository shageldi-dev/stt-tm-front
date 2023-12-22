import { TypeAnimation } from "react-type-animation";
import Bg from "../../assets/home_bg.png";
import "./main.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/home.json";

const MainScreen = () => {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxHeight: "100vh",
        }}
      >
        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingLeft: "10%",
          }}
        >
          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "64px",
              fontWeight: "bold",
            }}
          >
            Welcome to Turkmen Speech to Text
          </h1>
          <p
            style={{
              color: "#FFFFFF",
              fontSize: "18px",
              fontWeight: "lighter",
              marginTop: "22px",
              width: "70%",
              textAlign: "justify",
            }}
          >
            "Welcome to Turkmen Speech to Text" refers to a platform or service
            that allows users to convert spoken Turkmen language into written
            text. Users can utilize this tool to transcribe spoken words,
            enabling a seamless and efficient method for transforming verbal
            communication in Turkmen into written form.
          </p>

          <Button
            style={{
              marginTop: "22px",
              fontSize: "16px",
              height: "40px",
              width: "200px",
              fontWeight: "bold",
            }}
            type="primary"
            onClick={() => navigate("/service")}
          >
            Start using
          </Button>
        </div>
        <div
          id="tv"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <label></label>
          <label></label>
          <div style={{ width: "50%", height: "50vh" }}>
            <Lottie
              options={defaultOptions}
              isClickToPauseDisabled={true}
              style={{
                objectFit: "contain",
                borderRadius: "100px",
              }}
            />
          </div>
          <label></label>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
