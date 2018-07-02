import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Card, Button, Icon } from 'react-materialize'
import {deleteUser} from '../actions/index'

const textStyle = {
    display: 'inline-block'
}

class UserCard extends Component {
    renderUsers(){
        const {users} = this.props
        return !users || users.length < 1 ? <div>No User Records Found</div> :
        users.map((user, i) => 
            <Card id={i} className='small user-card' key={i}
                actions={[
                    <Button waves='light' onClick={() => this.props.getData(user, i)}>Edit User</Button>, 
                    <Button className="delete-button" 
                        onClick={() => this.props.deleteUserRecord(user._id)} waves='light'>
                        <Icon>delete_outline</Icon>
                    </Button>
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
            <div className="user-card-section">
                {this.renderUsers()}
            </div>
        )
    }
};

const mapStateToProps = ({ users }) => { return { users } }
const mapDispatchToProps = dispatch => {
    return {
        deleteUserRecord: (id) => deleteUser(dispatch, id)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserCard)

