import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Card, CardTitle, Button, Modal, Row, Input, Icon } from 'react-materialize'
import {editUser, deleteUser} from '../actions/index'
const textStyle = {
    display: 'inline-block'
}

const cardStyle = {
    minHeight: '200px',
    width: '20%',
    margin: '2%',
    minWidth: '200px'
}

class UserCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            userID: '',
            firstName: '',
            lastName: '',
            email: '',
            initialized: false
        }
    }

    initializeState(userData){
        if (!this.state.initialized){
           this.setState({
                userID: userData.id['$oid'],
                firstName: userData.first_name,
                lastName: userData.last_name,
                email: userData.email,
                initialized: true
            })
        }
    }

    modalContent(userData) {
        this.initializeState(userData)
        return (
            <Row>
                 <Input id="firstName" defaultValue={userData.first_name} s={6} label="First Name" onChange={e => this.onInputChange(e)} />
                 <Input id="lastName" defaultValue={userData.last_name} s={6} label="Last Name" onChange={e => this.onInputChange(e)} />
                 <Input id="email" defaultValue={userData.email} type="email" label="Email" s={12} onChange={e => this.onInputChange(e)} />
                 <Button className="modal-close" onClick={() => this.collectEditData()}>Save Changes</Button>
            </Row>    
        )
    }

    onInputChange(e) {
        switch (e.currentTarget.id) {
            case 'firstName':
                this.setState({ firstName: e.currentTarget.defaultValue })
                break;
            case 'lastName':
                this.setState({ lastName: e.currentTarget.value })
                break;
            case 'email':
                this.setState({ email: e.currentTarget.value })
                break;
            default:
                break;
        }
    }

    collectEditData() {
        const {userID, firstName, lastName, email} = this.state
        const editedRecord = {userID, firstName, lastName, email}
        this.props.editUserRecord(editedRecord)
    }

    deleteRecord(userID){
        // console.log(userID)
        const id = {userID}
        this.props.deleteUserRecord(id)
    }

    renderUsers(){
        const {users} = this.props
        return !users ? <div>No Users Found</div> :
        users.map((user, i) => 
            <Card style={cardStyle} className='small' key={i}
                header={<CardTitle image={user.avatar}></CardTitle>}
                actions={[
                    <Modal key={user.id['$oid']}
                        header='Edit User Record'
                        trigger={<Button>Edit User</Button>}>
                        {this.modalContent(user)}
                    </Modal>, 
                    <Button className="delete-button" onClick={e => this.deleteRecord(user.id['$oid'])} waves='light'><Icon>delete_outline</Icon></Button>
                ]}>
                <div>
                    <h6>Name: <p style={textStyle}>{user.first_name} {user.last_name}</p></h6>
                    <h6>Username: <p style={textStyle}>{user.username}</p></h6>
                    <h6>Email: <p style={textStyle}>{user.email}</p></h6>
                </div>
            </Card>)
    }

    render(){
        return (
            <div className="user-card">
                {this.renderUsers()}
            </div>
        )
    }
};

const mapStateToProps = ({ users }) => { return { users } }
const mapDispatchToProps = dispatch => {
    return {
        editUserRecord: (userRecord) => editUser(dispatch, userRecord),
        deleteUserRecord: (userID) => deleteUser(dispatch, userID)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserCard)

