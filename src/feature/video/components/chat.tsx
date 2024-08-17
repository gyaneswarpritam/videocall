import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import classNames from 'classnames';
import { UpOutlined } from '@ant-design/icons';
import { IconFont } from '../../../component/icon-font';
import { getAntdDropdownMenu, getAntdItem } from './video-footer-utils';
const { Button: DropdownButton } = Dropdown;
const { Item: MenuItem } = Menu;

const ChatButton = (props: any): any => {
  const { updateChatShow } = props;
  return (
    <Button
      className={classNames('vc-button')}
      icon={<IconFont type="icon-chat" />}
      // eslint-disable-next-line react/jsx-boolean-value
      ghost={true}
      shape="circle"
      size="large"
      title="Chat"
      onClick={updateChatShow}
    />
  );
};

export { ChatButton };
