import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchApiUsers} from '../actions/index'
import UserCard from './UserCard'

class UserList extends Component {
    componentDidMount(){
        this.props.fetchApiUsers()
    }

    
    render() {
        console.log(this.props.users)
        return (
        <div>
            <p>List</p>
        </div>
        )
    }
}

const mapStateToProps = ({ users }) => { return { users } }
const mapDispatchToProps = dispatch => {
    return {
        fetchApiUsers: () => fetchApiUsers(dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList)
