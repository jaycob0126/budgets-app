import "./Form.css";

function Form({ children }) {
  return (
    <>
      <form className="form">{children}</form>
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
      <label className="form-label" style={{ ...style, fontSize, color }}>
        {children}
      </label>
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

Form.InputText = function ({ width, height, fontSize, style }) {
  return (
    <>
      <input
        type="text"
        className="form-input-text"
        style={{ ...style, width, height, fontSize }}
      />
    </>
  );
};

Form.InputNumber = function () {
  return (
    <>
      <input type="number" className="form-input-number" />
    </>
  );
};
Form.InputDate = function () {
  return (
    <>
      <input type="date" className="form-input-date" />
    </>
  );
};
Form.InputColor = function () {
  return (
    <>
      <input type="color" className="form-input-color" />
    </>
  );
};

export default Form;
