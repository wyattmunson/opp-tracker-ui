import { Link } from "react-router-dom";
import Select from "react-select";

export const CountryCard = (item) => {
  return (
    <div className="card wsCountryCard">
      <div className="card-body">{item.country}</div>
    </div>
  );
};

export const LocationBlock = (props) => {
  return (
    <div className="wsLocationBlock">
      <h2>
        {props.header}{" "}
        <span className="badge rounded-pill bg-secondary">
          {props.locations.length}
        </span>
      </h2>

      <div className="row">
        {props.locations.map((item) => (
          <CountryCard country={item} />
        ))}
      </div>
    </div>
  );
};

export const StatCard = (props) => {
  return (
    <div className="card wsStatCard">
      <div className="card-body">
        <h1>{props.number}</h1>
        <h4>{props.title}</h4>
      </div>
    </div>
  );
};

export const FormInput = (props) => {
  const {
    label,
    disabled,
    value,
    changeCallback,
    inputType,
    className,
    placeholder,
    noColumns,
    autoFocus,
    onBlur,
  } = props;
  return (
    <div className={className || "mb-3 row"}>
      <label className={noColumns ? "form-label" : "col-sm-2 col-form-label"}>
        {label}
      </label>
      <div className={noColumns ? "form-label " : "col-sm-10"}>
        <input
          value={value}
          type={inputType || "text"}
          className="form-control"
          disabled={disabled}
          autoFocus={autoFocus}
          placeholder={placeholder}
          onChange={(e) => changeCallback(e.target.value)}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
};

export const FormDropdown = ({ options, setValue, value }) => {
  return (
    <div className="dropdown">
      <select
        className="form-select"
        onChange={(e) => setValue(e.target.value)}
      >
        <option value={null}>None</option>
        {options.map((i) => (
          <option selected={i === value}>{i}</option>
        ))}
      </select>
    </div>
  );
};

export const FormCheckbox = (props) => {
  const { label, value, disabled, changeCallback, className, noColumns } =
    props;

  return (
    <div className={className || "mb-3 row"}>
      <label className={noColumns ? "form-label" : "col-sm-2 col-form-label"}>
        {label}
      </label>
      <div className={noColumns ? "form-label " : "col-sm-10"}>
        <input
          // value={value}
          // type={inputType || "text"}
          type="checkbox"
          className="form-control"
          disabled={disabled}
          onChange={(e) => changeCallback(e.target.value)}
        />
      </div>
    </div>
  );
};

export const FormDate = (props) => {
  const { label } = props;
  return (
    <div className="mb-3 row">
      <label className="col-sm-2 col-form-label">{label}</label>
    </div>
  );
};

export const FormButton = ({ className, text, type, clickAction, long }) => {
  return (
    <div className={long ? "d-grid gap-2" : ""}>
      <button
        className={`btn ${className}`}
        onClick={clickAction}
        type={type ? type : "button"}
      >
        {text}
      </button>
    </div>
  );
};

export const FormTextarea = ({ label, onChange, value, rows }) => {
  return (
    <div className="lynxTextareaContainer">
      <label>{label}</label>
      <textarea
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className="lynxTextarea"
        rows={rows ? rows : "5"}
      />
    </div>
  );
};

export const FormSelect = ({ label, options, onChange, defaultValue }) => {
  return (
    <div className="lynxGFormSelectContainer">
      <label>{label}</label>
      <Select
        options={options}
        onChange={(e) => onChange(e.value)}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export const LinkButton = ({ text, link, className }) => {
  return (
    <Link className={className} to={link}>
      {text}
    </Link>
  );
};

export const DropdownIcon = ({ show }) => {
  if (!show) {
    return <i className="far fa-arrow-alt-circle-down" />;
  }
  return <i className="far fa-arrow-alt-circle-up" />;
};

export const unitOfMeasureOptions = [
  { value: "units", label: "Units (generic)" },
  { value: "Fl. OZ.", label: "Fl. OZ." },
  { value: "mL", label: "mL" },
];
