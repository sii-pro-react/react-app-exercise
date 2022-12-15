import { CheckCircleOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { IDataItem } from '../../types';

export const columns = (handleDelete: (item: IDataItem) => void, handleModify: (item: IDataItem) => void) => [
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
    selector: (row: IDataItem) => JSON.stringify(row.removable),
    cell: (row: IDataItem) =>
      row.removable ? (
        <CheckCircleOutlined style={{ color: 'green', fontSize: '20px', width: '70px' }} />
      ) : (
        <ExclamationCircleOutlined style={{ color: 'red', fontSize: '20px', width: '70px' }} />
      ),
    sortable: true,
  },
  {
    name: '',
    cell: (row: IDataItem) => (
      <Button type="primary" ghost onClick={() => handleModify(row)}>
        Modify
      </Button>
    ),
  },
  {
    name: '',
    cell: (row: IDataItem) =>
      row.removable ? (
        <DeleteOutlined style={{ color: 'red', fontSize: '20px' }} onClick={() => handleDelete(row)} />
      ) : (
        <span style={{ marginLeft: '5px' }}>-</span>
      ),
  },
];
