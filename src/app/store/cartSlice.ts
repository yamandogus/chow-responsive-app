import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
}

// LocalStorage'dan başlangıç state'ini al
const loadCartState = (): CartState => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return {
        items: [],
        totalQuantity: 0
      };
    }
    return JSON.parse(serializedState);
  } catch {
    return {
      items: [],
      totalQuantity: 0
    };
  }
};

// LocalStorage'a state'i kaydet
const saveCartState = (state: CartState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cart', serializedState);
  } catch {
    // Hata durumunda loglama yapılabilir
    console.error('Could not save cart state');
  }
};

const initialState: CartState = loadCartState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      saveCartState(state);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      saveCartState(state);
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
        saveCartState(state);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      saveCartState(state);
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;