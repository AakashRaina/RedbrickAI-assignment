import { useEffect, memo, useState } from "react";

// START - DO NOT EDIT
function useRandomNumber(): number {
  const randomNumber = Math.trunc(Math.random() * 1000);
  return randomNumber;
}
// END - DO NOT EDIT

function useGetTimer(): number {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const intervalTimerId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalTimerId);
    };
  }, []);

  return time;
}

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

const MainPage = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const time = useGetTimer();

  return (
    <div>
      <div>The page loaded {time} seconds ago</div>

      <button onClick={() => setOpen(true)}>Generate random number</button>

      <Content open={open} />
    </div>
  );
};

export default MainPage;
