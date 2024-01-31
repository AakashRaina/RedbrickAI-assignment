import { memo } from "react";
import { useRandomNumber } from "../../utils";

const Content = memo(function ({
  open,
}: {
  open: boolean;
}): JSX.Element | null {
  // START - DO NOT EDIT
  const randomNumber = useRandomNumber();
  // END - DO NOT EDIT

  if (!open) return null;

  return <div>Your random number is: {randomNumber}</div>;
});

export default Content;
