import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';


export default function EditUser(props) {
  const [selectedUser,setSelectedUser] = useState({
    id:'',
    name:''
  });
  const {users,editUser} = useContext(GlobalContext);
  const navigate = useNavigate();
  const {id} = useParams();
  const currentUserId = id;

  useEffect(()=>{
    const userId = currentUserId;
    console.log(typeof userId);
    const selectedUser = users.find(user=>user.id === userId);
    setSelectedUser(selectedUser);
  },[currentUserId,users])

  const onSubmit = ()=>{
      editUser(selectedUser);
    navigate('/');
  }
  const onChange =(e)=>{
    setSelectedUser({...selectedUser,[e.target.name]:e.target.value})
  }
  return (
    <div>
       <Form onSubmit={onSubmit}>
        <FormGroup>
            <Label>Name: </Label>
            <Input type='text' name='name' value={selectedUser.name} onChange={onChange} placeholder='Enter Name' />
        </FormGroup>
        <Button type='submit'>Edit Name</Button>
        <Link to='/' className='btn btn-danger ms-2'>Cancel</Link>
     </Form>
    </div>
  )
}
