import { ConfigProvider, theme } from "antd";
import Home from "./component/home/Home";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div style={{ maxHeight: "100vh", overflow: "hidden" }}>
        <Home />
      </div>
    </ConfigProvider>
  );
}

export default App;
