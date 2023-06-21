import React from 'react';
import { Form } from 'react-bootstrap';

interface Props {
    error: {
        password1: string;
        password2: string;
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
                <Form.Label className='mb-0 label-custom '>Password</Form.Label>
                <Form.Control type="password" value={userData.password1} onChange={handleChange('password1')} placeholder="Enter password" isInvalid={error.password1 !== ''} isValid={error.password1 === ''}/>
                <Form.Control.Feedback type={error.password1 !==''?"invalid":'valid'}>
                    {error.password1 !== '' ? error.password1 : <>&nbsp;</>}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password.ControlInput1">
                <Form.Label className='mb-0 label-custom '>Password Confirmation</Form.Label>
                <Form.Control type="password" value={userData.password2} onChange={handleChange('password2')} placeholder="Confirm password" isInvalid={error.password2 !== ''} isValid={error.password2 === ''} />
                <Form.Control.Feedback type={error.password2 !==''?"invalid":'valid'}>
                    {error.password2 !== '' ? error.password2 : <>&nbsp;</>}
                </Form.Control.Feedback>
            </Form.Group>
            
        </div>
    );
};

export default PasswordReference;
