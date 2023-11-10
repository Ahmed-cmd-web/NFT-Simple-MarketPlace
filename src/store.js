import { create } from 'zustand'

const useStore = create((set) => ({
  basket: [],
  addTOBasket: (id) =>
    set((state) => ({
      basket: state.basket.includes(id) ? state.basket : [...state.basket, id],
    })),
  removeFromBasket: (id) =>
    set((state) => ({ basket: [...state.basket.filter((e) => e !== id)] })),
}))

export default useStore
