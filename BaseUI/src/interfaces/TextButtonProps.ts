interface TextButtonProps {
  text: string;
  color: string;
  align: 'flex-start' | 'center';
  textAlign?: 'center' | 'auto';
  onPress?: ((text: boolean) => void) | (() => void);
}

export default TextButtonProps;
