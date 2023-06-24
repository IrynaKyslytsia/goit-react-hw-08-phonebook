import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://648b514617f1536d65eacb18.mockapi.io";

export const getContacts = createAsyncThunk('contacts/fetchContacts', async (_, {rejectWithValue}) => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async ({ name, phone }, {rejectWithValue}) => {
    try {
        const { data } = await axios.post('/contacts', { name, phone });
        console.log(data)
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, {rejectWithValue}) => {
    try {
        await axios.delete(`/contacts/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue(error);
    }
});