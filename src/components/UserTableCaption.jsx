import { useSelector } from 'react-redux';
import usersIcon from '../assets/users.png';
import questionMarkIcon from '../assets/question-mark.svg';

const UserTableCaption = () => {
    const { totalSelectedUsers } = useSelector((store) => store.users);

    return (
        <caption className="text-lg/[22px] text-dark text-left font-medium mb-3">
            <div className="flex place-content-between">
                <div className="flex items-center">
                    <img
                        src={usersIcon}
                        alt="Users icon"
                        className="w-[32px] h-[32px] mr-[12px]"
                    />
                    <h1>Users</h1>
                </div>
                <div className="flex items-center pr-8">
                    <p className="text-granite font-medium text-xs/[15px] mr-[24px]">
                        {totalSelectedUsers} selected
                    </p>
                    <img
                        src={questionMarkIcon}
                        alt="Help"
                        className="hover:cursor-pointer"
                    />
                </div>
            </div>
        </caption>
    );
};

export default UserTableCaption;
