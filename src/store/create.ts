import { atom } from "jotai"

export const createDashboardIdAtom = atom<string | null>(null)

export const createQuestionIdAtom = atom<string | undefined>(undefined)

export const resetQuestionAtom = atom(null, (_, set) => {
  set(createQuestionIdAtom, undefined)
})
