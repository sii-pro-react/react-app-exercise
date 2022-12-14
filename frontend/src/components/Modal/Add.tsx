import { Button, Form, Input, Modal as ModalAntD, Switch } from 'antd';
import { useContext } from 'react';
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
  const [form] = Form.useForm();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values: Omit<IDataItem, 'id'>) => {
    try {
      await addItem({ ...values, enabled: Boolean(values.enabled) });
      setData(await fetchData());
      form.resetFields();
      alert?.success('Element added successfully');
    } catch (error) {
      console.error(error);
      alert?.error('Error occurred - please try again');
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <ModalAntD title={`Add new item`} open={isModalOpen} onCancel={handleCancel} footer={false}>
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
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

          <Form.Item label="Is enabled" name="enabled" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item className={classes.submitBtn}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </ModalAntD>
    </>
  );
};

export default Add;
