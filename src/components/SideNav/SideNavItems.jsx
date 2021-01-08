import {
  AppstoreOutlined,
  PlusCircleOutlined,
  SelectOutlined,
} from "@ant-design/icons";

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
  {
    name: "Select Movie",
    icon: <SelectOutlined />,
    route: "/select-movie",
  },
];

export default SidenavItems;
