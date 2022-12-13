import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import type { IDataItem } from '../../types';
import { fetchData } from '../../api';
import NoData from '../NoData/NoData';
import { columns } from './columns';

const Table = () => {
  const [data, setData] = useState<IDataItem[] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IDataItem | null>(null);

  useEffect(() => {
    const initData = async () => {
      setData(await fetchData());
    };

    !data && initData();
  }, []);

  const handleDelete = (item: IDataItem) => {
    setIsModalOpen(true);
    setSelectedItem(item);
  };

  if (!data) {
    return <NoData />;
  }

  return (
    <>
      <DataTable columns={columns(handleDelete)} data={data} selectableRows selectableRowsSingle />
      <Modal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} selectedItem={selectedItem} setData={setData} />
    </>
  );
};

export default Table;
