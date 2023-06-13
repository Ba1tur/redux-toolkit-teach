import axios from "axios";
import { IUser } from "../../models/User";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";
import {createAsyncThunk} from '@reduxjs/toolkit'

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
// 	try {
// 		dispatch(userSlice.actions.userFetching());
// 		const responce = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
// 		dispatch(userSlice.actions.userFetchingSuccess(responce.data)); 
// 		console.log(responce.data);
// 	}catch (e : any){
// 		 dispatch(userSlice.actions.userFetchingError(e.message));
// 	}
// }


export const fetchUsers = createAsyncThunk(
	'user/fetchAll',
	async (_, thunkApi) => {
		const responce = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
		return responce.data;

	}
)