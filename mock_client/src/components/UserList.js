import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchApiUsers} from '../actions/index'
import UserCard from './UserCard'

const divStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
}

class UserList extends Component {
    componentDidMount(){
        this.props.fetchApiUsers()
    }

    renderUsers(){
        return !this.props.users ? <div>No Users Found</div> :
        this.props.users.map((user, i) => <UserCard key={i} userData={user} />)
    }

    render() {
        console.log(this.props.users)
        return (
            <div style={divStyle}>
                {this.renderUsers()}
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
