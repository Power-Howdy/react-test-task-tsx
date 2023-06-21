import React, { useEffect, useState, useMemo } from "react";
import './App.css';
import { Button, Card } from 'react-bootstrap';
import InitialData from './components/InitialData';
import PasswordReference from './components/PasswordReference';
import Review from './components/Review';
import validator from 'validator';
import { nanoid } from "nanoid";
import { createLoopVariable } from "typescript";

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
    
  })
  const [errors, setErrors] = useState<Errors>({
    name: 'Enter name, please',
    email: 'Enter email, please',
    password: '',
    phone: 'Enter phone number, please',
    country: 'Select your country, please.',
  });
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(true);
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const handleChangePassword2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword2(event.target.value);
  };
  const handleChangePassword1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword1(event.target.value);
  };
  const handleChangeCountry = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(event.target.value);
  };
  const handleChange = (argment: any) => (event: any) => {
    switch(argment){
      case 'email':
        setEmail(event.target.value);
        break;
      case 'name':
        break;
      case 'phone':
        break;
      case 'country':
        break;
      case 'name':
        break;
    }
  }
  const validateForm1 = () => {
    let ne = {...errors};
    if (name === '') {
      ne.name= 'Enter Name please';
    } else {
      ne.name ='' ;
    }
    if (validator.isEmail(email) !== true) {
      ne.email = 'Email is not valid';
    } else {
      ne.email =  '' ;
    }
    if (validator.isMobilePhone(phone) !== true) {
      ne.phone = 'Phone number is not valid';
    } else {
      ne.phone = '';
    }

    if (country === '') {
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
  }, [name, email, country, phone]);

  useEffect(() => {
    validatePasswords();
  }, [password1, password2]);

  const validatePasswords = () => {
    if (step !== 1) {
      return;
    }
    if (password1 !== password2) {
      setErrors({ ...errors, password: 'Passwords do not match' });
    } else if (password1 === '') {
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
              name={name}
              email={email}
              phone={phone}
              country={country}
              handleChange={handleChange}
              handleChangeCountry={handleChangeCountry}
              handleChangeEmail={handleChangeEmail}
              handleChangeName={handleChangeName}
              handleChangePhone={handleChangePhone}
            />
          )}
          {step === 1 && (
            <PasswordReference
              error={errors}
              password1={password1}
              password2={password2}
              handleChangePassword1={handleChangePassword1}
              handleChangePassword2={handleChangePassword2}
            />
          )}
          {step === 2 && <Review name={name} country={country} phone={phone} />}
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