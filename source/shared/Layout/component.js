import { func, object } from 'prop-types';
import { Wrapper } from '../tailwindcss/layout.components';
import Footer from '../Footer/component';
import { Global, css } from '@emotion/core';

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
        }
        .wrapper {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
        }
        .content {
          flex: 1;
        }
      `}
    />
    <Wrapper className="wrapper">
      <div className="content">{children}</div>
      <Footer />
    </Wrapper>
  </>
);

Layout.propTypes = {
  children: object
};

export default Layout;
