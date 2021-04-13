import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeStateMain, fetchUsers } from '../../actions/MainActions';
import AddUser from './AddUser'

export class Section6 extends Component {
    componentDidMount () {
        this.props.fetchUsers();
    }
    addNewUser () {
        const user = {
            id: '',
            fullname: '',
            username: '',
            password: '',
            duty: ''
        }
        this.props.changeStateMain({
            name: 'editUser',
            value: user
        })
        this.props.changeStateMain({
            name: 'visibileAddUser',
            value: true
        })
    }

    editUser (id, fullname, username, duty, e) {
        const user = {
            id: id,
            fullname: fullname,
            username: username,
            password: '',
            duty: duty
        }
        this.props.changeStateMain({
            name: 'editUser',
            value: user
        })
        this.props.changeStateMain({
            name: 'visibileAddUser',
            value: true
        })
    }
    render() {
        const {visibileAddUser, users} = this.props;
        return (
            <div className="users-container containers display" id="section-6">
                <h3 className="users-page-header">İstifadəçilər</h3>
                <div className="users">
                    <table className="users-table">
                        <tbody>
                            <tr>
                                <th>Ad Soyad</th>
                                <th>İstifadəçi adı</th>
                                <th>Şifrə</th>
                                <th>Vəzifə</th>
                                <th><button className="add-new-user" onClick={this.addNewUser.bind(this)}>Əlavə et</button></th>
                            </tr>
                            {
                                users.map((user, i) => {
                                    return(
                                        <tr className="users-list" key={i}>
                                            <td>{user.fullname}</td>
                                            <td>{user.username}</td>
                                            <td>********</td>
                                            <td>{user.duty}</td>
                                            <td><button className="edit-user" onClick={this.editUser.bind(this, user.id, user.fullname, user.username, user.duty)}>Düzəliş et</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                {
                    visibileAddUser ? <AddUser />: null
                }
            </div>
        )
    }
}
// d25001ce6d9d4a3d38366fe3d4ec3d5b
// 4ad279c1354a0e78980aee57c9753f0c
const mapStateToProps = (state) => ({
    visibileAddUser: state.Data.visibileAddUser,
    users: state.Data.users
})

const mapDispatchToProps = {changeStateMain, fetchUsers}
export default connect(mapStateToProps, mapDispatchToProps)(Section6)
