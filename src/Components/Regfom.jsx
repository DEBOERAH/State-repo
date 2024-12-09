import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import "./Regform.css"


function Regfom( {setNewObject}) {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [age, setAge] = useState('');
    const [ageError, setAgeError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    //handle   form validation
    const handleValidation = () => {
        if (name === '') {
            setNameError('Name is required');
          } else {
            setNameError('');
          }
          if (email === '') {
            setEmailError('Email is required');
          } else {
            setEmailError('');
          }
          if (age === '') {
            setAgeError('Age is required');
          } else {
            setAgeError('');
          }
          if (password === '') {
            setPasswordError('Password is required');
          } else {
            setPasswordError('');
          }
    }

    // handle clear form
    const handleClear = () => {
        setName('');
        setEmail('');
        setAge('');
        setPassword('');
    }

 //handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        handleValidation();
        handleClear();

        const userObject = {
            name : name,
            email : email,
            age : age,
            password : password
        }
       


        setNewObject(userObject);
        handleClear();
    } 


   


     
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name"  value={name} onChange={(e) => setName(e.target.value)}/>
            {nameError && <p className="error">{nameError}</p>}
        
       
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {emailError && <p className="error" >{emailError}</p>}
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="age" placeholder="Enter age"  value={age} onChange={ (e) => setAge(e.target.value)}/>
            {ageError && <p className="error">{ageError}</p>}

        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
            {passwordError && <p className="error">{passwordError}</p>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
  );
}

export default Regfom;