import { notification } from 'antd';
import { createContext, useMemo } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import type { INotificationContext } from './types';

export const Context = createContext<INotificationContext | undefined>(undefined);

function App() {
  const [api, contextHolder] = notification.useNotification();

  const contextValue = useMemo(
    () => ({
      success: (description: string) => {
        api.success({
          message: 'Success',
          description,
          placement: 'topRight',
        });
      },
      error: (description: string) => {
        api.error({
          message: 'Error',
          description,
          placement: 'topRight',
        });
      },
    }),
    [],
  );

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <div className="App">
        <Layout />
      </div>
    </Context.Provider>
  );
}

export default App;
