import React from 'react';
import { Form } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import countryList from 'react-select-country-list';

interface Props {
  error: {
    name: string;
    email: string;
    phone: string;
    country: string;
  };
  userData: {
    name: string;
    email: string;
    phone: string;
    country: string;
    password1: string;
    password2: string;
  };
  handleChange: (s:string) => (event: any) => void ;
}

const InitialData: React.FC<Props> = ({
  error,
  userData,
  handleChange
}) => {
  const countries = countryList().getData();

  return (
    <div>
      <Form.Group className="mb-3" controlId="username.ControlInput1">
        <Form.Label className='mb-0 label-custom'>Username</Form.Label>
        <Form.Control value={userData.name} onChange={handleChange("name")} type="text" placeholder="User Name" isInvalid={error.name !== ''} isValid={error.name === ''} />
        <Form.Control.Feedback type={error.name !==''?"invalid":'valid'}>
            {error.name !==''?error.name:<>&nbsp;</>}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='mb-0 label-custom'>Email address</Form.Label>
        <Form.Control value={userData.email} onChange={handleChange("email")} type="email" placeholder="name@example.com" isInvalid={error.email !== ''} isValid={error.email === ''} />
        <Form.Control.Feedback type={error.email !==''?"invalid":'valid'}>
            {error.email !== ''? error.email: <>&nbsp;</>}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone.ControlInput1">
        <Form.Label className='mb-0 label-custom'>Phone Number</Form.Label>
        <Form.Control isInvalid={error.phone !== ''} isValid={error.phone === ''} value={userData.phone} onChange={handleChange("phone")} type="tel" placeholder="Phone number" />
        <Form.Control.Feedback type={error.phone !==''?"invalid":'valid'}>
            {error.phone !== ''?error.phone : <>&nbsp;</>}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="country.ControlInput1">
        <Form.Label className='mb-0 label-custom'>Country</Form.Label>
        <Form.Select style={{ borderRadius: 0}} isInvalid={error.country !== ''} isValid={error.country === ''} value={userData.country} onChange={handleChange("country")} aria-label="Default select example">
          <option>Select Country</option>
          {countries.map((item) => (
            <option key={nanoid()} value={item.value}>
              {item.label}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type={error.country !==''?"invalid":'valid'}>
            {error.country !== '' ? error.country : <>&nbsp;</>}
        </Form.Control.Feedback>
      </Form.Group>
    </div>
  );
};

export default InitialData;
