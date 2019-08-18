import React from 'react';
import { Button } from 'antd';
import { PublishMutationComponent, FeedQueryDocument } from '../generated/apollo-components';

type Props = {
  id: string;
};

class PublishDraft extends React.Component<Props> {
  render() {
    const { id } = this.props;
    return (
      <PublishMutationComponent>
        {publishDraft => (
          <Button
            onClick={() =>
              publishDraft({
                variables: { id },
                refetchQueries: [
                  { query: FeedQueryDocument, variables: { published: true } },
                  { query: FeedQueryDocument, variables: { published: false } }
                ]
              })
            }
          >
            Publish
          </Button>
        )}
      </PublishMutationComponent>
    );
  }
}

export default PublishDraft;
