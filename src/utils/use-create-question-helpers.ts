import { useAtom } from "jotai"

import { siteAtom } from "../store/site"
import { isSaveModalOpenAtom } from "../store/save"
import { createQuestionIdAtom } from "../store/create"

import { SANDBOXED_USER_GENERATED_COLLECTIONS } from "../constants/collections"

export function useCreateQuestionHelpers() {
  const [site] = useAtom(siteAtom)
  const [, setSaveModalOpen] = useAtom(isSaveModalOpenAtom)
  const [createdQuestionId, setQuestionId] = useAtom(createQuestionIdAtom)

  const collectionId = SANDBOXED_USER_GENERATED_COLLECTIONS[site]

  return {
    collectionId,
    setQuestionId,
    createdQuestionId,

    onSaveQuestion: () => setSaveModalOpen(false),
  }
}
