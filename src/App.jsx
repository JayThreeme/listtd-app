import { Link, Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";
import { logosvg } from "./assets";
import { navigationInfo } from "./constants/navigationInfo";
const { Header, Content, Footer } = Layout;

const items = navigationInfo.map((nav) => ({
  key: nav.path,
  label: <Link to={nav.path}>{nav.title}</Link>,
}));

const App = () => {
  return (
    <Layout>
      <Header className="w-full flex justify-between items-center border-b-2 mx-auto bg-transparent ">
        <Link to="/" className="flex item-center gap-2">
          <img src={logosvg} alt="logo" className="w-16 object-contain" />
        </Link>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          className="list-none flex-row gap-5 bg-transparent"
        />
      </Header>
      <Content className="bg-transparent h-full">
        <div className="p-10 h-full">
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
