import { useAtom } from "jotai"
import { siteAtom } from "../store/site"
import { SANDBOXED_USER_GENERATED_COLLECTIONS } from "../constants/collections"
import { isSaveModalOpenAtom } from "../store/save"

export function useCreateQuestion() {
  const [site] = useAtom(siteAtom)
  const [, setSaveModalOpen] = useAtom(isSaveModalOpenAtom)

  const collectionId = SANDBOXED_USER_GENERATED_COLLECTIONS[site]

  return {
    collectionId,
    closeSaveModal: () => setSaveModalOpen(false),
  }
}
