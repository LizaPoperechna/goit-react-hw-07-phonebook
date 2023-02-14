import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://63e98c39b120461c6bf13c6e.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', 
    async (_, thunkApi) => {
        try {
            const responce = await axios.get('/contacts');
            return responce.data;
        }
        catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
})


export const addContact = createAsyncThunk('contacts/addContact', 
    async ({name, phone}, thunkApi) => {
        try {
            const responce = await axios.post('/contacts', {name, phone});
            return responce.data;
        }
        catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
})


export const deleteContact = createAsyncThunk('contacts/deleteContact', 
    async (id, thunkApi) => {
        try {
            const responce = await axios.delete(`/contacts/${id}`);
            return responce.data;
        }
        catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
})
