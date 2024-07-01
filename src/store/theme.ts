import { atom } from "jotai"

import type { ThemeKey } from "../types/theme"

export const $theme = atom<ThemeKey>("dark")
