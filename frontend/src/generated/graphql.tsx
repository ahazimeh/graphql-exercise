import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
};

export type AttachUser = {
  connect?: Maybe<Array<Scalars['ID']>>;
  sync?: Maybe<Array<Scalars['ID']>>;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  access_token?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  expires_in?: Maybe<Scalars['Int']>;
  token_type?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};



export type ForgotPasswordInput = {
  email: Scalars['String'];
};

export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  status: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  status: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProject?: Maybe<Project>;
  login: AuthPayload;
  refreshToken: RefreshTokenPayload;
  logout: LogoutResponse;
  forgotPassword: ForgotPasswordResponse;
  updateForgottenPassword: ForgotPasswordResponse;
  register: RegisterResponse;
  socialLogin: AuthPayload;
  verifyEmail: AuthPayload;
  updatePassword: UpdatePasswordResponse;
};


export type MutationCreateProjectArgs = {
  input?: Maybe<ProjectInput>;
};


export type MutationLoginArgs = {
  input?: Maybe<LoginInput>;
};


export type MutationRefreshTokenArgs = {
  input?: Maybe<RefreshTokenInput>;
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationUpdateForgottenPasswordArgs = {
  input?: Maybe<NewPasswordWithCodeInput>;
};


export type MutationRegisterArgs = {
  input?: Maybe<RegisterInput>;
};


export type MutationSocialLoginArgs = {
  input: SocialLoginInput;
};


export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};


export type MutationUpdatePasswordArgs = {
  input: UpdatePassword;
};

export type NewPasswordWithCodeInput = {
  email: Scalars['String'];
  token: Scalars['String'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};

export type OrderByClause = {
  column: Scalars['String'];
  order: SortOrder;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
  total: Scalars['Int'];
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  lastPage: Scalars['Int'];
};

export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  firstItem?: Maybe<Scalars['Int']>;
  hasMorePages: Scalars['Boolean'];
  lastItem?: Maybe<Scalars['Int']>;
  lastPage: Scalars['Int'];
  perPage: Scalars['Int'];
  total: Scalars['Int'];
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  name: Scalars['String'];
  users: Array<User>;
};

export type ProjectInput = {
  name: Scalars['String'];
  start_date: Scalars['Date'];
  end_date: Scalars['Date'];
  users?: Maybe<AttachUser>;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  me?: Maybe<User>;
  projects: Array<Project>;
  users?: Maybe<UserPaginator>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type RefreshTokenInput = {
  refresh_token?: Maybe<Scalars['String']>;
};

export type RefreshTokenPayload = {
  __typename?: 'RefreshTokenPayload';
  access_token: Scalars['String'];
  refresh_token: Scalars['String'];
  expires_in: Scalars['Int'];
  token_type: Scalars['String'];
};

export type RegisterInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  tokens?: Maybe<AuthPayload>;
  status: RegisterStatuses;
};

export enum RegisterStatuses {
  MustVerifyEmail = 'MUST_VERIFY_EMAIL',
  Success = 'SUCCESS'
}

export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  firstItem?: Maybe<Scalars['Int']>;
  lastItem?: Maybe<Scalars['Int']>;
  perPage: Scalars['Int'];
};

export type SocialLoginInput = {
  provider: Scalars['String'];
  token: Scalars['String'];
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum Trashed {
  Only = 'ONLY',
  With = 'WITH',
  Without = 'WITHOUT'
}

export type UpdatePassword = {
  old_password: Scalars['String'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};

export type UpdatePasswordResponse = {
  __typename?: 'UpdatePasswordResponse';
  status: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  projects: Array<Project>;
};

export type UserPaginator = {
  __typename?: 'UserPaginator';
  paginatorInfo: PaginatorInfo;
  data: Array<User>;
};

export type VerifyEmailInput = {
  token: Scalars['String'];
};

export type TestUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TestUserQuery = { __typename?: 'Query', user?: Maybe<{ __typename?: 'User', name: string, projects: Array<{ __typename?: 'Project', id: string, name: string }> }> };

export type CreateProjectMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject?: Maybe<{ __typename?: 'Project', id: string }> };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', access_token?: Maybe<string>, refresh_token?: Maybe<string>, expires_in?: Maybe<number>, user?: Maybe<{ __typename?: 'User', id: string }> } };


export const TestUserDocument = gql`
    query TestUser($id: ID!) {
  user(id: $id) {
    name
    projects {
      id
      name
    }
  }
}
    `;

/**
 * __useTestUserQuery__
 *
 * To run a query within a React component, call `useTestUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTestUserQuery(baseOptions: Apollo.QueryHookOptions<TestUserQuery, TestUserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TestUserQuery, TestUserQueryVariables>(TestUserDocument, options);
}
export function useTestUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TestUserQuery, TestUserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TestUserQuery, TestUserQueryVariables>(TestUserDocument, options);
}
export type TestUserQueryHookResult = ReturnType<typeof useTestUserQuery>;
export type TestUserLazyQueryHookResult = ReturnType<typeof useTestUserLazyQuery>;
export type TestUserQueryResult = Apollo.QueryResult<TestUserQuery, TestUserQueryVariables>;
export const CreateProjectDocument = gql`
    mutation createProject {
  createProject(
    input: {name: "test32", start_date: "2020-1-1", end_date: "2020-1-1", users: {connect: [1, 2]}}
  ) {
    id
  }
}
    `;
export type CreateProjectMutationFn = Apollo.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
}
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<CreateProjectMutation, CreateProjectMutationVariables>;
export const LoginDocument = gql`
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
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;