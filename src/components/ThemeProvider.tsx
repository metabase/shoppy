import { MantineProvider, createTheme } from "@mantine/core"
import { useAtom } from "jotai"
import { ReactNode, useEffect, useMemo, useState } from "react"
import { siteAtom } from "../store/site"
import { SITE_CONFIG_MAP } from "../constants/sites"

type Props = { children: ReactNode }

export const ThemeProvider = (props: Props) => {
  const [site] = useAtom(siteAtom)

  const theme = useMemo(() => {
    return createTheme(SITE_CONFIG_MAP[site].mantine)
  }, [site])

  // apply the CSS variables to the body, depending on the theme.
  // this ensures the variables are applied in portals as well.
  useEffect(() => {
    document.body.setAttribute("data-theme", site)
  }, [site])

  return <MantineProvider theme={theme}>{props.children}</MantineProvider>
}
