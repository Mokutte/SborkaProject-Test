import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SneakerInfo, SneakerState, BasketState } from "./types";
import { getInfoFromLS, getBasketFromLS } from "../utils/getValueFromLS";

export interface SneakersState {
  sneakers: SneakerState[];
  basket: BasketState[];
  sneakerInfo: SneakerInfo;
  basketIsOpen: boolean;
}

const basketLS = getBasketFromLS();
const sneakerInfoLS = getInfoFromLS();

const initialState: SneakersState = {
  sneakers: [
    {
      id: 1,
      name: "New Balance 574 Vintage Brights",
      img: "574",
      imghd: "574HD",
      price: 650,
    },
    {
      id: 2,
      name: "New Balance Made in UK 920 Chinese New Year",
      img: "920",
      imghd: "920HD",
      price: 1200,
    },
    {
      id: 3,
      name: "New Balance 373 Modern Classics",
      img: "373",
      imghd: "373HD",
      price: 800,
    },
    {
      id: 4,
      name: "New Balance Made in UK 670 Chinese New Year",
      img: "670",
      imghd: "670HD",
      price: 780,
    },
    {
      id: 5,
      name: "New Balance X-Racer Utility",
      img: "xracer",
      imghd: "xracerHD",
      price: 1000,
    },
    {
      id: 6,
      name: "New Balance 5740 Think Colorfully",
      img: "5740",
      imghd: "5740HD",
      price: 940,
    },
  ],
  basket: basketLS,
  sneakerInfo: sneakerInfoLS,
  basketIsOpen: false,
};

export const sneakersSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addSneakers(state, action: PayloadAction<BasketState>) {
      const findItem = state.basket.find((obj) => obj.id === action.payload.id);
      if (findItem?.counter) {
        findItem.counter++;
      } else {
        state.basket.push({
          ...action.payload,
          counter: 1,
        });
      }
    },
    incerment(state, action: PayloadAction<BasketState>) {
      const findItem = state.basket.find((obj) => obj.id === action.payload.id);
      if (findItem?.counter) {
        findItem.counter++;
      }
    },
    decerment(state, action: PayloadAction<BasketState>) {
      const findItem = state.basket.find((obj) => obj.id === action.payload.id);

      const delItem = () => {
        const newBasket = state.basket.filter(
          (value: any) => value.id !== action.payload.id
        );
        state.basket = newBasket;
      };
      if (findItem?.counter) {
        findItem?.counter !== 1 ? findItem.counter-- : delItem();
      }
    },
    deleteItem(state, action: PayloadAction<BasketState>) {
      const newBasket = state.basket.filter(
        (value: any) => value.id !== action.payload.id
      );
      state.basket = newBasket;
    },
    addInfo(state, action: PayloadAction<SneakerInfo>) {
      state.sneakerInfo = action.payload;
    },
    switchBasket(state) {
      state.basketIsOpen = !state.basketIsOpen;
    },
  },
});

export const {
  addSneakers,
  incerment,
  decerment,
  deleteItem,
  addInfo,
  switchBasket,
} = sneakersSlice.actions;

export default sneakersSlice.reducer;
