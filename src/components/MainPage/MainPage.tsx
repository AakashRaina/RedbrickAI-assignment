import { useState } from "react";
import { useGetTimer } from "../../hooks";
import Content from "../Content/Content";

import "./MainPage.css";

const MainPage = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const time = useGetTimer();

  return (
    <div className='content-container'>
      <div className='timer'>The page loaded {time} seconds ago</div>

      <button onClick={() => setOpen((prev) => !prev)}>
        Generate random number
      </button>

      <Content open={open} />
    </div>
  );
};

export default MainPage;
