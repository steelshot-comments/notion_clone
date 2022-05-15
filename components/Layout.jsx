import Sidebar from "../components/Sidebar";
import Topbar from "./Topbar";
import PageCover from "./PageCover";
import Page from "./Page";
import Selectable from "./Selectable";
import Table from "./Table";

function Layout({ children }) {
  return (
    <div className="content">
      <Sidebar />
      <Topbar />
      <div className="w-full overflow-y-scroll overflow-x-hidden h-[calc(100vh-45px)]">
        <PageCover />
        <Page>
            {children}
        </Page>
      </div>
    </div>
  );
}

export default Layout;
