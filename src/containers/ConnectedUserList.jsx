import { connect } from 'react-redux';
import UserList from '../components/users/UserList.jsx';

function mapStateToProps(state) {
    const {users} = state;
    return {
        users
    }
}

const ConnectedUserList = connect(mapStateToProps)(UserList);
export default ConnectedUserList;