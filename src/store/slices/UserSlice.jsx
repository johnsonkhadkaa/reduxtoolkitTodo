import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name : 'user',
    initialState : [],
    reducers : {
        addUser(state , action){
            state.push(action.payload)
        },
        removeUser(state , action){
            // console.log('Hi '+ action.payload)
            state.splice(action.payload , 1)
        },
        clearAllUsers(state , action){
            // console.log('Hi,all user removed')
            return state = []
        }
    },
})

console.log(userSlice.actions)

export default userSlice.reducer;
export const {addUser ,removeUser ,clearAllUsers} = userSlice.actions