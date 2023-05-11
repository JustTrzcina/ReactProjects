import { useRef, useState } from "react";

import styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isPostalCodeValid = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValid, setFormInputValid] = useState({
    name: true,
    street: true,
    city: true,
    postaCode: true,
  });

  const inputNameRef = useRef();
  const inputStreetRef = useRef();
  const inputPostalCodeRef = useRef();
  const inputCityRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = inputNameRef.current.value;
    const enteredStreet = inputStreetRef.current.value;
    const enteredPostalCode = inputPostalCodeRef.current.value;
    const enteredCity = inputCityRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isPostalCodeValid(enteredPostalCode);

    setFormInputValid({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;
    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      city: enteredCity,
      street: enteredStreet,
      postalCode: enteredPostalCode,
    });
  };

  return (
    <form onSubmit={confirmHandler} className={styles.form}>
      <div
        className={`${styles.control} ${
          formInputValid.name ? "" : styles.invalid
        }`}
      >
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={inputNameRef} />
        {!formInputValid.name && <p>Field cannot be empty</p>}
      </div>
      <div
        className={`${styles.control} ${
          formInputValid.street ? "" : styles.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={inputStreetRef} />
        {!formInputValid.street && <p>Field cannot be empty</p>}
      </div>
      <div
        className={`${styles.control} ${
          formInputValid.postaCode ? "" : styles.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={inputPostalCodeRef} />
        {!formInputValid.postaCode && <p>Field has to be 5 characters</p>}
      </div>
      <div
        className={`${styles.control} ${
          formInputValid.city ? "" : styles.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={inputCityRef} />
        {!formInputValid.city && <p>Field cannot be empty</p>}
      </div>
      <div className={styles.actions}>
        <button className={styles.submit}>Confirm</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Checkout;
