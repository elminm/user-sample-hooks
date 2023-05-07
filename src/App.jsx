import { useState } from "react";
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";
import { Form, FormGroup, Input, Label } from "reactstrap";

const App = () => {
  const [selectedId, setSelectedId] = useState(0);
  const [value, setValue] = useState("");

  const handleSelect = (value) => {
    if (value == "0") {
      setSelectedId(0);
    }
    setSelectedId(value);
  };

  return (
    <div style={{ padding: "5%" }}>
      <Form>
        <FormGroup>
          <Label for="search" hidden>
            Search
          </Label>
          <Input
            id="search"
            name="search"
            placeholder="Search Users..."
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </FormGroup>
      </Form>
      <Users handleSelect={handleSelect} />
      <Posts selectedId={selectedId} value={value} />
    </div>
  );
};

export default App;
