import { gql, useMutation } from '@apollo/client';
import React from 'react'
import { useLoginMutation, LoginDocument } from "../generated/graphql";
// import * as LoginTypes from "../";
import Store from "../store";
import { observer } from "mobx-react";
const Login1 = gql`
mutation Login($username: String!, $password: String!) {
  login(input: {username: $username, password: $password}) {
    access_token
    refresh_token
    expires_in
    user {
      id
    }
  }
}
`
interface LoginProps {

}

export default observer(function Login() {
  
    // alert(Store.token)
    Store.token = "";
    let a = Math.random() + "";
    console.log(Store.token);
    // const [loginMutation, { data, loading, error }] = useMutation(Login1, { variables: { username: "ricardo.lehner@example.com", password: "password" } });
    const [loginMutation, { data, loading, error }] = useLoginMutation();
    let handleSubmit = async () =>{
      await loginMutation({variables:{username: "ricardo.lehner@example.com", password: "password"}});
    }
    console.log(loginMutation);
    console.log(error);
    console.log(data?.login.access_token);
    console.log(loading);
    return (
        <div onClick ={ handleSubmit }>hi</div>
    );
})