import type { Guide } from "@/lib/guide-types"
import { guidesA } from "./a"
import { guidesB } from "./b"
import { guidesC } from "./c"
import { guidesD } from "./d"
import { guidesE } from "./e"
import { guidesF } from "./f"
import { guidesG } from "./g"
import { guidesH } from "./h"

export type { Guide } from "@/lib/guide-types"

export const guides: Guide[] = [...guidesA, ...guidesB, ...guidesC, ...guidesD, ...guidesE, ...guidesF, ...guidesG, ...guidesH]

export function getGuide(slug: string) {
  return guides.find(guide => guide.slug === slug) ?? null
}
