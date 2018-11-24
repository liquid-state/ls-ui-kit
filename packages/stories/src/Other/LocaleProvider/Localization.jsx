import React, { Component } from 'react';
import { Pagination, LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

const App = () => (
  <div>
    <Pagination defaultCurrent={1} total={50} showSizeChanger />
  </div>
);

class Localization extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Localization</h3>

        <LocaleProvider locale={enUS}>
          <App />
        </LocaleProvider>
      </section>
    );
  }
}
 
export default Localization;