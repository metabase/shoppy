import { atom } from "jotai"

export const createDashboardIdAtom = atom<number | null>(null)

export const createQuestionIdAtom = atom<number | undefined>(undefined)

/**
 * Initially, this is the question id of the selected template question.
 * After the user made some changes and saved the question as a new question,
 * this then becomes the id of the newly created question.
 */
export const templateOrSavedQuestionIdAtom = atom<number | undefined>(undefined)

export const resetQuestionAtom = atom(null, (_, set) => {
  set(createQuestionIdAtom, undefined)
  set(templateOrSavedQuestionIdAtom, undefined)
})
