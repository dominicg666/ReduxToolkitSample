import { NavigationContainer } from '@react-navigation/native';

export default function AppContainer({
  children,
  ...rest
}) {
  return (
    <NavigationContainer {...rest}>{children}</NavigationContainer>
  );
}