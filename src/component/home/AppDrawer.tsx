import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { LoginOutlined, MenuOutlined } from "@ant-design/icons";
import SelectLanguage from "./SelectLanguage";
import DrawerContent from "./DrawerContent";

const AppDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          padding: "22px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          width: "95%",
          zIndex: "2",
        }}
      >
        <Button
          icon={<MenuOutlined />}
          type="primary"
          onClick={showDrawer}
        ></Button>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Button icon={<LoginOutlined />}>Login</Button>
          <SelectLanguage />
        </div>
      </div>
      <Drawer
        title="Menu"
        placement="left"
        style={{
          backgroundColor: `rgb(31,36,50)`,
          background: `radial-gradient(circle, rgba(31,36,50,1) 1%, rgba(6,6,6,1) 100%)`,
          height: "100vh",
          color: "white",
        }}
        onClose={onClose}
        open={open}
      >
        <DrawerContent />
      </Drawer>
    </div>
  );
};

export default AppDrawer;
