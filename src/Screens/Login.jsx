import {Button,Row,Col, Container,Card,Navbar,Form,Image,Figure} from 'react-bootstrap';
import { a } from 'react';
import image from "../img/api.png"
import { Link,useHistory  } from 'react-router-dom';



function Login() {
  return  (
<>
<Container style={{ width: '18rem' , height:'150'}}>
<img 
width={300}
height={150}
src={image} />
  <Row>
    <Col>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Link to='Index'>
        <Button >Ir a la pantalla de inicio</Button>
        </Link>
      </Form>
    </Col>
  </Row>
</Container>
</> 
  );
}


export default Login;