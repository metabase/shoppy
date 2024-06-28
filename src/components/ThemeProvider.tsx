import { MantineProvider, createTheme } from "@mantine/core"
import { useAtom } from "jotai"
import { ReactNode, useMemo } from "react"
import { $theme } from "../store/theme"
import { THEME_CONFIG_MAP } from "../themes"

type Props = { children: ReactNode }

export const ThemeProvider = (props: Props) => {
  const [themeName] = useAtom($theme)

  const theme = useMemo(() => {
    return createTheme(THEME_CONFIG_MAP[themeName].mantine)
  }, [themeName])

  return <MantineProvider theme={theme}>{props.children}</MantineProvider>
}
