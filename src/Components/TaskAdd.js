import { useNavigate } from "react-router-dom";
import { useUserContext } from "../ContextStore";
import { useState } from "react";

export default function TaskAdd() {
  const navigate = useNavigate();
  const { memberList, setTaskList } = useUserContext();
  const [form, setForm] = useState({
    title: "",
    details: "",
    member: "",
  });

  const onChangeFormValue = (e) => {
    console.log(e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formIsValid = form.title.trim().length > 0;
  const MemberSelected = form.member.trim().length > 0;

  const handleSubmitClick = () => {
    if (formIsValid && MemberSelected) {
      setTaskList(form);
      navigate(-1);
    }
  };

  const handleCancelClick = () => navigate(-1);

  return (
    <div className="task-add">
      <p className="dashboard-bold-text">Add task</p>
      <br />
      <br />
      <textarea
        className="task-add-name"
        placeholder="Enter Task Name"
        value={form.title}
        name="title"
        onChange={onChangeFormValue}
      ></textarea>
      {!formIsValid && (<p className="home-error-alert">*Task Name is required</p>)}
      <br />
      <br />
      <textarea
        className="task-add-detail"
        placeholder="Enter Task Details"
        value={form.details}
        name="details"
        onChange={onChangeFormValue}
      ></textarea>
      <br />
      <br />
      <br />
      <div className="task-add-row">
        <p className="dashboard-bold-text">Assigned to: </p>
        <select className="dropdown" name="member" value={form.member} onChange={onChangeFormValue}>
          <option selected hidden>
            Please Select a value
          </option>
          {memberList.map((item, key) => (
            <option className="dropdown"
              key={key}
              value={item.member}
              name="member"
            >
              {item.member}
            </option>
          ))}
        </select>
      </div>
      {!MemberSelected && (<p className="home-error-alert">*Please select a Member</p>)}
      <br />
      <br />
      <div className="task-add-btn">
        <button className="tasks-button" onClick={handleCancelClick}>
          Cancel
        </button>
        <button className="tasks-button" onClick={handleSubmitClick}>
          Submit
        </button>
      </div>
    </div>
  );
}
