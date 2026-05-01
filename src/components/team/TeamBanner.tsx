import { Box, Distribution, Text } from "grommet";
import globalStyles from "../../utils/global.styles";
import { TeamMember } from "./Team.types";
import { TeamMemberTile } from "./TeamMemberTile";
import { useMemo } from "react";

const RATIOS: number[] = [50, 30, 20, 10, 5];
const TOP_TEAM_MEMBERS: TeamMember[] = [TeamMember.Ffteven, TeamMember.Ffanffi, TeamMember.Kafmer, TeamMember.Bendeguf, TeamMember.Other];

export const TeamBanner = () => {
  const distributionValues = useMemo(() => {
    return RATIOS.map((ratio: number, index: number) => {
      return {
        value: ratio,
        color: `graph-${index}`,
      };
    });
  }, []);

  return (
    <Box
      height={{ height: "100%", min: "medium" }}
      pad="medium"
      gap="medium"
      background="brand"
      direction="row"
      style={{
        borderRadius: globalStyles.borderRadius,
        display: "flex",
      }}
    >
      <Box width={{ width: "30%" }}>
        <Text size="xlarge">A ffapat</Text>
      </Box>
      <Box width={{ width: "70%" }}>
        <Distribution values={distributionValues}>
          {({ value, color }: { value: number; color: string }) => (
            <TeamMemberTile teamMember={TOP_TEAM_MEMBERS[RATIOS.indexOf(value)]} backgroundColor={color} />
          )}
        </Distribution>
      </Box>
    </Box>
  );
};
