import { create } from 'zustand'

export const useModal = create((set) => ({
  modal: null,
  openModal: (name: string) =>
    set((state) => ({ modal: (state.modal = name) })),
  closeModal: () => set((state) => ({ modal: null })),
}))
