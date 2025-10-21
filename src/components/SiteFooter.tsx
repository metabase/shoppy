import { Anchor, Text, Image, Group, Divider } from "@mantine/core"
import { Icon } from "@iconify/react"
import { useAtom } from "jotai"
import { siteAtom } from "../store/site"
import { CustomIcon } from "./CustomIcon"

export const SiteFooter = () => {
  const [site] = useAtom(siteAtom)

  const logoUrl =
    site === "stitch"
      ? "/assets/metabase-logo-without-wordmark-dark.svg"
      : "/assets/metabase-logo-without-wordmark-light.svg"

  return (
    <Group justify="center" align="center" py="lg">
      <Anchor
        href="https://www.metabase.com/?utm_source=referral&utm_medium=banner&utm_campaign=shoppy-demo"
        target="_blank"
        rel="noreferrer"
        underline="never"
      >
        <Group>
          <Image src={logoUrl} />

          <Text c="light-grey">Visit Metabase.com</Text>
        </Group>
      </Anchor>

      <Divider
        orientation="vertical"
        color="light-grey"
        opacity={0.4}
        display={{ base: "none", xs: "block" }}
      />

      <Group justify="center" align="center">
        <Anchor
          href="https://github.com/metabase/shoppy"
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            icon="mdi:github"
            fontSize="24px"
            color="var(--color-footer-icon)"
          />
        </Anchor>

        <Anchor
          href="https://www.metabase.com/docs/latest/embedding/sdk/introduction?utm_source=referral&utm_medium=banner&utm_campaign=shoppy-demo"
          target="_blank"
          rel="noreferrer"
        >
          <CustomIcon
            icon="book"
            size={22}
            fill="var(--color-footer-icon)"
            stroke="var(--color-footer-icon)"
            className="pt-[2px]"
          />
        </Anchor>
      </Group>
    </Group>
  )
}
