import { AppstoreOutlined, PlusCircleOutlined } from "@ant-design/icons";

const SidenavItems = [
  {
    name: "Dashboard",
    icon: <AppstoreOutlined />,
    route: "/dashboard",
  },
  {
    name: "Add Movie(s)",
    icon: <PlusCircleOutlined />,
    route: "/add-movie",
  },
];

export default SidenavItems;
