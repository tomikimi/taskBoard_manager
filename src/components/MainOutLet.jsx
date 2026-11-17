import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function MainOutLet() {
  return (
    <>
      {/* <section> */}
      <SideBar />
      <main>
        <Outlet />
      </main>
      {/* </section> */}
    </>
  );
}

export default MainOutLet;
