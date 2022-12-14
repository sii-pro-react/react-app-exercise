export type IDataItem = {
  id: string;
  name: string;
  description: string;
  removable: boolean;
};

export type INotificationContext = {
  success: (description: string) => void;
  error: (description: string) => void;
};
