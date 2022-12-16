import { CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { IDataItem } from '../../types';

export const columns = [
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
    name: 'Is removable?',
    cell: (row: IDataItem) => JSON.stringify(row.removable),
    sortable: true,
  },
];
