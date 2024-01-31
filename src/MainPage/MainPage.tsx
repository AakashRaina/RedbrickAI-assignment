import React, { useEffect, memo } from "react";

// START - DO NOT EDIT
function useRandomNumber() {
  const randomNumber = Math.trunc(Math.random() * 1000);
  return randomNumber;
}
// END - DO NOT EDIT

function useGetTimer() {
  const [time, setTime] = React.useState<number>(0);

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

const Content = memo(function ({ open }: { open: boolean }) {
  // START - DO NOT EDIT
  const randomNumber = useRandomNumber();
  // END - DO NOT EDIT

  if (!open) return null;

  return <div>Your random number is: {randomNumber}</div>;
});

const MainPage: React.FC = () => {
  const [open, setOpen] = React.useState(false);

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
