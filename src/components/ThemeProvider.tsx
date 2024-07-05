import { MantineProvider, createTheme } from "@mantine/core"
import { useAtom } from "jotai"
import { ReactNode, useEffect, useMemo, useState } from "react"
import { themeAtom } from "../store/theme"
import { THEME_CONFIG_MAP } from "../themes"

type Props = { children: ReactNode }

export const ThemeProvider = (props: Props) => {
  const [themeName] = useAtom(themeAtom)

  const theme = useMemo(() => {
    return createTheme(THEME_CONFIG_MAP[themeName].mantine)
  }, [themeName])

  // apply the CSS variables to the body, depending on the theme.
  // this ensures the variables are applied in portals as well.
  useEffect(() => {
    document.body.setAttribute("data-theme", themeName)
  }, [themeName])

  return <MantineProvider theme={theme}>{props.children}</MantineProvider>
}
