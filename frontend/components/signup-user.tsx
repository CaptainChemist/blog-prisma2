import React from 'react';
import { Row, Col, Button, Form, Input } from 'antd';
import { SignupUserMutationComponent, UsersQueryDocument } from '../generated/apollo-components';

type Props = {};
const initialState = { name: '', email: '' };
type State = typeof initialState;

class SignupUser extends React.Component<Props> {
  state: State = initialState;

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignupUserMutationComponent>
        {createUser => (
          <Form
            onSubmit={e => {
              e.preventDefault();
              createUser({
                variables: { ...this.state },
                refetchQueries: [{ query: UsersQueryDocument }]
              }).then(() => {
                this.setState({ name: '', email: '' });
              });
            }}
          >
            <Row>
              <Col span={6}>
                <Form.Item>
                  <Input placeholder="name" name="name" value={this.state.name} onChange={this.handleChange} type="text" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item>
                  <Input placeholder="email" name="email" value={this.state.email} onChange={this.handleChange} type="text" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item>
                  <Button htmlType="submit">Signup User</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}
      </SignupUserMutationComponent>
    );
  }
}

export default SignupUser;
