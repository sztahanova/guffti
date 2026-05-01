import { Box, Card, Grid, Text } from "grommet";
import { TeamMember } from "./Team.types";
import { getTeamMemberPicture } from "./Team.utils";

const team: TeamMember[] = [
  TeamMember.Guffti,
  TeamMember.Ffteven,
  TeamMember.Ffanffi,
  TeamMember.Bendeguf,
  TeamMember.Kafmer,
  TeamMember.Koko,
  TeamMember.Dagi,
  TeamMember.Kiffvonat,
  TeamMember.MufiMafi,
  TeamMember.Roofi,
  TeamMember.Rofi,
  TeamMember.Rudi,
  TeamMember.Kornel,
  TeamMember.Kiffmalaf,
  TeamMember.Greti,
  TeamMember.Refo,
  TeamMember.DiffkoMaffko,
];

export const TeamPage = () => {
  return (
    <Box style={{ width: "100%", height: "100%" }} pad="medium">
      <Grid columns="20%" rows="medium" gap="small">
        {team.map((teamMember: TeamMember, index: number) => (
          <Card pad="medium" key={teamMember} background={`graph-${index % 5}`} gap="small">
            <Text size="large" style={{ fontWeight: "bold" }}>
              {teamMember}
            </Text>
            <Box height={{ height: "100%" }}>{getTeamMemberPicture(teamMember)}</Box>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};
