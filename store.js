import create from "zustand";

export const musicStore = create((set) => ({
    music: {

    },
    setMusic: (music) => set({ music }),
}));