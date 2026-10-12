import { create } from "zustand"
import { api } from "../api/api"

export const useItemsStore = create((set) => ({
    items: [],
    getItem: async () => {
        try{
            const res = await api.itemsPage()
            set({items: res.data})

        }catch (error) {
        console.error(error)}
    }
}))