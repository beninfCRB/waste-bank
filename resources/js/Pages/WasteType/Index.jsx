import { Button, Card, Table, Tooltip, message } from "antd";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from "@inertiajs/react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import ModalAdd from "./partials/Add";
import ModalEdit from "./partials/Edit";

export default function WasteTypeIndex({ auth, data }) {
    const [isModalAddOpen, setIsModalAddOpen] = useState(false);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [_data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const columns = [
        {
            title: 'Nama',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Deskripsi',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Harga',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            key: '',
            render: (value) => (
                <div className='flex items-stretch gap-x-2'>
                    <Tooltip title='Ubah Data' placement='left'>
                        <Button className='bg-slate-400 border-black hover:scale-150' size='small' shape='circle' onClick={() => onEdit(value)}><EditOutlined style={{ color: 'white' }} /></Button>
                    </Tooltip>
                    <Tooltip title='Hapus Data'>
                        <Button className='bg-red-600  border-black hover:scale-150' size='small' shape='circle' onClick={() => onDelete(value)}><DeleteOutlined style={{ color: 'white' }} /></Button>
                    </Tooltip>
                </div>
            )
        },
    ];

    const onAdd = () => {
        setIsModalAddOpen(true)
    }

    const onEdit = (data) => {
        setIsModalEditOpen(true)
        setData(data)
    }

    const onDelete = (data) => {
        router.delete(`waste-type/${data.id}/delete`, {
            onProgress: () => {
                setLoading(true)
            },
            onSuccess: () => {
                message.success('Data berhasil dihapus')
                setLoading(false)
            }
        })
    }

    const onCancel = () => {
        isModalAddOpen && setIsModalAddOpen(false)
        isModalEditOpen && setIsModalEditOpen(false)
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Jenis Sampah</h2>}
        >
            <Head title="Jenis Sampah" />
            <Card
                title='Data Jenis Sampah'
                extra={<Button onClick={onAdd}>Tambah</Button>}
                loading={loading}
            >
                <Table columns={columns} dataSource={data} />
            </Card>
            <ModalAdd
                modal={isModalAddOpen}
                setModal={setIsModalAddOpen}
                onCancel={onCancel}
            />
            <ModalEdit
                modal={isModalEditOpen}
                setModal={setIsModalEditOpen}
                onCancel={onCancel}
                data={_data}
            />
        </AuthenticatedLayout>
    )
}