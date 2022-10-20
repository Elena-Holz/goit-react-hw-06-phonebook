import { configureStore } from '@reduxjs/toolkit'

// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import contactsSlice from "./contacts/contactsSlice";
import filterReducer from "./filter/filterSlice";

// const contactsPersistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsSlice.reducer);

export const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        filter: filterReducer
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     }),
})
// export const persistor = persistStore(store);


// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { contactReducer } from './contactSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);