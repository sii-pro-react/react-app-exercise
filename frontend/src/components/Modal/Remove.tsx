import { Modal as ModalAntD } from 'antd';
import { useContext, useState } from 'react';
import { deleteItem, fetchData } from '../../api';
import { Context } from '../../App';
import type { IDataItem } from '../../types';

interface IRemoveModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  selectedItem: IDataItem | null;
  setData: React.Dispatch<React.SetStateAction<IDataItem[] | null>>;
}

const Remove = ({ setIsModalOpen, isModalOpen, selectedItem, setData }: IRemoveModalProps) => {
  const alert = useContext(Context);
  const [pending, setPending] = useState(false);

  const handleOk = async () => {
    try {
      setPending(true);
      await deleteItem(selectedItem?.id ?? '');
      setData(await fetchData());
      alert?.success('Element removed successfully');
    } catch (error) {
      console.error(error);
      alert?.error('Error occurred - please try again');
    } finally {
      setPending(false);
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    if (!pending) {
      setIsModalOpen(false);
    }
  };

  return (
    <ModalAntD
      title={`Do you really want to remove "${selectedItem?.name}"`}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      maskClosable={!pending}
      closable={!pending}
      confirmLoading={pending}
    >
      <p>Element with ID - &quot;{selectedItem?.id}&quot; will be removed</p>
    </ModalAntD>
  );
};

export default Remove;
