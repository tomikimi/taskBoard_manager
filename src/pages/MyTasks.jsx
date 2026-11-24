import Greeting from "../components/Greeting";
import { VscEditCode, VscAdd } from "react-icons/vsc";
import styles from "./myTasks.module.css";
import style1 from "./Dashboard.module.css";
import ProjectContainer from "../components/ProjectContainer";
import ModalBox from "../components/ModalBox";
import { useState } from "react";
const taskBoardData = {
  myTask: [
    {
      id: 1,
      taskName: "Finalize HomePage WireFrame",
      dueDate: "Today - 1.00pm",
    },
    {
      id: 2,
      taskName: "Review Test Code Result",
      dueDate: "November 25 - 1.00pm",
    },
    {
      id: 3,
      taskName: "Design Relationship Diagram for Database",
      dueDate: "November 27, 2026 - 3.00pm",
    },
    {
      id: 4,
      taskName: "Sketch for E-Commerce FrontEnd",
      dueDate: "November 30, 2026 - 3.00pm",
    },
    {
      id: 5,
      taskName: "API Development for E-Commerce App.",
      dueDate: "December 10, 2026 - 3.00pm",
    },
    {
      id: 6,
      taskName: "API Testing Development for E-Commerce App.",
      dueDate: "December 18, 2026 - 3.00pm",
    },
  ],
};
function MyTasks() {
  const [modal, setModal] = useState(false);

  function handleModalView() {
    setModal((currState) => !currState);
  }
  return (
    <>
      <ModalBox handleModalView={handleModalView} modalState={modal}>
        <div className={styles.newTaskContainer}>
          <h2 className={styles.newTaskHeader}>Lets Create A Task📝</h2>
          <span className={styles.horizontalRule}></span>
          <div className={styles.formControlContainer}>
            <div className="input_container mr-s-6">
              <label
                name="taskName"
                htmlFor="taskName"
                className="input_container_label"
              >
                Task Name
              </label>
              <input
                type="text"
                name="taskName"
                id="taskName"
                className="input_container_controller"
              />
            </div>
            <div className="input_container mr-s-6">
              <label
                name="taskDescription"
                htmlFor="description"
                className="input_container_label"
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                id="taskDescription"
                className="input_container_controller"
              />
            </div>
            <div className="input_container mr-s-6">
              <label
                name="taskCategory"
                htmlFor="category"
                className="input_container_label"
              >
                Category
              </label>
              <select
                name="category"
                id="taskCategory"
                className="input_container_controller"
              >
                <option value="select">--select--</option>
              </select>
            </div>
            <div className="input_container mr-s-6">
              <label
                name="taskStatus"
                htmlFor="status"
                className="input_container_label"
              >
                Status
              </label>
              <select
                name="status"
                id="taskStatus"
                className="input_container_controller"
              >
                <option value="select">--select--</option>
              </select>
            </div>
            <div className="input_container mr-s-6">
              <label
                name="taskStartDate"
                htmlFor="startDate"
                className="input_container_label"
              >
                Start-Date
              </label>
              <input
                type="date"
                name="startDate"
                id="taskStartDate"
                className="input_container_controller"
              />
            </div>
            <div className="input_container mr-s-6">
              <label
                name="taskDueDate"
                htmlFor="dueDate"
                className="input_container_label"
              >
                Due-Date
              </label>
              <input
                type="date"
                name="dueDate"
                id="taskDueDate"
                className="input_container_controller"
              />
            </div>
          </div>
          <div className="button_action_container">
            <button type="submit" className={`btn ${styles.btn_add_task}`}>
              Create Task
            </button>
            <button className={`btn ${styles.btn_cancel}`}>Cancel</button>
          </div>
        </div>
      </ModalBox>
      <div className={styles.section_tasks}>
        <Greeting />
        {/* MY TASKS SECTION */}
        {/* {
          <ProjectContainer
            projects={taskBoardData}
            tab_accent={styles.project_tab_accent}
            taskIcon={<VscEditCode />}
          />
        } */}
        <div className={style1.dashboard_project_container}>
          <div className={styles.myTask_header_container}>
            <div className={style1.dashboard_project_header}>
              <h2>My Tasks</h2>
              <p>Monday, November 23, 2026</p>
            </div>

            <button
              className={`btn btn-blue ${styles.btn_taskStyle}`}
              onClick={handleModalView}
            >
              <VscAdd /> Add Task
            </button>
          </div>

          <ProjectContainer
            projects={taskBoardData.myTask}
            tab_accent={style1.project_tab_accent}
            styleOverflow={style1.dashboard_today_project_container_overflow}
            taskIcon={<VscEditCode />}
          />
        </div>
      </div>
    </>
  );
}

export default MyTasks;
