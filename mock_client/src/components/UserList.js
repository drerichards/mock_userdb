import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-materialize'
import {fetchApiUsers} from '../actions/index'
import UserCard from './UserCard'
import EditUserView from './EditUserView'
import AddUserView from './AddUserView'
import {editUser, addUser, resetUserDB} from '../actions/index'

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
        const {first_name, last_name, username, email} = this.state
        this.valueValidator([first_name, last_name, username, email])
        
    }

    cancelChanges = () => {
        this.setState({toggleVisibility: false})
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

    valueValidator = data => {
        let empty
        data.forEach(element => {
            if (element.length < 1) {
                empty = false
            }
        })
        if(empty === false) {
            return alert('All fields must contain entries to Save Record')
        } else {
            const {_id, first_name, last_name, username, email, index, showAddView} = this.state
            !showAddView ? this.props.editUserRecord({_id, first_name, last_name, username, email, index}) :
            this.props.addUserRecord({first_name, last_name, username, email})
        }
    }

    render() {
        return (
            <div className='main-container'>
                <UserCard getData={this.getData}/>
                <div className='aside-container'>
                    <aside>
                        <section>
                            <Button onClick={() => {this.setState({showAddView: !this.state.showAddView})}} className={!this.state.toggleVisibility ? '' : 'hide'} 
                                waves='light'>{!this.state.showAddView ? 'Add User' : 'Cancel'}
                            </Button>
                            <AddUserView showAddView={this.state.showAddView} 
                                onInputChange={this.onInputChange} saveData={this.saveData} />
                        </section>
                        <EditUserView toggleVisibility={this.state.toggleVisibility} 
                        data={this.state} onInputChange={this.onInputChange} saveData={this.saveData} cancelChanges={this.cancelChanges} />
                    </aside>
                    <Button waves='light' onClick={() => {this.props.resetDb()}}>Reset Database</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => { return { users } }
const mapDispatchToProps = dispatch => {
    return {
        fetchApiUsers: () => fetchApiUsers(dispatch),
        editUserRecord: (userRecord) => editUser(dispatch, userRecord),
        addUserRecord: (userRecord) => addUser(dispatch, userRecord),
        resetDb: () => resetUserDB(dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList)
