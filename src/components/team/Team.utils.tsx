import { Image } from "grommet";
import { TeamMember } from "./Team.types";
import { JSX } from "react";

export const getTeamMemberPicture = (teamMember: TeamMember): JSX.Element | null => {
  const pictureName = getTeamMemberPictureName(teamMember);

  if (pictureName != null) {
    return <Image src={`${process.env.PUBLIC_URL}/team/${pictureName}.jpg`} fit="cover" height="100%" style={{ borderRadius: 20 }} />;
  }

  return null;
};

const getTeamMemberPictureName = (teamMember: TeamMember): string | undefined => {
  switch (teamMember) {
    case TeamMember.Bendeguf:
      return "Bendeguf";
    case TeamMember.Ffanffi:
      return "Ffanffi";
    case TeamMember.Greti:
      return "Greti";
    case TeamMember.Kafmer:
      return "Kafmer";
    case TeamMember.Koko:
      return "Koko";
    case TeamMember.Kornel:
      return "Kornel";
    case TeamMember.Refo:
    case TeamMember.Other:
      return undefined;
    case TeamMember.Rofi:
      return "Rofi";
    case TeamMember.Roofi:
      return "Roofi";
    case TeamMember.DiffkoMaffko:
      return "DiffkoMaffko";
    default:
      return teamMember;
  }
};
