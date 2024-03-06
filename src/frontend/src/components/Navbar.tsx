import { NavLink } from "@mantine/core";
import { IconHome2, IconReportAnalytics } from "@tabler/icons-react";

type Props = {    
    onAnalyticsClick: () => void;
}

export function Navbar(props: Props) {
  return (
    <>
      <NavLink
        href="#required-for-focus"
        label="Analytics"
        onClick={props.onAnalyticsClick}
        leftSection={<IconReportAnalytics size="1rem" stroke={1.5} />}
      />
    </>
  );
}