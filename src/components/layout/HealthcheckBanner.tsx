import { Anchor, Flex, Stack, Text } from "@mantine/core"
import { ComponentProps, useEffect, useRef, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useLocation } from "wouter"
import { METABASE_INSTANCE_HEALTHCHECK_INTERVAL_MS } from "../../constants/metabase-instance-healthcheck-interval"
import { queryMetabaseInstanceStatus } from "../../utils/query-metabase-instance-status"
import { MetabaseHealthStatus } from "../../types/metabase-health-status"
import { CustomIcon } from "../CustomIcon"
import { Icon } from "@iconify/react"

type BannerInfo = {
  iconName: ComponentProps<typeof CustomIcon>["icon"]
  message: string
}

export const HealthcheckBanner = () => {
  const [location, navigate] = useLocation()
  const [banner, setBanner] = useState<BannerInfo | null>(null)

  const previousStatusRef = useRef<MetabaseHealthStatus | null>(null)

  const shouldPoll = previousStatusRef.current !== "ok"

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["health"],
    queryFn: queryMetabaseInstanceStatus,
    refetchInterval: shouldPoll
      ? METABASE_INSTANCE_HEALTHCHECK_INTERVAL_MS
      : false,
  })

  const handlePageRefresh = () => {
    setBanner(null)
    window.location.reload()
  }

  useEffect(() => {
    refetch()
  }, [location, refetch])

  useEffect(() => {
    const currentStatus = data?.status
    const previousStatus = previousStatusRef.current

    if (!currentStatus || isLoading) {
      return
    }

    const isRecovered =
      previousStatus !== null &&
      previousStatus !== "ok" &&
      currentStatus === "ok"

    previousStatusRef.current = currentStatus

    if (isRecovered) {
      setBanner(null)
      navigate(location, { replace: true })

      return
    }

    switch (currentStatus) {
      case "ok":
        setBanner(null)
        break
      case "maintenance":
        setBanner({
          iconName: "boat",
          message:
            "The embedding demo is undergoing maintenance. Things may not work as expected for a few minutes.",
        })
        break
      default:
        setBanner({
          iconName: "boat",
          message:
            "Sorry, the embedding demo is down right now. We're looking into it.",
        })
        break
    }
  }, [data, isLoading])

  if (!banner) {
    return null
  }

  return (
    <Stack
      pos="fixed"
      top="0"
      left="0"
      w="100%"
      h="100%"
      bg="#f4f4f4"
      align="center"
      justify="center"
      gap="24"
      style={{ zIndex: 9999 }}
    >
      <CustomIcon icon={banner.iconName} fill="none" size={112} />

      <Text c="dark" size="md">
        {banner.message}
      </Text>

      <Anchor c="blue" component="button" onClick={handlePageRefresh}>
        <Flex className="gap-x-2" align="center">
          <Icon icon="tabler:reload" height={16} inline /> Refresh this page
        </Flex>
      </Anchor>
    </Stack>
  )
}
