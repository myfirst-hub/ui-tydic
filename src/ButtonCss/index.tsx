import { Button, ButtonProps } from 'antd';
import React from 'react';
import './index.css';

interface DicButtonProps extends ButtonProps {
  active?: boolean;
}

const DicButton = (props: DicButtonProps) => {
  const { active } = props;
  return (
    <Button {...props} className='textColor' style={active ? { borderColor: '#0748df' } : {}}>
      {props.children}
    </Button>
  );
};

export default DicButton;
