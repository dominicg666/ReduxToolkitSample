import { NavigationContainer } from '@react-navigation/native';

export default function AppContainer({
  children
}) {
  return (
    <NavigationContainer>{children}</NavigationContainer>
  );
}