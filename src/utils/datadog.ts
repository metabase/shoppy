import { datadogRum } from "@datadog/browser-rum"

import {
  DATADOG_APPLICATION_ID,
  DATADOG_CLIENT_TOKEN,
  DATADOG_ENV,
  DATADOG_SERVICE,
  DATADOG_SITE,
} from "../constants/env"

/**
 * Initialize Datadog RUM for performance monitoring.
 * Only initializes if applicationId and clientToken are configured.
 */
export function initDatadog() {
  if (!DATADOG_APPLICATION_ID || !DATADOG_CLIENT_TOKEN) {
    return
  }

  datadogRum.init({
    applicationId: DATADOG_APPLICATION_ID,
    clientToken: DATADOG_CLIENT_TOKEN,
    site: DATADOG_SITE,
    service: DATADOG_SERVICE,
    env: DATADOG_ENV,
    sessionSampleRate: 100,
    sessionReplaySampleRate: 0,
    trackUserInteractions: false,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: "mask-user-input",
  })
}
