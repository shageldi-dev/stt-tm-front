import { Card, Typography } from "antd";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const ActionContainer = (props: LayoutProps) => {
  return (
    <Card
      style={{
        backgroundColor: "transparent",
        width: "70%",
        marginTop: "12px",
      }}
    >
      <Typography style={{ color: "white", fontWeight: "bold" }}>
        {props.title}
      </Typography>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.children}
      </div>
    </Card>
  );
};

export default ActionContainer;
