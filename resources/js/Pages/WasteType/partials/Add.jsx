import { Button, Form, Modal, Spin, message } from "antd";
import { router } from "@inertiajs/react";
import FormWasteType from "./Form";
import { useState } from "react";

export default function ModalAdd({ modal, onCancel, setModal }) {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)

    const onSubmit = () => {
        form.validateFields().then((values) => {
            router.post('waste-type', values, {
                onProgress: () => {
                    setLoading(true)
                },
                onSuccess: () => {
                    message.success('Data berhasil ditambahkan')
                    form.resetFields()
                    router.reload({ only: ['data'] })
                    setModal(false)
                    setLoading(false)
                },
                onError: () => {
                    message.error('Data gagal ditambahkan')
                    form.resetFields()
                    router.reload({ only: ['data'] })
                    setModal(false)
                    setLoading(false)
                }
            })
        }).catch((errorInfo) => {
            Object.keys(errorInfo.errorFields).map((error) => {
                return form.scrollToField(errorInfo.errorFields[error].name[0])
            })
        });
    };

    return (
        <Modal
            title="TAMBAH JENIS SAMPAH"
            width={'75%'}
            open={modal}
            forceRender={true}
            footer={
                <div className="text-right">
                    <Button type="primary" onClick={onSubmit}>Simpan</Button>
                    <Button type="default" onClick={onCancel}>Batal</Button>
                </div>
            }
            onCancel={onCancel}
        >
            <Spin
                spinning={loading}
            >
                <FormWasteType
                    form={form}
                />
            </Spin>
        </Modal>
    )
} 