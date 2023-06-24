import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact } from './operations';
import { handleFulfilledAdd, handleFulfilledDelete, handleFulfilledGet, handlePending, handleRejected } from './handlers';

const initialState = {
  items: [],
  isLoading: false,
  error: null
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers:
    builder => {
        builder
        .addCase(getContacts.pending, handlePending)
        .addCase(getContacts.fulfilled, handleFulfilledGet)
        .addCase(getContacts.rejected, handleRejected)
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, handleFulfilledAdd)
        .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, handleFulfilledDelete)
        .addCase(deleteContact.rejected, handleRejected)
      }
});

export const contactsReducer = contactSlice.reducer;