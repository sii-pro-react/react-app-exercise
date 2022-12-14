import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import RemoveModal from '../Modal/Remove';
import AddModal from '../Modal/Add';
import type { IDataItem } from '../../types';
import { fetchData } from '../../api';
import NoData from '../NoData/NoData';
import { columns } from './columns';
import { Button } from 'antd';
import classes from './style.module.scss';

const Table = () => {
  const [data, setData] = useState<IDataItem[] | null>(null);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [isAddModalOpen, setIAddModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IDataItem | null>(null);

  useEffect(() => {
    const initData = async () => {
      setData(await fetchData());
    };

    !data && initData();
  }, []);

  const handleDelete = (item: IDataItem) => {
    setIsRemoveModalOpen(true);
    setSelectedItem(item);
  };

  if (!data?.length) {
    return <NoData />;
  }

  return (
    <>
      <div className={classes.addButton}>
        <Button type="primary" onClick={() => setIAddModalOpen(true)}>
          Add item
        </Button>
      </div>
      <DataTable
        title="List of secret items 🐱‍👤"
        columns={columns(handleDelete)}
        data={data}
        selectableRows
        selectableRowsSingle
      />
      <RemoveModal
        setIsModalOpen={setIsRemoveModalOpen}
        isModalOpen={isRemoveModalOpen}
        selectedItem={selectedItem}
        setData={setData}
      />
      <AddModal setIsModalOpen={setIAddModalOpen} isModalOpen={isAddModalOpen} setData={setData} />
    </>
  );
};

export default Table;
