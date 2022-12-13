export type IDataItem = {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
};

export type INotificationContext = {
  success: (description: string) => void;
  error: (description: string) => void;
};
