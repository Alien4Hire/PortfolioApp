import React, { useState, useEffect } from "react";

// reactstrap components
import { Button } from "reactstrap";

// core components
import DangerNavbar from "components/Navbars/DangerNavbar.js";
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss';

function Payment() {
    // const { data } = this.props.location;
  // console.log(data.location.data);
  // eslint-disable-next-line no-unused-vars
  const [planSelector, setPlanSelector] = useState('');
  //inputs
  const [cvc, setCvc] = useState('');
  const [expiry, setExpiry] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [focus, setFocus] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [myName, setMyName] = useState(firstName + lastName)
  const [zip, setZip] = useState('');
  const [number, setNumber] = useState('');
  //Labels
  const [cvcLabel, setCvcLabel] = useState('inputLabel hidden');
  const [expiryLabel, setExpiryLabel] = useState('inputLabel hidden');
  const [firstNameLabel, setFirstNameLabel] = useState('inputLabel hidden');
  const [lastNameLabel, setLastNameLabel] = useState('inputLabel hidden');
  const [zipLabel, setZipLabel] = useState('inputLabel hidden');
  const [numberLabel, setNumberLabel] = useState('inputLabel hidden');
  //plans
  const [plan, setPlan] = useState('');

  const options = [
    { value: '0', label: 'Basic(Free)' },
    { value: '1', label: 'Personal(Monthly)' },
    { value: '2', label: 'Business(Monthly)' },
    { value: '3', label: 'Personal(Yearly)' },
    { value: '4', label: 'Business(Yearly)' },
  ];

  // console.log(options);
  //set selected
  // eslint-disable-next-line no-unused-vars
  const setSelected = () => {};
  //submit
  const [payment, setPayment] = React.useState({
    name: myName,
    firstName: firstName,
    lastName: lastName,
    cardNumber: number,
    expiry: expiry,
    expMonth: expiryMonth,
    expYear: expiryYear,
    cvc: cvc,
    zip: zip,
    plan: plan,
  });
  // eslint-disable-next-line no-unused-vars
  const [planNumber, setPlanNumber] = useState('');
  // console.log(payment);

  //update first name
  const handleFirstNameFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleFirstNameChange = (e) => {
    // eslint-disable-next-line no-unused-vars
    const { name, value } = e.target;
    setFirstName(value);
    if (value) {
      setFirstNameLabel('inputLabel');
    } else {
      setFirstNameLabel('inputLabel hidden');
    }
  };

  //update Last name
  const handleLastNameFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleLastNameChange = (e) => {
    // eslint-disable-next-line no-unused-vars
    const { name, value } = e.target;
    setLastName(value);
    if (value) {
      setLastNameLabel('inputLabel');
    } else {
      setLastNameLabel('inputLabel hidden');
    }
  };

  //update zip code name
  const handleZipFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleZipChange = (e) => {
    // eslint-disable-next-line no-unused-vars
    const { name, value } = e.target;
    setZip(value);
    if (value) {
      setZipLabel('inputLabel');
    } else {
      setZipLabel('inputLabel hidden');
    }
  };

  //update Credit Card #
  const handleCardFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleCardChange = (e) => {
    // eslint-disable-next-line no-unused-vars
    const { name, value } = e.target;
    setNumber(value);
    if (value) {
      setNumberLabel('inputLabel');
    } else {
      setNumberLabel('inputLabel hidden');
    }
  };
  //update exp date
  const handleExpFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleExpChange = (e) => {
    // eslint-disable-next-line no-unused-vars
    const { name, value } = e.target;
    setExpiry(value);
    if (value) {
      setExpiryLabel('inputLabel');
    } else {
      setExpiryLabel('inputLabel');
    }
    var v = value;
    if (v.includes('/') === false) {
      if (v.length === 4) {
        var a = v.substr(0, 2);
        var ae = v.charAt(v.length - 2) + v.charAt(v.length - 1);
        e.target.value = a + '/' + ae;
      }
    }
  };

  //update cvv date
  const handleCvvFocus = (e) => {
    setFocus(e.target.name);
  };

  const handleCvvChange = (e) => {
    // eslint-disable-next-line no-unused-vars
    const { name, value } = e.target;
    setCvc(value);
    setCvcLabel('inputLabel');
  };

  //update cvv date
  const handlePlanFocus = (e) => {
    setFocus(e.target.name);
  };

  const handlePlanChange = (e) => {
    // eslint-disable-next-line no-unused-vars
    const { name, value } = e.target;
    setPlan(value);
    setPlanSelector(value)
  };


  //submit data
  const submitCard = (ev) => {
    console.log(ev);
    ev.preventDefault();
  };

  useEffect(
    () => {
      setMyName(firstName + ' ' + lastName);
    },
    [firstName, lastName, myName]
  );
  useEffect(
    (e) => {
      var v = expiry;
      setExpiryMonth(v.substr(0, 2));
      setExpiryYear('20' + v.charAt(v.length - 2) + v.charAt(v.length - 1));
    },
    [expiry, cvc]
  );

  useEffect(() => {
    setPayment({
      name: myName,
      firstName: firstName,
      lastName: lastName,
      cardNumber: number,
      expiry: expiry,
      expMonth: expiryMonth,
      expYear: expiryYear,
      cvc: cvc,
      zip: zip,
      plan: plan,
    });
    console.log(payment);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstName, lastName, number, expiry, cvc, zip, plan, expiryMonth, expiryYear]);  


  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("discover");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("discover");
    };
  });

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Martel+Sans:wght@300&display=swap');
      </style>
      <DangerNavbar />
      <div className="section">
        <div className="PaymentForm">
          <div className="form-container">
            <h4 className="form-header">Update your credit or debit card.</h4>
            <a href="/" className="link-card">
              <i className="fa fa-chevron-left" /> Change payment method
            </a>
            <br></br>
            <form className="creditForm" onSubmit={submitCard}>
              <div className="text-center">
                <i className="fa fa-cc-stripe fa-pay mr-1" />
                <i className="fa fa-cc-visa fa-pay mr-1" />
                <i className="fa fa-cc-mastercard fa-pay mr-1" />
                <i className="fa fa-cc-discover fa-pay mr-1" />
                <i className="fa fa-cc-amex fa-pay padding-right" />

                <br />
              </div>
              <div className="float-container">
                <label className={firstNameLabel}>First Name:</label>
                <input
                  type="name"
                  name="firstname"
                  placeholder="First Name"
                  onChange={handleFirstNameChange}
                  onFocus={handleFirstNameFocus}
                  className="forminput"
                  required
                />
              </div>
              <div className="float-container">
                <label className={lastNameLabel}>Last Name:</label>
                <input
                  type="name"
                  name="lastname"
                  placeholder="Last Name"
                  onChange={handleLastNameChange}
                  onFocus={handleLastNameFocus}
                  className="forminput"
                  required
                />
              </div>
              <div className="float-container">
                <label className={zipLabel}>Billing Zip Code:</label>
                <input
                  type="zip"
                  name="zipcode"
                  placeholder="Billing Zip Code"
                  onChange={handleZipChange}
                  onFocus={handleZipFocus}
                  className="forminput"
                  required
                />
              </div>
              <div className="float-container">
                <label className={numberLabel}>Card Number:</label>
                <input
                  type="text"
                  name="number"
                  placeholder="Card Number"
                  onChange={handleCardChange}
                  onFocus={handleCardFocus}
                  className="forminput"
                  maxLength={16}
                  required
                />
              </div>
              <div className="float-container">
                <label className={expiryLabel}>Expiration Date(MM/YY):</label>
                <input
                  type="text"
                  name="expiry"
                  placeholder="Expiration Date(MM/YY)"
                  onChange={handleExpChange}
                  onFocus={handleExpFocus}
                  className="forminput"
                  maxLength="5"
                  required
                />
              </div>
              <div className="float-container">
                <label className={cvcLabel}>Security Code(CVV):</label>
                <input
                  type="cvc"
                  name="cvc"
                  placeholder="Security Code(CVV)"
                  onChange={handleCvvChange}
                  onFocus={handleCvvFocus}
                  className="forminput"
                  maxLength="4"
                  required
                />
              </div>
              <div className="float-container smaller-drop">
                <select
                  className="forminputDropdown forminput"
                  type="plan"
                  name="plan"
                  placeholder=""
                  maxLength="4"
                  value={planSelector}
                  onChange={handlePlanChange}
                  onFocus={handlePlanFocus}
                >
                  {options.map((option, index) => (
                    <option
                      key={option.label + option[index]}
                      {...option}
                      value={option.value}
                      label={option.label}
                    ></option>
                  ))}
                </select>
              </div>
              <Button className="save-button" type="submit">
                Save
              </Button>
            </form>
          </div>
          <div className="right-card">
            <Cards
              cvc={cvc}
              expiry={expiry}
              focused={focus}
              name={myName}
              number={number}
              className="creditCard"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
