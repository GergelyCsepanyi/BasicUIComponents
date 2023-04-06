import React from 'react';
import TextButton from './TextButton';

// This component's functioning like a wrapper
class EditButton extends React.Component<
  {
    text: string;
    color: string;
    align: 'flex-start' | 'center';
    textAlign?: 'center' | 'auto';
    editMode: boolean;
    onPress?: ((text: boolean) => void) | (() => void);
  },
  {}
> {
  render(): React.ReactNode {
    if (!this.props.editMode) {
      return <TextButton {...this.props} />;
    }
    return <></>;
  }
}

export default EditButton;
