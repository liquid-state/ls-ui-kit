import React, { Component } from 'react';
import { List, message, Avatar, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import Example from '../../utils/Example';

const data = [
  {gender: "female", name: {title: "miss", first: "olivia", last: "novak"}, email: "olivia.novak@example.com", nat: "CA"},
  {gender: "male", name: {title: "monsieur", first: "dylan", last: "dufour"}, email: "dylan.dufour@example.com", nat: "CH"},
  {gender: "female", name: {title: "miss", first: "astrid", last: "christensen"}, email: "astrid.christensen@example.com", nat: "DK"},
  {gender: "female", name: {title: "ms", first: "mischa", last: "van de kant"}, email: "mischa.vandekant@example.com", nat: "NL"},
  {gender: "male", name: {title: "mr", first: "harold", last: "kim"}, email: "harold.kim@example.com", nat: "US"}
];

class ScrollLoad extends Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
  };

  componentWillMount() {
    this.setState({
      data: [...data]
    });
  }

  render() {

    return (
      <Example title="Scrolling loaded">
        <div className="demo-infinite-container">
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.handleInfiniteOnLoad}
            hasMore={!this.state.loading && this.state.hasMore}
            useWindow={false}
          >
            <List
              dataSource={this.state.data}
              renderItem={item => (
                <List.Item key={item.id}>
                  <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="#">{item.name.last}</a>}
                    description={item.email}
                  />
                  <div>Content</div>
                </List.Item>
              )}
            >
              {this.state.loading && this.state.hasMore && <Spin className="demo-loading" />}
            </List>
          </InfiniteScroll>
        </div>
      </Example>
    );
  }

  getData = (callback) => {
    this.state.data.push(...data);
    this.setState({
      data: [...this.state.data],
      loading: false
    });
  }

  handleInfiniteOnLoad = () => {
    if(this.state.data.length > 10) {
      message.warning('Infinite List loaded all');
    } else {
      this.setState({ loading: true }, () => setTimeout(() => this.getData(), 1000));
    }
  }
}
 
export default ScrollLoad;
