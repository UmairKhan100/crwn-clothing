import "./form-input.scss";

const FormInput = ({ label, ...otherProps }) => (
  <div className="form-input-group">
    <input className="form-input-field" {...otherProps} />
    <label
      className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}
    >
      {label}
    </label>
  </div>
);

export default FormInput;
