import { IDataItem } from './types';

const path = 'http://localhost:3005';

export const fetchData = async (): Promise<IDataItem[]> => {
  const response = await fetch(`${path}/applications`);

  if (response.ok) {
    return await response.json();
  }

  throw new Error('Something went wrong');
};

export const deleteItem = async (id: string) => {
  const response = await fetch(`${path}/api/applications/${id}`, { method: 'DELETE' });

  if (!response.ok) {
    throw new Error('Something went wrong');
  }
};
