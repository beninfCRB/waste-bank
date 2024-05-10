import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link } from '@inertiajs/react';
import { Card, Layout, theme } from 'antd';

const { Header, Content, Footer } = Layout;

export default function Guest({ children }) {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Head title="Welcome" />
            <Content className="site-layout" style={{ padding: '0 50px' }}>
                <div className='mt-40 flex items-center justify-center'>
                    <Card
                        className='w-80'
                    >
                        {children}
                    </Card>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Kalkulator Bank Sampah</Footer>
        </Layout >
    );
}
