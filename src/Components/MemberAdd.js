import { useNavigate } from "react-router-dom";
import { useUserContext } from "../ContextStore";
import { useState } from "react";

export default function MemberAdd() {
  const navigate = useNavigate();
  const { setMemberList } = useUserContext();

  const [form, setForm] = useState({
    member: "",
  });

  const onChangeFormValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formIsValid = form.member.trim().length > 0;

  const handleSubmitClick = () => {
    if (formIsValid) {
      setMemberList(form);
      navigate(-1);
    }
  };

  const handleCancelClick = () => navigate(-1);

  return (
    <div className="task-add">
      <p className="dashboard-bold-text">Add member</p>
      <br />
      <br />
      <textarea
        className="task-add-name"
        placeholder="Enter Member Name"
        value={form.member}
        name="member"
        onChange={onChangeFormValue}
      ></textarea>
      <br />
      {!formIsValid && (
        <p className="home-error-alert">*Member Name is required</p>
      )}
      <br />
      <br />

      <br />
      <div className="task-add-btn">
        <button className="tasks-button" onClick={handleCancelClick}>Cancel</button>
        <button className="tasks-button" onClick={handleSubmitClick}>Submit</button>
      </div>
    </div>
  )
}
