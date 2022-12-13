import { Button } from 'antd';
import { IDataItem } from '../../types';

export const columns = (handleDelete: (item: IDataItem) => void) => [
  {
    name: 'Id',
    selector: (row: IDataItem) => row.id,
  },
  {
    name: 'Name',
    selector: (row: IDataItem) => row.name,
    sortable: true,
  },
  {
    name: 'Description',
    selector: (row: IDataItem) => row.description,
    sortable: true,
  },
  {
    name: 'Is enabled?',
    selector: (row: IDataItem) => JSON.stringify(row.enabled),
    sortable: true,
  },
  {
    name: '',
    cell: (row: IDataItem) => (
      <Button danger onClick={() => handleDelete(row)}>
        Delete item
      </Button>
    ),
  },
];
