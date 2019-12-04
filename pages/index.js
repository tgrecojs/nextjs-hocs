import withPage from '../source/shared/HOCs/withPage';

const App = props => {
  return <h2>{props.title}</h2>;
};

App.getInitialProps = async ctx => {
  console.log('context props ###', ctx);
  return {
    title: 'Howdy'
  };
};
export default withPage(App);
