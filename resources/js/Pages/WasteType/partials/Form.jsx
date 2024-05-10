import { Form, Input, InputNumber } from 'antd'
import React from 'react'

export default function FormWasteType({ form }) {
    return (
        <Form
            key={'ApprovalStatusForm'}
            layout='vertical'
            form={form}
            initialValues={{ layout: 'vertical' }}
        >
            <Form.Item
                label='Nama'
                name={'name'}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Masukan Nama'
                    }
                ]}
            >
                <Input
                    placeholder='Masukan Nama'
                />
            </Form.Item>
            <Form.Item
                label='Deskripsi'
                name={'description'}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Masukan Deskripsi'
                    }
                ]}
            >
                <Input.TextArea
                    placeholder='Masukan Deskripsi'
                />
            </Form.Item>
            <Form.Item
                label='Harga'
                name={'price'}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Masukan Harga'
                    }
                ]}
            >
                <InputNumber
                    className='w-full'
                    addonBefore='Rp.'
                    placeholder='Masukan Harga'
                />
            </Form.Item>
        </Form>
    )
}
