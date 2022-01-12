import _ from "lodash";
import "./style.css";
import OptionIconUrl from "./imgs/optionsIcon.svg";

const tasksDisplay = () => {
  const inputItem = document.getElementById("input-item");
  const tasks = ["Study Arabic", "Study English", "Study JavaScript"];

  tasks.forEach((task, ind) => {
    let html = `
    <li class="task-${ind + 1}">
      <div class="task">
        <input type="checkbox" name="task"> ${task}
      </div>
      <img src="${OptionIconUrl}" alt="option-icon" class="option-icon">
    </li>
    `;
    inputItem.insertAdjacentHTML("afterend", html);
  });
};

tasksDisplay();
