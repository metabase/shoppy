import { atom } from "jotai"

export const createDashboardIdAtom = atom<number | null>(null)
export const createQuestionIdAtom = atom<number | undefined>(undefined)

export const selectedQuestionTemplateIdAtom = atom<number | undefined>(
  undefined,
)

export const resetQuestionAtom = atom(null, (_, set) => {
  set(createQuestionIdAtom, undefined)
  set(selectedQuestionTemplateIdAtom, undefined)
})
