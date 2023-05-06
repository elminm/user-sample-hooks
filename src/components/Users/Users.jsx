/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

const Users = ({ handleSelect }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => setUsers(data));
  }, []);

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="exampleSelect">Users</Label>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            onChange={(e) => handleSelect(e.target.value)}
          >
            <optgroup label="Select User">
              <option value="0">All Users</option>
              {users.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </optgroup>
          </Input>
        </FormGroup>
      </Form>
    </>
  );
};

export default Users;

{
  /* <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input
            id="exampleSelectMulti"
            multiple
            name="selectMulti"
            type="select"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup> */
}
