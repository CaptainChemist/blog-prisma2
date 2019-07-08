import React from 'react';
import { Button } from 'antd';
import { DeleteOnePostComponent, FeedQueryDocument } from '../generated/apollo-components';

type Props = {
  id: string;
};

class DeletePost extends React.Component<Props> {
  render() {
    const { id } = this.props;
    return (
      <DeleteOnePostComponent>
        {deleteOnePost => (
          <Button
            type="danger"
            onClick={() =>
              deleteOnePost({
                variables: { id },
                refetchQueries: [
                  { query: FeedQueryDocument, variables: { published: true } },
                  { query: FeedQueryDocument, variables: { published: false } }
                ]
              })
            }
          >
            Delete
          </Button>
        )}
      </DeleteOnePostComponent>
    );
  }
}

export default DeletePost;
