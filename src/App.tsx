import { useRef } from "react";
import "./App.css";
import { ButtonType } from "./components/Button/PButton.model";
import PButton from "./components/Button/PButton";

function App() {
  const bref = useRef<HTMLButtonElement>(null);
  return (
    <div>
      <PButton
        buttonRef={bref}
        color={"primary"}
        type={ButtonType.Reset}
        variant="outlined"
        // className="danger"
        size="medium"
        to="http://localhost:5173/"
      >
        test
      </PButton>
     
    </div>
  );
}

export default App;
