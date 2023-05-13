import { Button, ButtonProps } from 'antd';
import React, { type FC } from 'react';
import './index.less';

interface DicButtonProps extends ButtonProps {
  active?: boolean;
}

const DicButton: FC<DicButtonProps> = (props) => {
  const { active } = props;
  let ncClassName = '';
  if (active) {
    ncClassName = 'activeStatus';
  }
  return (
    <Button {...props} className={ncClassName}>
      {props.children}
    </Button>
  );
};

export default DicButton;
