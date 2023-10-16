import { useSelector, useDispatch } from 'react-redux';
import { setAllUserSelectionStatus } from '../features/users/usersSlice';
import checkMark from '../assets/checkmark.svg';

const UserSelectAllCell = () => {
    const { users, totalSelectedUsers } = useSelector((store) => store.users);
    const dispatch = useDispatch();

    return (
        <th className="w-[2.5%] py-[22px]">
            <div className="flex justify-center">
                <input
                    type="checkbox"
                    className="appearance-none hover:cursor-pointer w-[16px] h-[16px] bg-checkbox-no checked:bg-checkbox-yes"
                    checked={users.length === totalSelectedUsers}
                    onChange={() => {
                        dispatch(
                            setAllUserSelectionStatus(
                                users.length !== totalSelectedUsers
                            )
                        );
                    }}
                />
                {users.length === totalSelectedUsers && (
                    <div className="w-[10px] h-[10px] absolute pointer-events-none">
                        <img src={checkMark} className="pt-[3px]" />
                    </div>
                )}
            </div>
        </th>
    );
};

export default UserSelectAllCell;
