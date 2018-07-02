import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Input } from 'react-materialize'

const AddUserView = ({showAddView, onInputChange, saveData}) => {
    return (
        <div className={!showAddView ? 'hide' : 'add_window'}>
            <Row>
                <h5><strong>Add New Record:</strong></h5>
                <Input id="firstName" s={6} placeholder="First Name" onChange={e => onInputChange(e)} />
                <Input id="lastName" s={6} placeholder="Last Name" onChange={e => onInputChange(e)} />
                <Input id="username" s={6} placeholder="Username" onChange={e => onInputChange(e)} />
                <Input id="email" s={6} type="email" placeholder="Email" onChange={e => onInputChange(e)} />
                <Button onClick={() => saveData()}>Save Record</Button>
            </Row>   
        </div>
    );
};

AddUserView.propTypes = {
    showAddView: PropTypes.bool,
    onInputChange: PropTypes.func,
    saveData: PropTypes.func
};

export default AddUserView;