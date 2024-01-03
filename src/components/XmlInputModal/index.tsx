import { XML_INPUT_EXAMPLE } from '@/constants/examples';
import { getSchemaByXml } from '@/services/sqlService';
import { Button, Form, message, Modal, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';

interface Props {
  onSubmit: (values: TableSchema) => void;
  visible: boolean;
  onClose: () => void;
}

/**
 * 建表 SQL 输入模态框
 *
 * @constructor
 */
const SqlInput: React.FC<Props> = (props) => {
  const { onSubmit, visible, onClose } = props;
  const [form] = Form.useForm();

  /**
   * xml 转为 schema
   * @param values
   */
  const onFinish = async (values: any) => {
    if (!values.sql) {
      return;
    }
    try {
      const res = await getSchemaByXml(values);
      onSubmit?.(res.data);
    } catch (e: any) {
      message.error('导入错误，' + e.message);
    }
  };

  return (
    <Modal title="导入xml 数据格式" open={visible} footer={null} onCancel={onClose}>
      <Form<GenerateBySqlRequest>
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="xml"
          label={
            <>
              请输入xml 数据格式 语句：
              <Button
                onClick={() => form.setFieldValue('xml', XML_INPUT_EXAMPLE)}
              >
                导入示例
              </Button>
            </>
          }
          rules={[{ required: true, message: '请输入xml 数据格式' }]}
        >
          <TextArea
            placeholder="请输入xml 数据格式，可以在生成结果后复制"
            autoSize={{ minRows: 16 }}
          />
        </Form.Item>
        <Form.Item>
          <Space size="large">
            <Button type="primary" htmlType="submit" style={{ width: 120 }}>
              导入
            </Button>
            <Button htmlType="reset">重置</Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SqlInput;
