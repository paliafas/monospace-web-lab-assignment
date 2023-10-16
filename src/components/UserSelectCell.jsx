import { useDispatch, useSelector } from 'react-redux';
import { toggleUserSelection } from '../features/users/usersSlice';
import checkMark from '../assets/checkmark.svg';

const UserSelectCell = ({ id }) => {
    const { userSelectionStatus } = useSelector((store) => store.users);
    const dispatch = useDispatch();

    return (
        <td>
            <div className="flex justify-center">
                <input
                    type="checkbox"
                    className="appearance-none hover:cursor-pointer w-[16px] h-[16px] bg-checkbox-no checked:bg-checkbox-yes"
                    checked={userSelectionStatus[id]}
                    onChange={() => dispatch(toggleUserSelection(id))}
                />
                {userSelectionStatus[id] && (
                    <div className="w-[10px] h-[10px] absolute pointer-events-none">
                        <img src={checkMark} className="pt-[3px]" />
                    </div>
                )}
            </div>
        </td>
    );
};

export default UserSelectCell;
