
import { create } from "zustand";
// Added
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CounterStore {
    counter: number;
    max: number;
    increment: () => void;
    reset: () => void;
}

const useCounterStore = create<CounterStore>(set => ({
    counter: 0,
    max: 5,
    increment: () => set(store => ({counter: store.counter+1})),
    reset: () => set(() => ({max: 10}))

}));

// process: npm i -D @types/node
if(process.env.NODE_ENV == 'development')  {
    // Pass the name we give to our dev tool and
    // our custom hook
    mountStoreDevtool('Counter Store', useCounterStore);
}

export default useCounterStore;
