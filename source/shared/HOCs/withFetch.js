import React from 'react';
import t from 'prop-types';
const withInitializeFetch = ComposedComponent => {
  class HOC extends React.Component {
    componentDidMount() {
      console.log('initializing data fetch');
      this.props.onFetchData();
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  HOC.propTypes = {
    onFetchData: t.func
  };
  return HOC;
};

export default withInitializeFetch;
