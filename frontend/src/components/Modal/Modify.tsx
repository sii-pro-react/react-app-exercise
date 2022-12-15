import { Button, Form, Input, Modal as ModalAntD, Switch } from 'antd';
import { useContext, useState } from 'react';
import { fetchData, modifyItem } from '../../api';
import { Context } from '../../App';
import type { IDataItem } from '../../types';
import classes from './style.module.scss';

interface IModifyModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  setData: React.Dispatch<React.SetStateAction<IDataItem[] | null>>;
  selectedItem: IDataItem | null;
}

const Modify = ({ setIsModalOpen, isModalOpen, setData, selectedItem }: IModifyModalProps) => {
  const alert = useContext(Context);
  const [pending, setPending] = useState(false);
  const [form] = Form.useForm();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values: IDataItem) => {
    try {
      setPending(true);
      await modifyItem({ ...values, removable: Boolean(values.removable), id: selectedItem?.id ?? '' });
      setData(await fetchData());
      form.resetFields();
      alert?.success('Element modified successfully');
    } catch (error) {
      console.error(error);
      alert?.error('Error occurred - please try again');
    } finally {
      setPending(false);
      setIsModalOpen(false);
    }
  };

  return (
    <ModalAntD
      title={`Add new item`}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={false}
      maskClosable={!pending}
      closable={!pending}
    >
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        disabled={pending}
      >
        <Form.Item
          label="Name"
          name="name"
          initialValue={selectedItem?.name}
          rules={[{ required: true, message: 'Please input name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          initialValue={selectedItem?.description}
          rules={[{ required: true, message: 'Please input description!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Is removable" name="removable" initialValue={selectedItem?.removable} valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item className={classes.submitBtn}>
          <Button type="primary" htmlType="submit" loading={pending}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </ModalAntD>
  );
};

export default Modify;
