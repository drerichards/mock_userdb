import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Icon } from 'react-materialize'
import {fetchApiUsers} from '../actions/index'
import UserCard from './UserCard'
import EditUserView from './EditUserView'
import AddUserView from './AddUserView'
import {editUser} from '../actions/index'

class UserList extends Component {
    constructor(props){
        super(props)
        this.state = {
            _id: '',
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            index: '',
            toggleVisibility: false,
            showAddView: false
        }
    }

    componentDidMount(){
        this.props.fetchApiUsers()
    }

    setData = ({_id, first_name, last_name, username, email}, index) => {
        this.setState({_id, first_name, last_name, username, email, index})
    }

    getData = (userData, index) => {
        this.setState({toggleVisibility: true, showAddView: false})
        this.setData(userData, index)
    }

    saveData = () => {
        this.setState({toggleVisibility: false})
        const {_id, first_name, last_name, username, email, index} = this.state
        this.props.editUserRecord({_id, first_name, last_name, username, email, index})
    }

    onInputChange = e => {
        switch (e.currentTarget.id) {
            case 'firstName':
                this.setState({ first_name: e.currentTarget.value })
                break;
            case 'lastName':
                this.setState({ last_name: e.currentTarget.value })
                break;
            case 'username':
                this.setState({ username: e.currentTarget.value })
                break;
            case 'email':
                this.setState({ email: e.currentTarget.value })
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className='main-container'>
                <UserCard getData={this.getData}/>
                <Button onClick={() => {this.setState({showAddView: true})}}  className={!this.state.toggleVisibility ? '' : 'hide'} 
                    waves='light'>Add User<Icon left medium>add</Icon>
                </Button>
                <EditUserView toggleVisibility={this.state.toggleVisibility} 
                    data={this.state} onInputChange={this.onInputChange} saveData={this.saveData} />
                <AddUserView showAddView={this.state.showAddView} 
                    onInputChange={this.onInputChange} saveData={this.saveData} />
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => { return { users } }
const mapDispatchToProps = dispatch => {
    return {
        fetchApiUsers: () => fetchApiUsers(dispatch),
        editUserRecord: (userRecord) => editUser(dispatch, userRecord)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList)
