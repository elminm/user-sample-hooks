/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner, Table } from "reactstrap";

const Posts = ({ selectedId }) => {
  const [datas, setDatas] = useState({
    posts: [],
    filtered: [],
    loading: true,
    error: undefined,
  });
  useEffect(() => {
    setDatas((oldData) => ({
      ...oldData,
      loading: true,
      error: undefined,
      filtered: undefined,
      posts: undefined,
    }));
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        setDatas((oldData) => ({
          ...oldData,
          filtered: data,
          posts: data,
          loading: false,
          error: undefined,
        }));
      })
      .catch((err) => {
        setDatas({
          filtered: undefined,
          posts: undefined,
          loading: false,
          error: err.message,
        });
      });
  }, []);

  useEffect(() => {
    if (selectedId == 0) {
      setDatas((oldData) => ({
        ...oldData,
        filtered: [...datas.posts],
      }));
    } else {
      const filteredPosts = datas?.posts?.filter(
        ({ userId }) => userId == selectedId
      );
      if (filteredPosts) {
        setDatas((oldData) => ({
          ...oldData,
          filtered: [...filteredPosts],
        }));
      }
    }
  }, [selectedId]);
  return (
    <>
      {datas?.error && <h1>Users not Found 404...</h1>}
      {datas?.loading && <Spinner>Loading...</Spinner>}
      {datas?.filtered && (
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
              {datas.filtered?.map(({ id, title, body }) => (
                <tr key={id}>
                  <th scope="row">{id}</th>
                  <td>{title}</td>
                  <td>{body}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};
export default Posts;
