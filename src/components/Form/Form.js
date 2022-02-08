import "./Form.css";
import { useRef } from "react";

function Form({ children, onSubmit }) {
  Form.input = useRef();
  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        {children}
      </form>
    </>
  );
}

Form.Text = function ({ children, fontSize, color, style }) {
  return (
    <>
      <p className="form-text" style={{ ...style, fontSize, color }}>
        {children}
      </p>
    </>
  );
};
Form.Label = function ({ children, fontSize, color, style }) {
  return (
    <>
      <label className="form-label">{children}</label>
    </>
  );
};

Form.LabelText = function ({ children, fontSize, color, style }) {
  return (
    <>
      <p className="form-label-text" style={{ ...style, fontSize, color }}>
        {children}
      </p>
    </>
  );
};

Form.InputGroup = function ({ children, flexDirection, style }) {
  return (
    <>
      <div className="form-input-group" style={{ ...style, flexDirection }}>
        {children}
      </div>
    </>
  );
};

Form.InputText = function ({
  width,
  height,
  fontSize,
  style,
  value,
  onChange,
  name,
  onClear,
}) {
  return (
    <>
      <div className="form-input-container">
        <input
          type="text"
          className="form-input form-input-text"
          name={name}
          style={{ ...style, width, height, fontSize }}
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
        <span className="form-input-vertical-rule"></span>
        <svg
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => onClear(name)}
        >
          <path
            d="M7.172 14.243C6.98436 14.4306 6.72986 14.5361 6.4645 14.5361C6.19914 14.5361 5.94464 14.4306 5.757 14.243C5.56936 14.0554 5.46394 13.8009 5.46394 13.5355C5.46394 13.4041 5.48982 13.274 5.54011 13.1526C5.59039 13.0312 5.66409 12.9209 5.757 12.828L12.828 5.758C13.0155 5.57036 13.2699 5.46489 13.5351 5.4648C13.8004 5.4647 14.0549 5.56999 14.2425 5.7575C14.4301 5.94501 14.5356 6.19938 14.5357 6.46465C14.5358 6.72992 14.4305 6.98436 14.243 7.172L7.172 14.242V14.243Z"
            fill="black"
          />
          <path
            d="M5.757 7.172C5.66409 7.07909 5.59039 6.96879 5.54011 6.8474C5.48982 6.726 5.46394 6.59589 5.46394 6.4645C5.46394 6.3331 5.48982 6.203 5.54011 6.0816C5.59039 5.96021 5.66409 5.84991 5.757 5.757C5.84991 5.66409 5.96021 5.59039 6.0816 5.54011C6.203 5.48982 6.3331 5.46394 6.4645 5.46394C6.59589 5.46394 6.726 5.48982 6.8474 5.54011C6.96879 5.59039 7.07909 5.66409 7.172 5.757L14.242 12.828C14.4296 13.0155 14.5351 13.2699 14.5352 13.5351C14.5353 13.8004 14.43 14.0549 14.2425 14.2425C14.055 14.4301 13.8006 14.5356 13.5354 14.5357C13.2701 14.5358 13.0156 14.4305 12.828 14.243L5.758 7.172H5.757Z"
            fill="black"
          />
        </svg>
      </div>
    </>
  );
};

Form.InputNumber = function ({
  width,
  height,
  fontSize,
  style,
  min,
  max,
  value,
  name,
  onChange,
  onClear,
  autoFocus,
}) {
  return (
    <div className="form-input-container">
      <input
        inputMode="numeric"
        type="number"
        className="form-input form-input-number"
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        autoComplete="off"
        style={{ ...style, width, height, fontSize }}
      />

      <span className="form-input-vertical-rule"></span>

      <svg
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => onClear(name)}
      >
        <path
          d="M7.172 14.243C6.98436 14.4306 6.72986 14.5361 6.4645 14.5361C6.19914 14.5361 5.94464 14.4306 5.757 14.243C5.56936 14.0554 5.46394 13.8009 5.46394 13.5355C5.46394 13.4041 5.48982 13.274 5.54011 13.1526C5.59039 13.0312 5.66409 12.9209 5.757 12.828L12.828 5.758C13.0155 5.57036 13.2699 5.46489 13.5351 5.4648C13.8004 5.4647 14.0549 5.56999 14.2425 5.7575C14.4301 5.94501 14.5356 6.19938 14.5357 6.46465C14.5358 6.72992 14.4305 6.98436 14.243 7.172L7.172 14.242V14.243Z"
          fill="black"
        />
        <path
          d="M5.757 7.172C5.66409 7.07909 5.59039 6.96879 5.54011 6.8474C5.48982 6.726 5.46394 6.59589 5.46394 6.4645C5.46394 6.3331 5.48982 6.203 5.54011 6.0816C5.59039 5.96021 5.66409 5.84991 5.757 5.757C5.84991 5.66409 5.96021 5.59039 6.0816 5.54011C6.203 5.48982 6.3331 5.46394 6.4645 5.46394C6.59589 5.46394 6.726 5.48982 6.8474 5.54011C6.96879 5.59039 7.07909 5.66409 7.172 5.757L14.242 12.828C14.4296 13.0155 14.5351 13.2699 14.5352 13.5351C14.5353 13.8004 14.43 14.0549 14.2425 14.2425C14.055 14.4301 13.8006 14.5356 13.5354 14.5357C13.2701 14.5358 13.0156 14.4305 12.828 14.243L5.758 7.172H5.757Z"
          fill="black"
        />
      </svg>
    </div>
  );
};
Form.InputDate = function (value, name, onChange) {
  return (
    <>
      <input
        type="date"
        className="form-input form-input-date"
        value={value}
        onChange={onChange}
        name={name}
      />
    </>
  );
};
Form.InputColor = function (value, name, onChange) {
  return (
    <>
      <input
        type="color"
        className="form-input form-input-color"
        value={value}
        onChange={onChange}
        name={name}
      />
    </>
  );
};

export default Form;
