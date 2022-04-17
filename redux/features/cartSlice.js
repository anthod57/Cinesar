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
            if(index > -1){
                state.items = [...state.items, {movie: action.payload, count: state.items[index].count + 1}];
                state.items.splice(index, 1);
            }else{
                state.items = [...state.items, {movie: action.payload, count: 1}];
            }

            console.log(state.items);
        },
        clearItems: (state, action) => {
            state.items = [];
        }
    }
});

export const { addItem, clearItems } = cartSlice.actions
export const getItems = (state) => state.items;
export default cartSlice.reducer