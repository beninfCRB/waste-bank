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
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                }}
                className='text-right'
            >
            </Header >
            <Content className="site-layout" style={{ padding: '0 50px' }}>
                <div className='mt-10 grid place-content-center' style={{ padding: 24, minHeight: 380, background: colorBgContainer }}>
                    <Card
                        className='w-full'
                    >
                        {children}
                    </Card>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Kalkulator Bank Sampah</Footer>
        </Layout >
    );
}
