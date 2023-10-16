import UserSelectAllCell from './UserSelectAllCell';

const TableHead = () => {
    return (
        <thead className="text-left uppercase text-xs/[15px]">
            <tr className="border-[#E2E2E2] border-y-2">
                <UserSelectAllCell />
                <th className="w-[12.1%] py-[22px]">Type</th>
                <th className="w-[16.9%] py-[22px]">Name</th>
                <th className="w-[22.2%] py-[22px]">Email</th>
                <th className="w-[39.8%] py-[22px]">Telephone</th>
                <th className="py-[22px] text-center">Status</th>
            </tr>
        </thead>
    );
};

export default TableHead;
