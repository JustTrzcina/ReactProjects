import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return initialInputState;
};

const useInput2 = (checkValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  //   const [enteredValue, setEnteredValue] = useState("");
  //   const [isTouched, setIsTouched] = useState(false);

  const isEnteredValueValid = checkValue(inputState.value);
  const isInputValid = inputState.isTouched && !isEnteredValueValid;

  const onValueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };
  const onBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };
  const inputClassList = isInputValid
    ? "form-control invalid"
    : "form-control ";
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return {
    value: inputState.value,
    isEnteredValueValid,
    isInputValid,
    inputClassList,
    onValueChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useInput2;
