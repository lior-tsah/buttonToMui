import { useRef } from "react";
import "./App.css";
import { ButtonType } from "./components/Button/PButton.model";
import PButtonView from "./components/Button/PButton.view";

function App() {
  const bref = useRef<HTMLButtonElement>(null);
  return (
    <div>
      <PButtonView
        buttonRef={bref}
        color={"primary"}
        type={ButtonType.Reset}
        variant="contained"
        className="danger"
        to="http://localhost:5173/"
      >
        test
      </PButtonView>
    </div>
  );
}

export default App;
