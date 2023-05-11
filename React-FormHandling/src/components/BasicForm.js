import useInput2 from "../hooks/use-input-solo";

const BasicForm = (props) => {
  const {
    value: enteredNameValue,
    isEnteredValueValid: isEnteredNameValid,
    inputClassList: nameInputClassList,
    isInputValid: isNameValid,
    onBlurHandler: onBlurNameHandler,
    onValueChangeHandler: onNameChangeHandler,
    reset: nameResetHandler,
  } = useInput2((value) => value.trim() !== "");

  const {
    value: enteredLastNameValue,
    isEnteredValueValid: isEnteredLastNameValid,
    inputClassList: lastNameInputClassList,
    isInputValid: isLastNameValid,
    onBlurHandler: onBlurLastNameHandler,
    onValueChangeHandler: onLastNameChangeHandler,
    reset: lastNameResetHandler,
  } = useInput2((value) => value.trim() !== "");

  const {
    value: enteredEmailValue,
    isEnteredValueValid: isEnteredEmailValid,
    inputClassList: emailInputClassList,
    isInputValid: isEmailValid,
    onBlurHandler: onBlurEmailHandler,
    onValueChangeHandler: onEmailChangeHandler,
    reset: emailResetHandler,
  } = useInput2((value) => value.includes("@"));

  let isFormValid = false;

  if (isEnteredNameValid && isEnteredLastNameValid && isEnteredEmailValid) {
    isFormValid = true;
  }

  const onSubmitHandler = (event) => {
    if (!isFormValid) {
      return;
    }
    event.preventDefault();
    nameResetHandler();
    lastNameResetHandler();
    emailResetHandler();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClassList}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredNameValue}
            onChange={onNameChangeHandler}
            onBlur={onBlurNameHandler}
          />
          {isNameValid && <p className="error-text">Field cannot be empty.</p>}
        </div>
        <div className={lastNameInputClassList}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastNameValue}
            onBlur={onBlurLastNameHandler}
            onChange={onLastNameChangeHandler}
          />
          {isLastNameValid && (
            <p className="error-text">Field cannot be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClassList}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={onEmailChangeHandler}
          onBlur={onBlurEmailHandler}
          value={enteredEmailValue}
        />
        {isEmailValid && (
          <p className="error-text">Email doesn't contain @ sign.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
