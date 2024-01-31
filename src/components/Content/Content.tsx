import { memo } from "react";
import { useRandomNumber } from "../../utils";
import "./Content.css";

const Content = memo(function ({
  open,
}: {
  open: boolean;
}): JSX.Element | null {
  // START - DO NOT EDIT
  const randomNumber = useRandomNumber();
  // END - DO NOT EDIT

  if (!open) return null;

  return (
    <div className='random-number'>
      Your random number is: <p>{randomNumber}</p>
    </div>
  );
});

export default Content;
