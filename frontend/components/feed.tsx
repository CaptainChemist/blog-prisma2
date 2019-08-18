import React from 'react';
import { Table, Button } from 'antd';
import { FeedQueryComponent } from '../generated/apollo-components';
import PublishDraft from './publish-draft';
import DeletePost from './delete-post';

type Props = {
  published: boolean;
};

class FeedList extends React.PureComponent<Props> {
  render() {
    const { published } = this.props;
    return (
      <FeedQueryComponent variables={{ published }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          if (data && 'feed' in data && data.feed.length > 0) {
            const feedData = data.feed.map(({ id, title, content }, i) => ({
              key: i,
              title,
              content,
              id
            }));
            const columns = [
              {
                title: 'Title',
                dataIndex: 'title',
                key: 'title'
              },
              {
                title: 'Content',
                dataIndex: 'content',
                key: 'content'
              },
              {
                title: 'Action',
                key: 'action',
                render: ({ id }: { id: string }) => {
                  return (
                    <Button.Group>
                      {published ? null : <PublishDraft id={id} />}
                      <DeletePost id={id} />
                    </Button.Group>
                  );
                }
              }
            ];
            return <Table columns={columns} dataSource={feedData} />;
          }

          return <p>No results yet.</p>;
        }}
      </FeedQueryComponent>
    );
  }
}

export default FeedList;
