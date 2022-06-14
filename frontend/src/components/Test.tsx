import React from 'react';
import { useQuery, gql, ApolloClient, InMemoryCache, ApolloProvider, from, HttpLink, } from '@apollo/client';
import { useTestUserQuery } from "../generated/graphql";
import { TodoList } from "./TodoList";
import TodoAdd from './TodoAdd';
import Contact from './Contact';

const getUser = gql`
  query GetUser {
    user(id: 1){
      name
    }
  }
`
export default function Test() {
  // const { data, loading } = useQuery(getUser, {
  //   variables: { id: 1 }
  // });
  // console.log(data);
  const { loading, error, data } = useTestUserQuery({ variables: { id: "2" } });
  console.log(data);
  return (
    <div>
      {/* <TodoList>

        </TodoList>
        <TodoAdd></TodoAdd> */}
      {/* <Contact></Contact> */}
    </div>
  );

  if (loading || !data) return <div>loading...</div>;
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )

  return <div>sds</div>
}