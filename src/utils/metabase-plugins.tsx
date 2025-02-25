import { MetabaseClickActionPluginsConfig } from "@metabase/embedding-sdk-react"

import { productIdForClickActionModalAtom } from "../store/click-actions"
import { store } from "../store"

const ORDERS_TABLE_ID = 53
// const PRODUCTS_TABLE_ID = 45

export const withProductClickAction =
  ({
    onBeforeOpenModal,
  }: {
    onBeforeOpenModal?: () => void
  } = {}): MetabaseClickActionPluginsConfig =>
  (clickActions, clicked) => {
    const isOrdersColumn = clicked.column?.table_id === ORDERS_TABLE_ID
    // const isProductsColumn = clicked.column?.table_id === PRODUCTS_TABLE_ID

    if (isOrdersColumn) {
      const productId = Number(
        clicked.data?.find((data) => data.col?.name === "product_id")?.value,
      )

      return [
        {
          buttonType: "horizontal",
          name: "product-click-action",
          section: "records",
          type: "custom",
          icon: "search",
          title: "See this Product",
          onClick: ({ closePopover }) => {
            console.log("clicked", clicked)
            console.log("clicked.column.table_id", clicked.column?.table_id)
            console.log("clicked.product_id", productId)

            closePopover()

            if (isNaN(productId)) {
              return
            }

            onBeforeOpenModal?.()
            store.set(productIdForClickActionModalAtom, productId)
          },
        },
        ...clickActions,
      ]
    }

    return clickActions
  }
