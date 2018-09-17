import React from 'react';
import { List, Icon } from 'antd';
import PropTypes from 'prop-types';

import Button from '../Button';
import './style.less';

const SearchButtonList = ({ data, onClick }) => (
  <React.Fragment>
    <List
      className="button-list-search"
      dataSource={data}
      bordered={false}
      renderItem={({
        title,
        icon,
        isFavourited,
        }, item) => (
          <List.Item>
            <Button
              type="primary"
              className={`${(item % 2) && 'btn-shadow'} btn-search`}
              icon={icon}
              block
              stretched
              onClick={() => onClick()}
            >
              <span className="mvr">{title}</span>
              {icon && <Icon type={isFavourited ? 'star' : 'star-o'} />}
            </Button>
          </List.Item>
        )}
    />
  </React.Fragment>
);

SearchButtonList.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func,
};

SearchButtonList.defaultProps = {
  data: [],
  onClick: f => f,
};

export default SearchButtonList;
