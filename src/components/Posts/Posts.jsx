/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "reactstrap";

const Posts = ({ selectedId }) => {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(({ data }) => {
      setPosts(data);
      setFiltered(data);
    });
  }, []);

  useEffect(() => {
    console.log(selectedId);
    if (selectedId == 0) {
      setFiltered([...posts]);
    } else {
      const filteredPosts = posts.filter(({ userId }) => userId == selectedId);
      setFiltered([...filteredPosts]);
    }
  }, [selectedId]);
  return (
    <>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {filtered?.map(({ id, title, body }) => (
            <tr key={id}>
              <th scope="row">{id}</th>
              <td>{title}</td>
              <td>{body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Posts;
