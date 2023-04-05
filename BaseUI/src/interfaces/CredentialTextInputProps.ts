export interface CredentialTextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText: (text: string) => void;
}
