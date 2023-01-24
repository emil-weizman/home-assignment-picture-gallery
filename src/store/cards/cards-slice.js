import { createSlice } from '@reduxjs/toolkit'
import { CardsThunks } from './cards-thunks'


const initialState = {
    allCards: []
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(CardsThunks.getAllCards.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(CardsThunks.getAllCards.fulfilled, (state, action) => {

            state.allCards = action.payload
            state.error = null
            state.loading = false
        })
        builder.addCase(CardsThunks.getAllCards.rejected, (state, action) => {
            state.loading = false
            if (action.payload) {
                state.error = action.payload.errorMessage
            } else {
                const { name, code, message } = action.error
                state.error = `name: ${name}; code: ${code} messager: ${message}`
            }
        })
    },
})

export const CardsActions = cardsSlice.actions
export const CardsReducer = cardsSlice.reducer


export const selectAllCards = (state) => state.cards.allCards





