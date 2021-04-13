import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeStateMain, insertNewUser, fetchUsers, deleteUser} from '../../actions/MainActions';

export class AddUser extends Component {
    userInputs (e) {
        this.props.changeStateMain({
            name: 'editUser.'+e.target.name,
            value: e.target.value
        })
    }

    addNewUserBtn (editUser, e) {
        this.props.insertNewUser(editUser)
        .then(resp =>{
            if(resp.status === 'success'){
                this.props.changeStateMain({
                    name: 'visibileAddUser',
                    value: false
                })
                this.props.fetchUsers();
            }
        })
    }
    deleteUser (e) {
        this.props.changeStateMain({
            name: 'removeUser',
            value: true
        })
    }
    deleteUserBtn (id, e) {
        this.props.deleteUser(id);
        this.props.fetchUsers();
        this.props.changeStateMain({
            name: 'visibileAddUser',
            value: false
        })
        this.props.changeStateMain({
            name: 'removeUser',
            value: false
        })
    }
    cancelDeleteUser (e){
        this.props.changeStateMain({
            name: 'removeUser',
            value: false
        })
    }
    render() {
        const {editUser, removeUser} = this.props;
        return (
            <div className="add-user-container">
                <table className="users-table">
                    <tbody>
                        <tr>
                            <th><input type="text" onChange={this.userInputs.bind(this)} name="fullname" value={editUser.fullname} className="add-user-input" autoComplete="off" placeholder="Ad Soyad" /></th>
                            <th><input type="text" onChange={this.userInputs.bind(this)} name="username" value={editUser.username} className="add-user-input" autoComplete="off" placeholder="İstifadəçi adı" /></th>
                            <th><input type="password" onChange={this.userInputs.bind(this)} name="password" value={editUser.password} className="add-user-input" autoComplete="off" placeholder="Şifrə" /></th>
                            <th>
                            <select className="add-user-input" onChange={this.userInputs.bind(this)} name="duty" value={editUser.duty} placeholder="Vəzifə" >
                                <option value="Admin">Admin</option>
                                <option value="Təqdimat hazırlayan">Təqdimat hazırlayan</option>
                            </select>
                            </th>
                            <th><button className="add-new-user" onClick={this.addNewUserBtn.bind(this, editUser)}>Əlavə et</button></th>
                            {
                                editUser.id !== '' ?
                                <th><button className="add-new-user" onClick={this.deleteUser.bind(this, editUser.id)}>Sil</button></th> : null
                            }
                           
                        </tr>
                    </tbody>
                </table>
                {
                    removeUser ? 
                    <div className="alert">
                        <p>İstifadəçini silmək istədiyinizdən əminsiniz?</p>
                        <div className="alert-buttons">
                            <button onClick={this.deleteUserBtn.bind(this, editUser.id)}>Sil</button>
                            <button onClick={this.cancelDeleteUser.bind(this)}>Ləğv et</button>
                        </div>
                    </div> : null
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    editUser: state.Data.editUser,
    removeUser: state.Data.removeUser
})
const mapDispatchToProps = {changeStateMain, insertNewUser, fetchUsers, deleteUser};
export default connect(mapStateToProps, mapDispatchToProps)(AddUser)
