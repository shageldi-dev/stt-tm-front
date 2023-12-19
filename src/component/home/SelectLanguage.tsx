import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";

const items: MenuProps["items"] = [
  {
    label: <a>Turkmen</a>,
    key: "0",
  },
  {
    label: <a>Russian</a>,
    key: "1",
  },
  {
    label: <a>English</a>,
    key: "2",
  },
];

const SelectLanguage: React.FC = () => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Button icon={<DownOutlined />}>Select language</Button>
    </a>
  </Dropdown>
);

export default SelectLanguage;
