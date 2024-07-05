import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import type { ThemeKey } from "../types/theme"

export const themeAtom = atomWithStorage<ThemeKey>("theme", "stitch")
