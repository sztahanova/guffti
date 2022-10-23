import { Button, Footer as GrommetFooter } from "grommet";

export const Footer = () => {
  return (
    <GrommetFooter background='brand' height="xxsmall" justify="center" gap="medium">
      <Button
        label="Dfí Dí Pí Ár"
        onClick={() =>
          alert(
            "Effer valamikor itt leff a GDPR leíráff, ha FFita nem leff ilyen luffta!"
          )
        }
      />

      <Button
        label="Á Eff Ef"
        onClick={() =>
          alert(
            "Effer valamikor itt leff af ÁSZF leíráff, ha FFita nem leff ilyen luffta!"
          )
        }
      ></Button>
    </GrommetFooter>
  );
};
