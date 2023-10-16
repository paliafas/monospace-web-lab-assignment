const UserTypeCell = ({ type }) => {
    const colorVariants = {
        Employee: 'bg-employee',
        Stakeholder: 'bg-stakeholder',
        Guest: 'bg-guest',
        Supervisor: 'bg-supervisor',
    };

    return (
        <td>
            <div
                className={`${colorVariants[type]} w-[34px] h-[24px] font-bold text-rhino text-xs/[15px] uppercase hover:cursor-pointer flex text-center justify-center items-center`}
            >
                {type.substring(0, 2)}
            </div>
        </td>
    );
};

export default UserTypeCell;
