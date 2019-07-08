import gql from 'graphql-tag';
import * as ReactApollo from 'react-apollo';
import * as React from 'react';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** DateTime */
  DateTime: any,
};


export type Mutation = {
  __typename?: 'Mutation',
  signupUser: User,
  deleteOnePost?: Maybe<Post>,
  createDraft: Post,
  publish?: Maybe<Post>,
};


export type MutationSignupUserArgs = {
  data: UserCreateInput
};


export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput
};


export type MutationCreateDraftArgs = {
  title?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  authorEmail?: Maybe<Scalars['String']>
};


export type MutationPublishArgs = {
  id?: Maybe<Scalars['ID']>
};

export type Post = {
  __typename?: 'Post',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  title: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  published: Scalars['Boolean'],
  author?: Maybe<User>,
};

export type PostCreateManyWithoutPostsInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>,
  connect?: Maybe<Array<PostWhereUniqueInput>>,
};

export type PostCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['ID']>,
  published: Scalars['Boolean'],
  title: Scalars['String'],
  content?: Maybe<Scalars['String']>,
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type Query = {
  __typename?: 'Query',
  post?: Maybe<Post>,
  users: Array<User>,
  feed: Array<Post>,
  filterPosts: Array<Post>,
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput
};


export type QueryFeedArgs = {
  published?: Maybe<Scalars['Boolean']>
};


export type QueryFilterPostsArgs = {
  searchString?: Maybe<Scalars['String']>
};

export type User = {
  __typename?: 'User',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  email: Scalars['String'],
  posts?: Maybe<Array<Post>>,
};


export type UserPostsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>,
  email: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  posts?: Maybe<PostCreateManyWithoutPostsInput>,
};
export type PostFragmentFragment = ({ __typename?: 'Post' } & Pick<Post, 'id' | 'published' | 'title' | 'content' | 'published'>);

export type UserFragmentFragment = ({ __typename?: 'User' } & Pick<User, 'id' | 'name' | 'email'>);

export type CreateDraftMutationMutationVariables = {
  title: Scalars['String'],
  content: Scalars['String'],
  authorEmail: Scalars['String']
};


export type CreateDraftMutationMutation = ({ __typename?: 'Mutation' } & { createDraft: ({ __typename?: 'Post' } & PostFragmentFragment) });

export type DeleteOnePostMutationVariables = {
  id: Scalars['ID']
};


export type DeleteOnePostMutation = ({ __typename?: 'Mutation' } & { deleteOnePost: Maybe<({ __typename?: 'Post' } & PostFragmentFragment)> });

export type PublishMutationMutationVariables = {
  id: Scalars['ID']
};


export type PublishMutationMutation = ({ __typename?: 'Mutation' } & { publish: Maybe<({ __typename?: 'Post' } & PostFragmentFragment)> });

export type SignupUserMutationMutationVariables = {
  name: Scalars['String'],
  email: Scalars['String']
};


export type SignupUserMutationMutation = ({ __typename?: 'Mutation' } & { signupUser: ({ __typename?: 'User' } & UserFragmentFragment) });

export type FeedQueryQueryVariables = {
  published: Scalars['Boolean']
};


export type FeedQueryQuery = ({ __typename?: 'Query' } & { feed: Array<({ __typename?: 'Post' } & PostFragmentFragment)> });

export type PostQueryQueryVariables = {
  id: Scalars['ID']
};


export type PostQueryQuery = ({ __typename?: 'Query' } & { post: Maybe<({ __typename?: 'Post' } & PostFragmentFragment)> });

export type UsersQueryQueryVariables = {};


export type UsersQueryQuery = ({ __typename?: 'Query' } & { users: Array<({ __typename?: 'User' } & UserFragmentFragment)> });
export const PostFragmentFragmentDoc = gql`
    fragment PostFragment on Post {
  id
  published
  title
  content
  published
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  name
  email
}
    `;
export const CreateDraftMutationDocument = gql`
    mutation createDraftMutation($title: String!, $content: String!, $authorEmail: String!) {
  createDraft(title: $title, content: $content, authorEmail: $authorEmail) {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;
export type CreateDraftMutationMutationFn = ReactApollo.MutationFn<CreateDraftMutationMutation, CreateDraftMutationMutationVariables>;
export type CreateDraftMutationComponentProps = Omit<ReactApollo.MutationProps<CreateDraftMutationMutation, CreateDraftMutationMutationVariables>, 'mutation'>;

    export const CreateDraftMutationComponent = (props: CreateDraftMutationComponentProps) => (
      <ReactApollo.Mutation<CreateDraftMutationMutation, CreateDraftMutationMutationVariables> mutation={CreateDraftMutationDocument} {...props} />
    );
    
export const DeleteOnePostDocument = gql`
    mutation deleteOnePost($id: ID!) {
  deleteOnePost(where: {id: $id}) {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;
export type DeleteOnePostMutationFn = ReactApollo.MutationFn<DeleteOnePostMutation, DeleteOnePostMutationVariables>;
export type DeleteOnePostComponentProps = Omit<ReactApollo.MutationProps<DeleteOnePostMutation, DeleteOnePostMutationVariables>, 'mutation'>;

    export const DeleteOnePostComponent = (props: DeleteOnePostComponentProps) => (
      <ReactApollo.Mutation<DeleteOnePostMutation, DeleteOnePostMutationVariables> mutation={DeleteOnePostDocument} {...props} />
    );
    
export const PublishMutationDocument = gql`
    mutation publishMutation($id: ID!) {
  publish(id: $id) {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;
export type PublishMutationMutationFn = ReactApollo.MutationFn<PublishMutationMutation, PublishMutationMutationVariables>;
export type PublishMutationComponentProps = Omit<ReactApollo.MutationProps<PublishMutationMutation, PublishMutationMutationVariables>, 'mutation'>;

    export const PublishMutationComponent = (props: PublishMutationComponentProps) => (
      <ReactApollo.Mutation<PublishMutationMutation, PublishMutationMutationVariables> mutation={PublishMutationDocument} {...props} />
    );
    
export const SignupUserMutationDocument = gql`
    mutation signupUserMutation($name: String!, $email: String!) {
  signupUser(data: {name: $name, email: $email}) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type SignupUserMutationMutationFn = ReactApollo.MutationFn<SignupUserMutationMutation, SignupUserMutationMutationVariables>;
export type SignupUserMutationComponentProps = Omit<ReactApollo.MutationProps<SignupUserMutationMutation, SignupUserMutationMutationVariables>, 'mutation'>;

    export const SignupUserMutationComponent = (props: SignupUserMutationComponentProps) => (
      <ReactApollo.Mutation<SignupUserMutationMutation, SignupUserMutationMutationVariables> mutation={SignupUserMutationDocument} {...props} />
    );
    
export const FeedQueryDocument = gql`
    query feedQuery($published: Boolean!) {
  feed(published: $published) {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;
export type FeedQueryComponentProps = Omit<ReactApollo.QueryProps<FeedQueryQuery, FeedQueryQueryVariables>, 'query'> & ({ variables: FeedQueryQueryVariables; skip?: false; } | { skip: true; });

    export const FeedQueryComponent = (props: FeedQueryComponentProps) => (
      <ReactApollo.Query<FeedQueryQuery, FeedQueryQueryVariables> query={FeedQueryDocument} {...props} />
    );
    
export const PostQueryDocument = gql`
    query postQuery($id: ID!) {
  post(where: {id: $id}) {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;
export type PostQueryComponentProps = Omit<ReactApollo.QueryProps<PostQueryQuery, PostQueryQueryVariables>, 'query'> & ({ variables: PostQueryQueryVariables; skip?: false; } | { skip: true; });

    export const PostQueryComponent = (props: PostQueryComponentProps) => (
      <ReactApollo.Query<PostQueryQuery, PostQueryQueryVariables> query={PostQueryDocument} {...props} />
    );
    
export const UsersQueryDocument = gql`
    query usersQuery {
  users {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type UsersQueryComponentProps = Omit<ReactApollo.QueryProps<UsersQueryQuery, UsersQueryQueryVariables>, 'query'>;

    export const UsersQueryComponent = (props: UsersQueryComponentProps) => (
      <ReactApollo.Query<UsersQueryQuery, UsersQueryQueryVariables> query={UsersQueryDocument} {...props} />
    );
    