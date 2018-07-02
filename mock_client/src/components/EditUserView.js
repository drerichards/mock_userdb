import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Input } from 'react-materialize'

const EditUserView = ({toggleVisibility, data, onInputChange, saveData, cancelChanges}) => {
    return (
        <div className={!toggleVisibility ? 'hide' : 'edit_window'}>
            <Row>
                <h5><strong>Edit Record:</strong> {data.username}</h5>
                <Input id="firstName" value={data.first_name} s={6} placeholder="First Name" onChange={e => onInputChange(e)} />
                <Input id="lastName" value={data.last_name} s={6} placeholder="Last Name" onChange={e => onInputChange(e)} />
                <Input id="username" value={data.username} s={6} placeholder="Username" onChange={e => onInputChange(e)} />
                <Input id="email" value={data.email} s={6} type="email" placeholder="Email" onChange={e => onInputChange(e)} />
                <Button waves='light' onClick={() => saveData()}>Save Changes</Button>
                <Button className='cancel-btn' waves='light' onClick={() => cancelChanges()}>Cancel</Button>
            </Row>   
        </div>
    );
};

EditUserView.propTypes = {
    toggleVisibility: PropTypes.bool,
    data: PropTypes.object,
    onInputChange: PropTypes.func,
    saveData: PropTypes.func,
    cancelChanges: PropTypes.func
};

export default EditUserView;