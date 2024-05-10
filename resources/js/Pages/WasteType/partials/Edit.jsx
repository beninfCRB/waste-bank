import { Button, Form, Modal, message } from "antd";
import { router } from "@inertiajs/react";
import FormWasteType from "./Form";
import { useEffect, useState } from "react";

export default function ModalEdit({ modal, onCancel, setModal, data }) {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (data) {
            form.setFieldsValue({
                ...data
            })
        }
    }, [data])

    const onSubmit = () => {
        form.validateFields().then((values) => {
            router.put(`waste-type/${data.id}/edit`, values, {
                onProgress: () => {
                    setLoading(true)
                },
                onSuccess: () => {
                    message.success('Data berhasil diubah')
                    form.resetFields()
                    router.reload({ only: ['data'] })
                    setModal(false)
                    setLoading(false)
                },
                onError: () => {
                    message.error('Data gagal diubah')
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
            title="UBAH JENIS SAMPAH"
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
            <FormWasteType
                form={form}
            />
        </Modal>
    )
} 