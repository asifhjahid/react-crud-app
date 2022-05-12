import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';

export default function UserList() {
    const {users,removeUser} = useContext(GlobalContext);
    // console.log(users);
  return (
    <div>
        <ListGroup className='mt-3'>
            {users.map((user)=>(
                <ListGroupItem className='d-flex justify-content-between'>
                <strong>{user.name}</strong>
                <div>
                    <Link to={`/edit/${user.id}`} className='btn btn-warning me-2'>Edit</Link>
                    <Button onClick={()=>removeUser(user.id)} className='btn btn-danger'>Delete</Button>
                </div>
            </ListGroupItem>
            ))}

       </ListGroup>
    </div>
  )
}
