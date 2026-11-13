import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  VscRightPanelShow,
  VscMenu,
  VscLibraryCompact,
  VscGearCompact,
  VscDeveloperTools,
} from "react-icons/vsc";
import styles from "./sideBar.module.css";

function SideBar() {
  const [sideBarView, setSideBarView] = useState(true);
  const [sideBarCollapse, setSideBarCollapse] = useState(false);

  function handleSideBarView() {
    setSideBarView((currState) => !currState);
  }

  // function to handle Collapse of SideBar on Desktop View
  function handleSideBarCollapse() {
    setSideBarCollapse((currState) => !currState);
  }
  return (
    <>
      <section
        className={
          sideBarCollapse
            ? `${styles.section_sidebar} ${styles.collapsed}`
            : styles.section_sidebar
        }
      >
        <section className={styles.section_mobile_header}>
          <div
            className={
              sideBarView
                ? styles.sidebar_container_mobile
                : styles.sidebar_container_hide
            }
          >
            <VscMenu
              className={styles.sidebar_icon_menu}
              onClick={handleSideBarView}
            />
            <NavLink className={styles.sidebar_logo}>📝TaskB</NavLink>
          </div>
          <div
            className={
              sideBarView
                ? styles.sidebar_container_hide
                : styles.sidebar_container
            }
          >
            <div className={styles.sidebar_header}>
              <NavLink className={styles.sidebar_logo}>📝TaskB</NavLink>

              <span>
                <VscRightPanelShow
                  onClick={handleSideBarView}
                  className={styles.sidebar_icon_color}
                />
              </span>
            </div>
            <div className={styles.sidebar_menu_container}>
              <section id="main-menu" className={styles.sidebar_menu}>
                <span className={styles.sidebar_menu_title}>Main Menu</span>
                <NavLink className={styles.sidebar_menu_link}>
                  <VscLibraryCompact className={styles.sidebar_icon_color} />
                  <span className={styles.menu_link_text}>Home</span>
                </NavLink>
                <NavLink className={styles.sidebar_menu_link}>
                  <VscDeveloperTools className={styles.sidebar_icon_color} />
                  <span className={styles.menu_link_text}>My Tasks</span>
                </NavLink>
              </section>
              <section id="others" className={styles.sidebar_menu}>
                <span className={styles.sidebar_menu_title}>OTHER</span>
                <NavLink className={styles.sidebar_menu_link}>
                  <VscGearCompact className={styles.sidebar_icon_color} />
                  <span className={styles.menu_link_text}>Settings</span>
                </NavLink>
              </section>
            </div>
          </div>
        </section>
        <section className={styles.section_laptop_menu}>
          <aside className={styles.sidebar_container}>
            <div className={styles.sidebar_header}>
              <NavLink className={styles.sidebar_logo}>📝TaskB</NavLink>

              <span>
                <VscRightPanelShow
                  onClick={handleSideBarCollapse}
                  style={{ color: "#b3b3b3" }}
                />
              </span>
            </div>
            <div className={styles.sidebar_menu_container}>
              <section id="main-menu" className={styles.sidebar_menu}>
                <span className={styles.sidebar_menu_title}>Main Menu</span>
                <NavLink className={styles.sidebar_menu_link}>
                  <VscLibraryCompact className={styles.sidebar_icon_color} />
                  <span className={styles.menu_link_text}>Home</span>
                </NavLink>
                <NavLink className={styles.sidebar_menu_link}>
                  <VscDeveloperTools className={styles.sidebar_icon_color} />
                  <span className={styles.menu_link_text}>My Tasks</span>
                </NavLink>
              </section>
              <section id="others" className={styles.sidebar_menu}>
                <span className={styles.sidebar_menu_title}>OTHER</span>
                <NavLink className={styles.sidebar_menu_link}>
                  <VscGearCompact className={styles.sidebar_icon_color} />
                  <span className={styles.menu_link_text}>Settings</span>
                </NavLink>
              </section>
            </div>
          </aside>
        </section>
      </section>
    </>
  );
}

export default SideBar;
