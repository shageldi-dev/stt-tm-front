import AnimatedBackground from "../main/AnimatedBackground";
import AnimatedTextarea from "./AnimatedTextarea";
import { TypeAnimation } from "react-type-animation";
import RecordButton from "./RecordButton";
import ActionContainer from "./ActionContainer";
import FileUploader from "./FileUploader";
import AppDrawer from "./AppDrawer";
import { Button } from "antd";
import { useState } from "react";
import {
  FilePdfOutlined,
  FileTextOutlined,
  FileWordOutlined,
} from "@ant-design/icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "./MainScreen";

const Home = () => {
  const [text, setText] = useState("");
  const downloadTxtFile = (value: string, extension: string) => {
    try {
      const element = document.createElement("a");
      const file = new Blob([value], {
        type: "text/plain",
      });
      element.href = URL.createObjectURL(file);
      element.download = "speech." + extension;
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div style={{ width: "100%" }}>
      <AnimatedBackground>
        <AppDrawer />
        <div
          style={{ width: "100%", minHeight: "100vh", position: "absolute" }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainScreen />} />
              <Route
                path="/service"
                element={
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
                      <AnimatedTextarea
                        onChange={(e) => setText(e)}
                        value={text}
                      />
                      <div
                        style={{
                          width: "62%",
                          marginTop: "12px",
                          display: "flex",
                          justifyContent: "flex-end",
                          gap: "12px",
                        }}
                      >
                        <Button
                          icon={<FileTextOutlined />}
                          onClick={() => downloadTxtFile(text, "txt")}
                        >
                          Download as text
                        </Button>
                        <Button
                          icon={<FilePdfOutlined />}
                          onClick={() => downloadTxtFile(text, "pdf")}
                        >
                          Download as pdf
                        </Button>
                        <Button
                          icon={<FileWordOutlined />}
                          onClick={() => downloadTxtFile(text, "docx")}
                        >
                          Download as word
                        </Button>
                      </div>
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
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </AnimatedBackground>
    </div>
  );
};
export default Home;
