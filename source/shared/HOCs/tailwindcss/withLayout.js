import React, { Component } from 'react';
import Layout from '../../Layout/component';

const withLayout = ComposedComponent => {
  return class HOC extends Component {
    render() {
      console.log('withLayout is first');
      console.log('this.props', this.props);
      return (
        <Layout>
          <ComposedComponent {...this.props} />
        </Layout>
      );
    }
  };
};

export default withLayout;
