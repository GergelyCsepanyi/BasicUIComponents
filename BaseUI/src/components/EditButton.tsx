import React from 'react';
import TextButton from './TextButton';
import EditButtonProps from '../interfaces/EditButtonProps';

// This component's functioning like a wrapper
class EditButton extends React.Component<EditButtonProps, {}> {
  render(): React.ReactNode {
    if (!this.props.editMode) {
      return <TextButton {...this.props} />;
    }
    return <></>;
  }
}

export default EditButton;
