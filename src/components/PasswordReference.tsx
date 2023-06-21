import React from 'react';
import { Form } from 'react-bootstrap';

interface Props {
    error: {
        password: string;
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

const PasswordReference: React.FC<Props> = ({ error, userData, handleChange }) => {
    return (
        <div>
            <Form.Group className="mb-3" controlId="password.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={userData.password1} onChange={handleChange('password1')} size="lg" placeholder="Enter password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password.ControlInput1">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" value={userData.password2} onChange={handleChange('password2')} size="lg" placeholder="Confirm password" />
            </Form.Group>
            {error.password !== '' && <span className="error">{error.password}</span>}
        </div>
    );
};

export default PasswordReference;
