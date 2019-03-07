import React, { Component } from 'react';
import { Pagination, LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import Example from '../../utils/Example';

const App = () => (
  <div>
    <Pagination defaultCurrent={1} total={50} showSizeChanger />
  </div>
);

class Localization extends Component {
  render() {
    return (
      <Example title="Localization">
        <LocaleProvider locale={enUS}>
          <App />
        </LocaleProvider>
      </Example>
    );
  }
}

export default Localization;
