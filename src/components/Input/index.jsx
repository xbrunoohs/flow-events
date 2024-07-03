import "./style.css";

export default function Input({ label, children, ...inputProps }) {
  return (
    <div className="inputContainer">
      <div className="inputElement">
        <input
          placeholder=" "
          name={inputProps.name}
          id={inputProps.name}
          {...inputProps}
        />
        <label className="inputFloatingLabel" htmlFor={inputProps.name}>
          {label}
        </label>
      </div>
      {children}
    </div>
  );
}
