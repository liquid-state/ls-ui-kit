import React, { Component } from 'react';
import { Card } from 'antd';
import Example from '../../utils/Example';

class Tab extends Component {
  state = {
    key: 'tab1',
    noTitleKey: 'article',
  };

  render() {
    const tabList = [{
      key: 'tab1',
      tab: 'tab1',
    }, {
      key: 'tab2',
      tab: 'tab2',
    }];

    const contentList = {
      tab1: <p>content1</p>,
      tab2: <p>content2</p>,
    };

    const tabListNoTitle = [{
      key: 'article',
      tab: 'article',
    }, {
      key: 'app',
      tab: 'app',
    }, {
      key: 'project',
      tab: 'project',
    }];

    const contentListNoTitle = {
      article: <p>article content</p>,
      app: <p>app content</p>,
      project: <p>project content</p>,
    };

    return (
      <Example title="Width Tabs">

        <div>
          <Card
            style={{ width: '100%' }}
            title="Card title"
            extra={<a href="#">More</a>}
            tabList={tabList}
            onTabChange={(key) => { this.onTabChange(key, 'key'); }}
          >
            {contentList[this.state.key]}
          </Card>
          <br /><br />
          <Card
            style={{ width: '100%' }}
            tabList={tabListNoTitle}
            onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
          >
            {contentListNoTitle[this.state.noTitleKey]}
          </Card>
        </div>
      </Example>
    );
  }

  onTabChange = (key, type) => this.setState({ [type]: key });
}
 
export default Tab;
