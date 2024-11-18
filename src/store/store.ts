import { create } from 'zustand'

type Store = {
    count: number
    inc: () => void
}

const useStore = create<Store>()((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
}));

export const useStoreCount = () => useStore((store) => store.count);
export const useStoreInc = () => useStore((store) => store.inc);
export const getStoreState = () => useStore.getState();