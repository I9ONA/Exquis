import { createStore } from "redux";
import ShopsParfumesdata from '../Data/ShopsParfumes.json';
import MenParfumesdata from '../Data/Menparfumes.json';
import WomenParfumesdata from '../Data/Womenparfumes.json';

const initialState = {
  Cart: [],
  ShopsParfumes: ShopsParfumesdata,
  MenParfumes: MenParfumesdata,
  WomenParfumes: WomenParfumesdata
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, Cart: [...state.Cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, Cart: state.Cart.filter((product) => product.id !== action.payload) };
    case 'DELETE_PRODUCT':
      return { ...state, ShopsParfumes: state.ShopsParfumes.filter((product) => product.id !== action.payload) };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        ShopsParfumes: state.ShopsParfumes.map((product) =>
          product.id === action.payload.id ? { ...product, ...action.payload.data } : product
        ),
      };
    case 'ADD_SHOP_PRODUCT':
      return { ...state, ShopsParfumes: [...state.ShopsParfumes, action.payload] };
    case 'DELETE_MEN_PARFUME':
      return { ...state, MenParfumes: state.MenParfumes.filter((product) => product.id !== action.payload) };
    case 'UPDATE_MEN_PARFUME':
      return {
        ...state,
        MenParfumes: state.MenParfumes.map((product) =>
          product.id === action.payload.id ? { ...product, ...action.payload.data } : product
        ),
      };
    case 'ADD_MEN_PARFUME':
      return { ...state, MenParfumes: [...state.MenParfumes, action.payload] };
    case 'DELETE_WOMEN_PARFUME':
      return { ...state, WomenParfumes: state.WomenParfumes.filter((product) => product.id !== action.payload) };
    case 'UPDATE_WOMEN_PARFUME':
      return {
        ...state,
        WomenParfumes: state.WomenParfumes.map((product) =>
          product.id === action.payload.id ? { ...product, ...action.payload.data } : product
        ),
      };
    case 'ADD_WOMEN_PARFUME':
      return { ...state, WomenParfumes: [...state.WomenParfumes, action.payload] };
    default:
      return state;
  }
};

const storeApp = createStore(reducer);

export default storeApp;