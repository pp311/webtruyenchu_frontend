import { create } from 'zustand'

export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

export const useReadingPageStore = create((set) => ({
  bookId: '',
  fontFamily: 'font-sans',
  fontSize: 'text-[20px]',
  lineHeight: 'leading-7',
  backgroundColor: 'bg-base-100',
  textColor: 'text-base-content',
  setFontFamily: (font) => set(() => ({ fontFamily: font })),
  setFontSize: (size) => set(() => ({ fontSize: size })),
  setLineHeight: (height) => set(() => ({ lineHeight: height })),
  setTheme: (theme) => set(() => ({ backgroundColor: theme.backgroundColor, textColor: theme.textColor })),
}))

export const useLoginStore = create((set) => ({
  token: '',
  isLogin: false,
}))
