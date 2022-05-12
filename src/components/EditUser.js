import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default function EditUser() {
  return (
    <div>
       <Form>
        <FormGroup>
            <Label>Name: </Label>
            <Input type='text' placeholder='Enter Name' />
        </FormGroup>
        <Button type='submit'>Edit Name</Button>
        <Link to='/' className='btn btn-danger ms-2'>Cancel</Link>
     </Form>
    </div>
  )
}