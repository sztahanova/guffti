export enum TeamMember {
  Guffti = "Guffti",
  Ffteven = "Ffteven",
  Ffanffi = "Ffánffi",
  Kafmer = "Káfmér",
  Bendeguf = "Bendegúf",
  Koko = "Kokó",
  Dagi = "Dagi",
  Kiffvonat = "Kiffvonat",
  MufiMafi = "MufiMafi",
  Roofi = "Rófi", // Rózsi
  Rofi = "Röfi", // Röfi
  Rudi = "Rudi",
  Kornel = "Kornél",
  Kiffmalaf = "Kiffmalaf",
  Greti = "Gréti",
  Refo = "Refő", // 'Rezső'
  DiffkoMaffko = "DiffkóMaffkó",
  Other = "other",
}

export type TeamMemberTileProps = {
  teamMember: TeamMember;
  backgroundColor: string;
};
