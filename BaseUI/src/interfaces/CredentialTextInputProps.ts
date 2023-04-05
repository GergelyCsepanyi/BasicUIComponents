export interface CredentialTextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;
  editable?: boolean;
  onChangeText: (text: string) => void;
  placeholderTextColor: string;
}
