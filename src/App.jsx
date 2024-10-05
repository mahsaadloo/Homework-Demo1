import { useState } from "react";
import { ButtonContent, Navbar } from "./components";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  };

  return (
    <>
      <Navbar onSelectButton={handleSelect} selectedTopic={selectedTopic} />
      <ButtonContent selectedTopic={selectedTopic} />
    </>
  );
}

export default App;
