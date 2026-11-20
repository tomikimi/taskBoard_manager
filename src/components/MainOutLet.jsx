import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

function MainOutLet() {
  return (
    <>
      {/* <section> */}
      <div className="main_container">
        <SideBar />
        <div style={{ overflowY: "auto", overflowX: "auto", width: "100%" }}>
          <main>
            <Outlet />
          </main>
        </div>
      </div>

      {/* </section> */}
    </>
  );
}

export default MainOutLet;
