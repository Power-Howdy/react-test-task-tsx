import React from 'react';
import { Form } from 'react-bootstrap';

interface Props {
    error: {
        password: string;
    };
    password1: string;
    password2: string;
    handleChangePassword1: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangePassword2: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordReference: React.FC<Props> = ({ error, password1, password2, handleChangePassword1, handleChangePassword2 }) => {
    return (
        <div>
            <Form.Group className="mb-3" controlId="password.ControlInput1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password1} onChange={handleChangePassword1} size="lg" placeholder="User Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password.ControlInput1">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" value={password2} onChange={handleChangePassword2} size="lg" placeholder="User Name" />
            </Form.Group>
            {error.password !== '' && <span className="error">{error.password}</span>}
        </div>
    );
};

export default PasswordReference;
