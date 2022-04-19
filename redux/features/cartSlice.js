import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const index = state.items.findIndex(x => x.movie.id == action.payload.id)
            if(index == -1){
                state.items = [...state.items, {movie: action.payload, count: 1, date: null}];
            }
        },
        setCount: (state, action) => {
            const index = state.items.findIndex(x => x.movie.id == action.payload.movie.id)
            if(index > -1){
                state.items[index] = {movie: action.payload.movie, count: action.payload.count, date: state.items[index].count};
            }
        },
        setDate: (state, action) => {
            const index = state.items.findIndex(x => x.movie.id == action.payload.movie.id)
            if(index > -1){
                state.items[index] = {movie: action.payload.movie, count: state.items[index].count, date: action.payload.date};
            }
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex(x => x.movie.id == action.payload.id);
            if(index > -1){
                state.items.splice(index, 1);
            }
        },
        clearItems: (state, action) => {
            state.items = [];
        }
    }
});

export const { addItem, clearItems, removeItem, setCount, setDate } = cartSlice.actions
export const getItems = (state) => state.items;
export default cartSlice.reducer