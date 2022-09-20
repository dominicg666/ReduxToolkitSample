import { Provider as ReduxProvider } from 'react-redux';


const StoreProvider = props => {
  const { children, store } = props;


  return (
      <ReduxProvider store={store}>
          {children}
      </ReduxProvider>
  );
};

export default StoreProvider;