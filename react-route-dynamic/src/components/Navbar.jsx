import React from "react";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import "antd/dist/antd.css";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";
const { Search } = Input;

export const Navbar = () => {
  return (
    <div className="flexbox">
      <div>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthenewswheel.com%2Fwp-content%2Fuploads%2F2016%2F09%2FZoomcar-logo.jpg&f=1&nofb=1"
          alt=""
        />
      </div>
      <div>
        <Search style={{ width:'500px' }}
          placeholder="input search text"
          enterButton="Search"
          size="large"
          //   suffix={suffix}
          //   onSearch={onSearch}
        />
      </div>
      <div className="div3">
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/products">Products</Link>
      </div>
    </div>
  );
};
