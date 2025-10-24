import { useAtom } from "jotai"
import { CreateDashboardModal } from "@metabase/embedding-sdk-react"
import { navigate } from "wouter/use-browser-location"

import { RemountOnSiteChange } from "../../../components/RemountOnSiteChange"

import { siteAtom } from "../../../store/site"

import { SANDBOXED_USER_GENERATED_COLLECTIONS } from "../../../constants/collections"

export const NewDashboardPage = () => {
  const [site] = useAtom(siteAtom)
  const collectionId = SANDBOXED_USER_GENERATED_COLLECTIONS[site]

  return (
    <RemountOnSiteChange>
      <CreateDashboardModal
        onCreate={(dashboard: { entity_id: string }) =>
          navigate(`/admin/analytics/${dashboard.entity_id}`)
        }
        initialCollectionId={collectionId}
        onClose={() => navigate("/admin/analytics/custom")}
      />
    </RemountOnSiteChange>
  )
}
