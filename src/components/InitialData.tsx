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
  name: string;
  email: string;
  phone: string;
  country: string;
  handleChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeCountry: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChangePhone: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (s:string) => (event: React.ChangeEvent<HTMLInputElement>) => void ;
}

const InitialData: React.FC<Props> = ({
  error,
  name,
  email,
  phone,
  country,
  handleChangeName,
  handleChangeEmail,
  handleChangeCountry,
  handleChangePhone,
  handleChange
}) => {
  const countries = countryList().getData();

  return (
    <div>
      <Form.Group className="mb-3" controlId="username.ControlInput1">
        <Form.Label>User Name</Form.Label>
        <Form.Control size="lg" value={name} onChange={handleChangeName} type="text" placeholder="User Name" />
        {error.name !== '' && <span className="error">{error.name}</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control size="lg" value={email} onChange={handleChange("email")} type="email" placeholder="name@example.com" />
        {error.email !== '' && <span className="error">{error.email}</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone.ControlInput1">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control size="lg" value={phone} onChange={handleChangePhone} type="tel" placeholder="Phone number" />
        {error.phone !== '' && <span className="error">{error.phone}</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="country.ControlInput1">
        <Form.Label>Country</Form.Label>
        <Form.Select size="lg" value={country} onChange={handleChangeCountry} aria-label="Default select example">
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
