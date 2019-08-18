import React from 'react';
import { Row, Col, Button, Form, Input } from 'antd';
import { CreateDraftMutationComponent, FeedQueryDocument } from '../generated/apollo-components';

type Props = {};
const initialState = { title: '', content: '', authorEmail: '' };
type State = typeof initialState;

class NewDraft extends React.Component<Props> {
  state: State = initialState;

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <CreateDraftMutationComponent>
        {createDraft => (
          <Form
            onSubmit={e => {
              e.preventDefault();
              createDraft({
                variables: { ...this.state },
                refetchQueries: [
                  { query: FeedQueryDocument, variables: { published: true } },
                  { query: FeedQueryDocument, variables: { published: false } }
                ]
              }).then(res => {
                console.log(res);
                this.setState({ title: '', content: '', authorEmail: '' });
              });
            }}
          >
            <Row>
              <Col span={6}>
                <Form.Item>
                  <Input placeholder="title" name="title" value={this.state.title} onChange={this.handleChange} type="text" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item>
                  <Input placeholder="content" name="content" value={this.state.content} onChange={this.handleChange} type="text" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item>
                  <Input
                    placeholder="authorEmail"
                    name="authorEmail"
                    value={this.state.authorEmail}
                    onChange={this.handleChange}
                    type="text"
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item>
                  <Button htmlType="submit">Create Draft</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}
      </CreateDraftMutationComponent>
    );
  }
}

export default NewDraft;
