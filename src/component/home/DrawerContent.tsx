import React, { useState } from "react";
import { GlobalOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Turkmen",
    key: "tm",
    icon: <GlobalOutlined />,
  },
  {
    label: "Russian",
    key: "ru",
    icon: <GlobalOutlined />,
  },
  {
    label: "English",
    key: "en",
    icon: <GlobalOutlined />,
  },
];

const DrawerContent: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      style={{ background: "transparent" }}
      onClick={onClick}
      selectedKeys={[current]}
      mode="vertical"
      items={items}
    />
  );
};

export default DrawerContent;
