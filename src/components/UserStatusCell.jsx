import activeIcon from '../assets/active.svg';
import inactiveIcon from '../assets/inactive.svg';

const UserStatusCell = ({ status }) => {
    return (
        <td className="hover:cursor-pointer hover:font-semibold">
            <div className="flex justify-center items-center">
                <img src={status ? activeIcon : inactiveIcon} />
            </div>
        </td>
    );
};

export default UserStatusCell;
