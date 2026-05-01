import { Anchor, Box, Text } from "grommet";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TeamMember, TeamMemberTileProps } from "./Team.types";
import { getTeamMemberPicture } from "./Team.utils";

export const TeamMemberTile = ({ teamMember, backgroundColor }: TeamMemberTileProps) => {
  const navigate = useNavigate();

  const navigateToTeamPage = useCallback(() => navigate("/team"), [navigate]);

  return (
    <Box pad="small" background={backgroundColor} fill>
      {teamMember !== TeamMember.Other ? (
        <Box gap="small" style={{ aspectRatio: "1/1", borderRadius: 20 }} flex={{ grow: 1, shrink: 1 }}>
          <Text size="large">{teamMember}</Text>
          <Box height={{ height: "100%" }}>{getTeamMemberPicture(teamMember)}</Box>
        </Box>
      ) : (
        <Anchor label="...éf ffokan máfok!" onClick={navigateToTeamPage} />
      )}
    </Box>
  );
};
