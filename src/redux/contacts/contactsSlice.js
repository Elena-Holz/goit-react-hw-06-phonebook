import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact: {
            reducer: (store, {payload}) => {
                store.push(payload);
            },
            prepare: (data) => {
                return {
                    payload: {
                        ...data,
                        id: nanoid()
                    }
                }
            }
        },
        removeContact: (store, {payload}) => store.filter(({id}) => id !== payload)
    }
})



export const { addContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     filterName: '',
//   },
//   reducers: {
//     addContact(state, action) {
//       state.items.push(action.payload);
//     },
//     deleteContact(state, action) {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     filterContacts(state, action) {
//       state.filterName = action.payload;
//     },
//   },
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['items'],
// };

// export const contactReducer = persistReducer(
//   persistConfig,
//   contactSlice.reducer
// );

// export const { addContact, deleteContact, filterContacts } =
//   contactSlice.actions;