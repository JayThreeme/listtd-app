import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Layout, Menu, Drawer, Button } from "antd";
import { logosvg } from "./assets";
import { navigationInfo } from "./constants/navigationInfo";
const { Header, Content, Footer } = Layout;
import { MenuOutlined } from "@ant-design/icons";

const items = navigationInfo.map((nav) => ({
  key: nav.path,
  label: <Link to={nav.path}>{nav.title}</Link>,
}));

const App = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <Layout>
      <Header className="w-full flex justify-between items-center border-b-2 mx-auto bg-transparent ">
        <Link to="/" className="item-center gap-2 flex-1">
          <img src={logosvg} alt="logo" className="w-16 object-contain" />
        </Link>
        <Button
          className="md:hidden"
          type="text"
          icon={<MenuOutlined />}
          onClick={toggleDrawer}
        />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          className="hidden md:flex flex-1 gap-5 bg-transparent min-w-0 justify-end"
        />
        <Drawer
          title="Menu"
          placement="left"
          onClose={toggleDrawer}
          open={drawerVisible}
          className="md:hidden"
        >
          <Menu
            mode="vertical"
            defaultSelectedKeys={["1"]}
            items={items}
            onClick={toggleDrawer} // Close the drawer when an item is clicked
          />
        </Drawer>
      </Header>
      <Content className="bg-transparent h-full w-full p-0">
        <div className="bg-gray-100">
          <Outlet />
        </div>
      </Content>
      <Footer className="text-center ">
        Linktd ©{new Date().getFullYear()} Created by J3
      </Footer>
    </Layout>
  );
};

export default App;
