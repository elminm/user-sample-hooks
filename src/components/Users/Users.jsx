/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label, Spinner } from "reactstrap";

const Users = ({ handleSelect }) => {
  const [users, setUsers] = useState({
    data: undefined,
    loading: true,
    error: undefined,
  });
  useEffect(() => {
    setUsers((prev) => ({
      ...prev,
      data: undefined,
      loading: true,
      error: undefined,
    }));
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) =>
        setUsers((prev) => ({
          ...prev,
          data,
          loading: false,
          error: undefined,
        }))
      )
      .catch((err) => {
        setUsers({
          filtered: undefined,
          posts: undefined,
          loading: false,
          error: err.message,
        });
      });
  }, []);

  return (
    <>
      {users.error && <h1>Users not Found 404...</h1>}
      {users.loading && <Spinner>Loading...</Spinner>}
      {users.data && (
        <>
          {" "}
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
                  {users &&
                    users?.data?.map(({ id, name }) => (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    ))}
                </optgroup>
              </Input>
            </FormGroup>
          </Form>
        </>
      )}
    </>
  );
};

export default Users;
