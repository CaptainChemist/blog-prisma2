import * as React from 'react';
import { NextPage } from 'next';
import Layout from '../components/main-layout';
import FeedList from '../components/feed';
import NewDraft from '../components/new-draft';
import UsersList from '../components/users';
import SignupUser from '../components/signup-user';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Blog Layout">
      <h1>Simple Prisma 2 Blog Example</h1>
      <h3>Create User</h3>
      <SignupUser />
      <h3>Users</h3>
      <UsersList />

      <h3>Create Draft</h3>
      <NewDraft />
      <h3>Feed</h3>
      <FeedList published={true} />
      <h3>Hidden Feed</h3>
      <FeedList published={false} />
    </Layout>
  );
};

export default IndexPage;
