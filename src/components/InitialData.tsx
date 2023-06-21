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
        <Form.Label>User Name</Form.Label>
        <Form.Control size="lg" value={userData.name} onChange={handleChange("name")} type="text" placeholder="User Name" />
        {error.name !== '' && <span className="error">{error.name}</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control size="lg" value={userData.email} onChange={handleChange("email")} type="email" placeholder="name@example.com" />
        {error.email !== '' && <span className="error">{error.email}</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone.ControlInput1">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control size="lg" value={userData.phone} onChange={handleChange("phone")} type="tel" placeholder="Phone number" />
        {error.phone !== '' && <span className="error">{error.phone}</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="country.ControlInput1">
        <Form.Label>Country</Form.Label>
        <Form.Select size="lg" value={userData.country} onChange={handleChange("country")} aria-label="Default select example">
          <option>Select Country</option>
          {countries.map((item) => (
            <option key={nanoid()} value={item.value}>
              {item.label}
            </option>
          ))}
        </Form.Select>
        {error.country !== '' && <span className="error">{error.country}</span>}
      </Form.Group>
    </div>
  );
};

export default InitialData;
