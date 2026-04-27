import { Flex, Button } from "@mantine/core"
import { useAtom } from "jotai"
import { Icon } from "@iconify/react"

import { siteAtom } from "../store/site"

import { SITES } from "../constants/sites"

const SITE_LABELS: Record<string, string> = {
  proficiency: "E-learning",
  stitch: "Apparel",
  luminara: "Beauty",
  pug: "Pet supplies",
}

export const SiteSwitcher = () => {
  const [currentSite, setCurrentSite] = useAtom(siteAtom)

  return (
    <Flex align="center" gap="xs" ff="Lato, sans-serif" w={{ base: "100%", sm: "auto" }}>
      {SITES.map((site) => {
        const active = currentSite === site.key

        return (
          <Button
            key={site.key}
            variant={active ? "filled" : "subtle"}
            size="xs"
            radius="xl"
            color="#EAEAEA"
            c={active ? "#2B2F32" : "#BFC1C1"}
            bg={active ? "#EAEAEA" : "rgba(255,255,255,0.15)"}
            style={{ border: "none" }}
            className={active ? "full-width-on-mobile" : "full-width-on-mobile !bg-[rgba(255,255,255,0.15)] hover:!bg-[rgba(255,255,255,0.25)]"}
            data-testid={`site-switcher-button-${site.key}`}
            onClick={() => setCurrentSite(site.key)}
            leftSection={
              <Icon icon={site.icon} fontSize={14} overflow="visible" />
            }
          >
            {SITE_LABELS[site.key]}
          </Button>
        )
      })}
    </Flex>
  )
}
