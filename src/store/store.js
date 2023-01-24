import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CardsReducer } from "./cards/cards-slice";

const rootReducer = combineReducers({
    cards: CardsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});