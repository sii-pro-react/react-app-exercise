import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import type { IDataItem } from '../../types';
import { fetchData } from '../../api';
import NoData from '../NoData/NoData';
import { columns } from './columns';
import { Button } from 'antd';
import classes from './style.module.scss';

const Table = () => {
  const [data, setData] = useState<IDataItem[] | null>(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const initData = async () => {
      setData(await fetchData());
      setPending(false);
    };

    !data && initData();
  }, []);

  if (data?.length === 0) {
    return <NoData />;
  }

  return (
    <>
      <div className={classes.addButton}>
        <Button
          type="primary"
          onClick={() => {
            alert("I don't have any logic yet 😒");
          }}
        >
          Add item
        </Button>
      </div>
      <DataTable
        title="List of secret items 🐱‍👤"
        columns={columns}
        data={data ?? []}
        progressPending={pending}
      />
    </>
  );
};

export default Table;
