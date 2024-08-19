import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

type ItemTypeRes = {
  id: string
}

export interface ItemState {
  item: ItemTypeRes[]
}

const initialState: ItemState = {
  item: []
}

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    addArr: (state, action: PayloadAction<ItemTypeRes[]>) => {
      // state.item = [...state.item, ...payload.payload]
      const existingIds = new Set(state.item.map(item => item.id));
      const newItems = action.payload.filter(item => !existingIds.has(item.id));
      state.item = [...state.item, ...newItems];
    },
    addToBasket: (state, action: PayloadAction<ItemTypeRes>) => {
      state.item = [...state.item, action.payload]
    },
  },
})

export const {
  addArr,
} = itemSlice.actions

export default itemSlice.reducer
