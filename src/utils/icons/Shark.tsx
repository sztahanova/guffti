import { Blank, IconProps } from "grommet-icons";
import { ReactComponent as SharkIcon } from "./shark_24x24.svg";

export const Shark = (props: IconProps) => {
  return (
    <Blank {...props}>
      <SharkIcon />
    </Blank>
  );
};
