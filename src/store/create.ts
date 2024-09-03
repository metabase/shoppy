import { atom } from "jotai"

export const createDashboardIdAtom = atom<number | null>(null)
export const selectedQuestionTemplateIdAtom = atom<number | null>(null)

export const createQuestionKeyAtom = atom<number>(0)

export const resetQuestionAtom = atom(null, (get, set) =>
  set(createQuestionKeyAtom, get(createQuestionKeyAtom) + 1),
)
