import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import "../../style/Form.css";
import anh1 from "../../assets/popup.webp";
Form.propTypes = {};

function Form(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(watch("example"));
  return (
    <div className="form__popup">
      <div className="picture__popup">
        <img src={anh1}></img>
      </div>
      <div className="frame__form">
        <h2>NEWSLETTER</h2>
        <p>
          Get 15% off your first purchaxse! Plus, be the first to know about
          sales, new product launches and exclusive offers!
        </p>
        <h3>Product Preferences:</h3>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="gender">
            <div className="group-form">
              <input id="input1" type="radio" {...register("exmple")}></input>
              <label htmlFor="input1">Men's</label>
            </div>
            <div className="group-form">
              <input id="input2" type="radio" {...register("exmple")}></input>
              <label htmlFor="input2">Women's</label>
            </div>
            <div className="group-form">
              <input id="input3" type="radio" {...register("exmple")}></input>
              <label htmlFor="input3">I Want It All</label>
            </div>
          </div>

          <div className="form-bnt">
            <div className="group-email">
              <input
                placeholder="YOURS EMAIL ADDRESS"
                type="email"
                {...register("exampleRequired", { required: true })}
              ></input>
              {errors.exampleRequired && <p>This fiels is required</p>}
            </div>
            <button className="group-submit" type="submit">
              S'INSRIRE
            </button>
          </div>

          <div className="notification">
            <div className="check">
              <input type="checkbox"></input>
            </div>
            <div className="title__notification">
              <p>DON'T SHOW THIS POPUP AGAIN</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
