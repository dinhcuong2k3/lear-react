import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../style/Dropdown.css";

const Dropdown = (props) => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const { nation1, nation2, nation3 } = props;

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <select {...register("category", { required: true })}>
        <option value="">{nation1}</option>
        <option value="A">{nation2}</option>
        <option value="B">{nation3}</option>
      </select>
    </form>
  );
};

export default Dropdown;
