import { MetabaseClickActionPluginsConfig } from "@metabase/embedding-sdk-react"

import { productIdForClickActionModalAtom } from "../store/click-actions"
import { store } from "../store"

const ORDERS_TABLE_ID = 38
const PRODUCTS_TABLE_ID = 37

export const withProductClickAction =
  ({
    onBeforeOpenModal,
  }: {
    onBeforeOpenModal?: () => void
  } = {}): MetabaseClickActionPluginsConfig =>
  (clickActions, clicked) => {
    // Are we clicking on a column from the orders table?
    const isOrdersColumn = clicked.column?.table_id === ORDERS_TABLE_ID

    // Are we clicking on a column from the products table?
    const isProductsColumn = clicked.column?.table_id === PRODUCTS_TABLE_ID

    if (isOrdersColumn || isProductsColumn) {
      const productId = Number(
        clicked.data?.find((data) => data.col?.name === "product_id")?.value,
      )

      // Do not show the click action if we cannot get the product id
      if (isNaN(productId)) {
        return clickActions
      }

      return [
        {
          buttonType: "horizontal",
          name: "product-click-action",
          section: "records",
          type: "custom",
          icon: "search",
          title: "See this Product",
          onClick: ({ closePopover }) => {
            closePopover()
            onBeforeOpenModal?.()

            store.set(productIdForClickActionModalAtom, productId)
          },
        },
        ...clickActions,
      ]
    }

    return clickActions
  }
