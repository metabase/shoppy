import { SVGProps } from "react"

const icons = {
  filter:
    "M1 4.5c0-.69.56-1.25 1.25-1.25h11.5a1.25 1.25 0 1 1 0 2.5H2.25C1.56 5.75 1 5.19 1 4.5zM4 9a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm2 4.25a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1z",
  sum: "M2.295 2.745A.75.75 0 0 1 3 2.25h9a.75.75 0 1 1 0 1.5H5.072l3.486 2.906c.84.7.84 1.989 0 2.688L5.072 12.25h6.763a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.48-1.326l5.078-4.232a.25.25 0 0 0 0-.384L2.52 3.576a.75.75 0 0 1-.225-.831z",
  notebook:
    "M3.5 3a.5.5 0 0 1 .5.5V5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V3.5A.5.5 0 0 1 2 3h1.5zM11.5 3.5A.5.5 0 0 0 11 3H6a.5.5 0 0 0-.5.5V5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V3.5zM14.5 7.25a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-1.5zM4 7.25a.5.5 0 0 0-.5-.5H2a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-1.5zM3.5 10.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V11a.5.5 0 0 1 .5-.5h1.5zM10 11a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h3.5a.5.5 0 0 0 .5-.5V11z",
} as const satisfies Record<string, string>

type CustomIconProps = SVGProps<SVGSVGElement> & {
  icon: keyof typeof icons
  size?: number
}

export const CustomIcon = ({
  icon,
  size = 16,
  fill,
  ...props
}: CustomIconProps) => (
  <svg
    viewBox="0 0 16 16"
    fill={fill ?? "var(--icon-primary)"}
    width={size}
    height={size}
    {...props}
  >
    <path d={icons[icon]} />
  </svg>
)
