import { Modal as ModalAntD } from 'antd';
import { useContext } from 'react';
import { deleteItem, fetchData } from '../../api';
import { Context } from '../../App';
import type { IDataItem } from '../../types';

interface IModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  selectedItem: IDataItem | null;
  setData: React.Dispatch<React.SetStateAction<IDataItem[] | null>>;
}

const Modal = ({ setIsModalOpen, isModalOpen, selectedItem, setData }: IModalProps) => {
  const alert = useContext(Context);

  const handleOk = async () => {
    try {
      await deleteItem(selectedItem?.id ?? '');
      setData(await fetchData());
      alert?.success('Element removed successfully');
    } catch (error) {
      console.error(error);
      alert?.error('Error occurred - please try again');
    } finally {
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ModalAntD
        title={`Do you really want to remove "${selectedItem?.name}"`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Element with ID - &quot;{selectedItem?.id}&quot; will be removed</p>
      </ModalAntD>
    </>
  );
};

export default Modal;
