import React from 'react';
import { useQuery, gql, ApolloClient, InMemoryCache, ApolloProvider, from, HttpLink, } from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import logo from './logo.svg';
import './App.css';
import Test from "./components/Test";
import Login from "./components/Login";
import { useLocalStore, useObserver } from 'mobx-react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, path }) => {
      alert(`Graphql erro ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:8000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})


const App: React.FC = () => {
  // const { data, loading } = useQuery(getUser);
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Switch>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        {/* <Test></Test> */}
      </ApolloProvider>
    </BrowserRouter>
  )
  // return <div>aasd</div>;
  // const {data, loading} = useQuery(getUser, {
  //   variables: {id:1}
  // });
  // alert("g");
  // if(!data || loading)
  // return
  // (
  //   <div>loading...</div>
  // );
  // return <div><pre>{JSON.stringify(data, null, 2)}</pre></div>
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
