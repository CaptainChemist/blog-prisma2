import React from 'react';
import { Table } from 'antd';
import { UsersQueryComponent } from '../generated/apollo-components';

type Props = {};

class UsersList extends React.PureComponent<Props> {
  render() {
    return (
      <UsersQueryComponent>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          if (data && 'users' in data && data.users.length > 0) {
            const feedData = data.users.map(({ name, email }, i) => ({
              key: i,
              name,
              email
            }));
            const columns = [
              {
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
              },
              {
                title: 'Email',
                dataIndex: 'email',
                key: 'email'
              }
            ];
            return <Table columns={columns} dataSource={feedData} />;
          }

          return <p>No users yet.</p>;
        }}
      </UsersQueryComponent>
    );
  }
}

export default UsersList;
