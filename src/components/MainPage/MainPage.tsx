import { useState } from "react";
import { useGetTimer } from "../../hooks";
import Content from "../Content/Content";

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
