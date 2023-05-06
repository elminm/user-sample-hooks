import { useState } from "react";
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";

const App = () => {
  const [selectedId, setSelectedId] = useState(0);
  const handleSelect = (value) => {
    if (value == "0") {
      setSelectedId(0);
    }
    setSelectedId(value);
  };
  return (
    <div>
      <Users handleSelect={handleSelect} />
      <Posts selectedId={selectedId} />
    </div>
  );
};

export default App;
