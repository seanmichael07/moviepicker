import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

import SidenavItems from "./SideNavItems";

const { Sider } = Layout;

const SideNav = (props) => {
  return (
    <Sider width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[props.location.pathname]}
        style={{ height: "100%", paddingTop: "5%" }}
      >
        {SidenavItems.map((item) => (
          <Menu.Item key={item.route} icon={item.icon} title={item.name}>
            <NavLink to={item.route}>{item.name}</NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default SideNav;
