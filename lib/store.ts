import { create } from 'zustand'

type Product = {
  _id: string
  name: string
  price: number
  quantity?: number
  image?: string
}

type CartStore = {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  increment: (id: string) => void
  decrement: (id: string) => void
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item._id === product._id)
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item._id === product._id
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          ),
        }
      }
      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      }
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== id),
    })),

  clearCart: () => set({ cart: [] }),

  increment: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item._id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      ),
    })),

  decrement: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item._id === id
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter((item) => item.quantity && item.quantity > 0),
    })),
}))
