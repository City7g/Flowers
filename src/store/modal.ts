import { create } from 'zustand'

type TModal = {
  modal: null | string
  openModal: (name: string) => void
  closeModal: () => void
}

export const useModal = create<TModal>()((set) => ({
  modal: null,
  openModal: (name) => set((state) => ({ modal: (state.modal = name) })),
  closeModal: () => set((state) => ({ modal: (state.modal = null) })),
}))
