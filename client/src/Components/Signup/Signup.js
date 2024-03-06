import { useState } from 'react';
import { Container, Form, Button,Alert,Card } from 'react-bootstrap';
import axios from 'axios';
function Signup() {
    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const  [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [mobile, setMobile] = useState();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/register', {firstname,lastname,email,address,mobile})
        .then(result => {console.log(result);
            setSuccessMessage('Data successfully inserted!');
            setErrorMessage('');
            
        })
        .catch(err => {
            console.log(err);
            setErrorMessage('Failed to insert data.');
            setSuccessMessage('');
        });
    };
    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: '400px', padding: '20px' }}>
      <div><h1 style={{ fontSize: '2rem', color: 'blue', textAlign: 'center', marginBottom: '30px' }}>Contact Form</h1>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formLastname">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            name="firstname"
            onChange={(e) =>setFirstName(e.target.value)}
            required
            style={{ width: '350px' }}
          />
        </Form.Group>
        <Form.Group controlId="formFirstname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            name="lastname"
            onChange={(e) =>setLastName(e.target.value)}
            required
            style={{ width: '350px' }}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={(e) =>setEmail(e.target.value)}
            required
            style={{ width: '350px' }}
          />
        </Form.Group>
        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="text"
            placeholder="mobile"
            name="mobile"
            onChange={(e) =>setMobile(e.target.value)}
            style={{ width: '350px' }}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            name="address"
            onChange={(e) =>setAddress(e.target.value)}
            required
            style={{ width: '350px' }}
          />
        </Form.Group>

       

        <div className="text-center" style={{ marginTop: '20px' }}>
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </div>
      </Form>
      </div>
      </Card>
    </Container>
    );
  }
  
export default Signup;
