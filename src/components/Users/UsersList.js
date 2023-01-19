import Card from "../UI/Card";
import styles from './UserList.module.css';

const UsersList = (props) => {
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map((user, i) => (
                    <li key={i}>
                        {user.name} - {user.age}  years
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;