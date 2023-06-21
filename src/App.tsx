import React, { useEffect, useState, useMemo } from "react";
import './App.css';
import { Button, Card } from 'react-bootstrap';
import InitialData from './components/InitialData';
import PasswordReference from './components/PasswordReference';
import Review from './components/Review';
import validator from 'validator';
import { nanoid } from "nanoid";

interface Errors {
  name: string;
  email: string;
  password: string;
  phone: string;
  country: string;
}

interface UserData {
  name: string;
  email: string;
  phone: string;
  country: string;
  password1: string;
  password2: string;
}

function App(): JSX.Element {
  const [step, setStep] = useState<number>(0);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    phone: '',
    country: '',
    password1: '',
    password2: '',
  })
  const [errors, setErrors] = useState<Errors>({
    name: 'Enter name, please',
    email: 'Enter email, please',
    phone: 'Enter phone number, please',
    country: 'Select your country, please.',
    password: '',
  });
  
  const handleChange = (argment: any) => (event: any) => {
    setUserData({...userData, [argment]: event.target.value});
  }
  const validateForm1 = () => {
    let ne = {...errors};
    if (userData.name === '') {
      ne.name= 'Enter Name please';
    } else {
      ne.name ='' ;
    }
    if (validator.isEmail(userData.email) !== true) {
      ne.email = 'Email is not valid';
    } else {
      ne.email =  '' ;
    }
    if (validator.isMobilePhone(userData.phone) !== true) {
      ne.phone = 'Phone number is not valid';
    } else {
      ne.phone = '';
    }

    if (userData.country === '') {
      ne.country = 'Please select your country.';
    } else {
      ne.country = '';
    }    
    setErrors(ne);
  };

  useEffect(() => {
    if (
      errors.name !== "" ||
      errors.email !== "" ||
      errors.phone !== "" ||
      errors.country !== "" ||
      errors.password !== ""
    ) {
      setIsError(true);
    } else {
      setIsError(false); // set isError as false when there are no errors
    }
    console.log('errors changed', errors);
  }, [errors]); // add errors as dependency here
// }, [errors.name, errors.email, errors.country, errors.phone, errors.password]); // add errors as dependency here

  useEffect(() => {
    validateForm1();
  }, [userData]);

  useEffect(() => {
    validatePasswords();
  }, [userData]);

  const validatePasswords = () => {
    if (step !== 1) {
      return;
    }
    if (userData.password1 !== userData.password2) {
      setErrors({ ...errors, password: 'Passwords do not match' });
    } else if (userData.password1 === '') {
      setErrors({ ...errors, password: 'Enter password' });
    } else {
      setErrors({ ...errors, password: '' });
    }
  };

  const changeStep = () => {
    if (step === 2) {
      setStep(0);
    } else {
      setStep(step + 1);
    }
  };

  const stepperStyle = {
    listStyleType: "square",
    color: "#C9C5E8",
    fontSize: "20px",
  };
  const stepperStyleActive = {
    listStyleType: "square",
    color: "#5845DD",
    fontSize: "20px",
  };
  const stepsText = ["Initial Info", "Password Screen", "Review"];

  return (
    <div className="container pt-5">
      <div className="position-fixed left-1 top-1">
        <ul>
          {
            stepsText.map(text => (
              <li key={nanoid()} style={step === stepsText.indexOf(text) ? stepperStyleActive : stepperStyle}>
                {text}
              </li>
            ))
          }
        </ul>
      </div>
      <div className="text-center mb-2">
        <h1>Super Test Form</h1>
        <h3 style={{ color: "gray" }}>{stepsText[step]}</h3>
      </div>
      <Card style={{ backgroundColor: "#817ca5", color: "#fff", width: '50%', margin: "auto" }}>
        <Card.Body>
          {step === 0 && (
            <InitialData
              error={errors}
              userData={userData}
              handleChange={handleChange}
            />
          )}
          {step === 1 && (
            <PasswordReference
              error={errors}
              userData={userData}
              handleChange={handleChange}
            />
          )}
          {step === 2 && <Review userData={userData} />}
          <div className="d-grid gap-2">
            <Button disabled={isError} id="btn-start-mine" onClick={changeStep}>
              {step < 2 ? 'Continue' : 'Done'}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;