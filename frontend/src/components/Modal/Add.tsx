import { Button, Form, Input, Modal as ModalAntD, Switch } from 'antd';
import { useContext, useState } from 'react';
import { fetchData, addItem } from '../../api';
import { Context } from '../../App';
import type { IDataItem } from '../../types';
import classes from './style.module.scss';

interface IAddModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  setData: React.Dispatch<React.SetStateAction<IDataItem[] | null>>;
}

const Add = ({ setIsModalOpen, isModalOpen, setData }: IAddModalProps) => {
  const alert = useContext(Context);
  const [pending, setPending] = useState(false);
  const [form] = Form.useForm();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values: Omit<IDataItem, 'id'>) => {
    try {
      setPending(true);
      await addItem({ ...values, removable: Boolean(values.removable) });
      setData(await fetchData());
      form.resetFields();
      alert?.success('Element added successfully');
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
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input name!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input description!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Is removable" name="removable" valuePropName="checked">
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

export default Add;
