import React from 'react';
import UserTableCaption from './UserTableCaption';
import UserTableHead from './UserTableHead';
import UserDefaultCell from './UserDefaultCell';
import UserSelectCell from './UserSelectCell';
import UserTypeCell from './UserTypeCell';
import UserStatusCell from './UserStatusCell';
import { useSelector } from 'react-redux';

const UserTable = () => {
    const { users } = useSelector((store) => store.users);

    return (
        <table className="w-full text-denim">
            <UserTableCaption />
            <UserTableHead />
            <tbody className="text-sm/[18px]">
                {users.map((user, index) => (
                    <tr
                        key={index}
                        className="hover:bg-[rgba(57,98,141,0.05)] border-y-2"
                    >
                        <UserSelectCell id={user.id} />
                        <UserTypeCell type={user.type} />
                        <UserDefaultCell content={user.name} />
                        <UserDefaultCell content={user.email} />
                        <UserDefaultCell content={user.phone} />
                        <UserStatusCell status={user.active} />
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
