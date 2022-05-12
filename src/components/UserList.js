import React from 'react'
import { Link } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

export default function UserList() {
  return (
    <div>
        <ListGroup className='mt-3'>
            <ListGroupItem className='d-flex justify-content-between'>
                <strong>User One</strong>
                <div>
                    <Link to='/edit/1' className='btn btn-warning me-2'>Edit</Link>
                    <Button className='btn btn-danger'>Delete</Button>
                </div>
            </ListGroupItem>
            <ListGroupItem className='d-flex justify-content-between'>
                <strong>User Two</strong>
                <div>
                    <Link to='/edit/1' className='btn btn-warning me-2'>Edit</Link>
                    <Button className='btn btn-danger'>Delete</Button>
                </div>
            </ListGroupItem>
       </ListGroup>
    </div>
  )
}
