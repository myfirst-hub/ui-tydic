import { Button, ButtonProps } from 'antd';
import React, { type FC } from 'react';

interface DicButtonProps extends ButtonProps {
  active?: boolean;
}

const DicButton: FC<DicButtonProps> = (props) => {
  const { active } = props;
  return (
    <Button {...props} style={active ? { borderColor: '#0748df' } : {}}>
      {props.children}
    </Button>
  );
};

export default DicButton;
