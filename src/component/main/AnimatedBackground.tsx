import Lottie from "react-lottie";
import animationData from "../../assets/lotties/wave.json";

interface LayoutProps {
  children: React.ReactNode;
}

const AnimatedBackground = (props: LayoutProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      style={{
        backgroundColor: `rgb(31,36,50)`,
        background: `radial-gradient(circle, rgba(31,36,50,1) 1%, rgba(6,6,6,1) 100%)`,
        height: "100vh",
      }}
    >
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
        style={{
          width: "100%",
          height: "90vh",
          opacity: "0.2",
          position: "absolute",
        }}
      />
      <div
        style={{
          width: "100%",
          position: "absolute",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
export default AnimatedBackground;
