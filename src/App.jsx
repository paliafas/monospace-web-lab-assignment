import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateSelectedUsers, getUsers } from './features/users/usersSlice';
import Spinner from './components/Spinner';
import UserTable from './components/UserTable';

const App = () => {
    const dispatch = useDispatch();
    const { isLoading, userSelectionStatus } = useSelector(
        (store) => store.users
    );

    useEffect(() => {
        dispatch(calculateSelectedUsers());
    }, [userSelectionStatus]);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <div className="h-screen bg-background">
            <div className="max-w-[1722px] mx-auto pt-6">
                {isLoading ? <Spinner /> : <UserTable />}
            </div>
        </div>
    );
};

export default App;
