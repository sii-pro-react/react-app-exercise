import { IDataItem } from './types';

const path = 'http://localhost:3005';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const fetchData = async (): Promise<IDataItem[]> => {
  const response = await fetch(`${path}/applications`, { headers });

  if (response.ok) {
    return await response.json();
  }

  throw new Error('Something went wrong');
};

export const deleteItem = async (id: string) => {
  const response = await fetch(`${path}/api/applications/${id}`, { method: 'DELETE', headers });

  if (!response.ok) {
    throw new Error('Something went wrong');
  }
};

export const addItem = async (item: Omit<IDataItem, 'id'>) => {
  const response = await fetch(`${path}/api/applications`, { method: 'POST', body: JSON.stringify(item), headers });

  if (!response.ok) {
    throw new Error('Something went wrong');
  }
};
