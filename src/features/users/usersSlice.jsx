import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://pantelis.users.challenge.dev.monospacelabs.com/users';

const initialState = {
    users: [],
    userSelectionStatus: {},
    totalSelectedUsers: 0,
    isLoading: true,
};

export const getUsers = createAsyncThunk('users/getUsers', () => {
    return fetch(url).then((response) => response.json());
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        toggleUserSelection: (state, action) => {
            const userID = action.payload;
            state.userSelectionStatus[userID] =
                !state.userSelectionStatus[userID];
        },
        setAllUserSelectionStatus: (state, action) => {
            Object.keys(state.userSelectionStatus).forEach((id) => {
                state.userSelectionStatus[id] = action.payload;
            });
        },
        calculateSelectedUsers: (state) => {
            let total = 0;
            Object.keys(state.userSelectionStatus).forEach((id) => {
                if (state.userSelectionStatus[id]) {
                    total++;
                }
            });
            state.totalSelectedUsers = total;
        },
    },
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.isLoading = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
            action.payload.forEach((user) => {
                state.userSelectionStatus[user.id] = false;
            });
        },
    },
});

export const {
    toggleUserSelection,
    setAllUserSelectionStatus,
    calculateSelectedUsers,
} = usersSlice.actions;
export default usersSlice.reducer;
