"use client";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useField } from "informed";
import { useEffect } from "react";
import styles from "./textInput.css";

const CustomInput = (props) => {
  const { fieldState, fieldApi, render, ref, userProps } = useField(props);

  const { value, error } = fieldState;
  const showError = !!error;

  const { setValue, setTouched } = fieldApi;

  const { floating = true, label, autoFocus, id, ...rest } = userProps;

  useEffect(() => {
    if (autoFocus) ref && ref.current.focus();
  }, [autoFocus]);

  const errorShowing = showError ? styles.error_feild : "";
  const input = (
    <Form.Control
      {...rest}
      id={id}
      ref={ref}
      value={!value && value !== 0 ? "" : value}
      onChange={(e) => {
        setValue(e.target.value, e);
      }}
      onBlur={(e) => {
        setTouched(true, e);
      }}
    />
  );

  return render(
    <Form.Group className={`${"text_input"} ${errorShowing}`}>
      {floating ? (
        <FloatingLabel label={label} className="form-label">
          {input}
        </FloatingLabel>
      ) : (
        <>
          {label && <Form.Label>{label}</Form.Label>}
          {input}
        </>
      )}
      {showError && (
        <Form.Control.Feedback
          style={{ color: "red", margin: "1px", display: "block" }}
          type={showError ? "invalid" : "valid"}
        >
          {showError && error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default CustomInput;
