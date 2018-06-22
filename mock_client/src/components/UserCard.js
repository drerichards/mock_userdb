import React from 'react';
import { Card, CardTitle, Button, Modal, Row, Input } from 'react-materialize'

const textStyle = {
    display: 'inline-block'
}

const cardStyle = {
    height: 'inital',
    width: '20%',
    margin: '2%',
    minWidth: '200px'
}

const UserCard = ({userData}) => {
    return (
        <Card style={cardStyle} className='small' key={userData.id['$oid']}
            header={<CardTitle image={userData.avatar}></CardTitle>}
            actions={[<button>Edit User</button>]}>
            <div>
                <h6>Name: <p style={textStyle}>{userData.first_name} {userData.last_name}</p></h6>
                <h6>Username: <p style={textStyle}>{userData.username}</p></h6>
                <h6>Email: <p style={textStyle}>{userData.email}</p></h6>
            </div>
        </Card>)
};

export default UserCard;

