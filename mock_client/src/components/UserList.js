import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-materialize'
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

    render() {
        return (
            <div style={divStyle}>
                <Button floating large className='red' waves='light' icon='add'/>
                <UserCard/>
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
