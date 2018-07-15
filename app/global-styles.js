import { injectGlobal } from 'styled-components';
import 'antd/dist/antd.css';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .ant-select-selection {
    height: 50px;
  }

  .ant-select-selection-selected-value{
    line-height: 46px;
  }

  .ant-select-selection__rendered{
    line-height: 46px;
  }

  .ant-select-selection__placeholder, .ant-select-search__field__placeholder{
    font-size: 18px;
    color: #d9d9d9;
  }

  a {
    color: transparent;
  }

  a:hover {
    color: transparent;
}

.carousel .slide{
  background: #F4F4F4;
}

span {
  font-family: 'Fira Sans',sans-serif;
}

`;
