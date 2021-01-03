import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import SidenavItems from "./SideNavItems";

const { Sider } = Layout;

const SideNav = (props) => {
  return (
    <Sider className="site-layout-background" width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["Home"]}
        style={{ height: "100%", paddingTop: "5%" }}
      >
        {SidenavItems.map((item) => (
          <Menu.Item key={item.name} icon={item.icon} title={item.name}>
            <Link to={item.route}>{item.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default SideNav;
