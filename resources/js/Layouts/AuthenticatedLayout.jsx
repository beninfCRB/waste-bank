import { useState } from 'react';
// import ApplicationLogo from '@/Components/ApplicationLogo';
// import Dropdown from '@/Components/Dropdown';
// import NavLink from '@/Components/NavLink';
// import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import {
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UnorderedListOutlined,
    UserAddOutlined,
} from '@ant-design/icons';
import { Button, Col, Dropdown, Layout, Menu, Row, Space, theme } from 'antd';
const { Header, Content, Sider } = Layout;

export default function Authenticated({ user, children }) {
    const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer }
    } = theme.useToken();

    const items = [
        {
            key: '1',
            label: (
                <Link href={route('profile.edit')}>
                    <UserAddOutlined /> Profile
                </Link>
            ),
        },
        {
            key: '2',
            danger: true,
            label: (
                <Link href={route('logout')} method='post' as='button'>
                    <LogoutOutlined /> Keluar
                </Link>
            ),
        },
    ];

    return (
        <Layout style={{ flexDirection: 'initial' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UnorderedListOutlined />,
                            label: <Link href={'/waste-type'}>Jenis Sampah</Link>,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                    className='text-right'
                >
                    <Row>
                        <Col>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                }}
                            />
                        </Col>
                        <Col>
                            <Dropdown
                                className='w-10'
                                menu={{ items }}
                                trigger={['click']}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space className='hover:text-red-400 hover:scale-110'>
                                        {user.name}
                                    </Space>
                                </a>
                            </Dropdown>
                        </Col>
                    </Row>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );



    // const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    // return (
    //     <div className="min-h-screen bg-gray-100">
    //         <nav className="bg-white border-b border-gray-100">
    //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //                 <div className="flex justify-between h-16">
    //                     <div className="flex">
    //                         <div className="shrink-0 flex items-center">
    //                             <Link href="/">
    //                                 <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
    //                             </Link>
    //                         </div>

    //                         <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
    //                             <NavLink href={route('dashboard')} active={route().current('dashboard')}>
    //                                 Dashboard
    //                             </NavLink>
    //                         </div>
    //                     </div>

    //                     <div className="hidden sm:flex sm:items-center sm:ml-6">
    //                         <div className="ml-3 relative">
    //                             <Dropdown>
    //                                 <Dropdown.Trigger>
    //                                     <span className="inline-flex rounded-md">
    //                                         <button
    //                                             type="button"
    //                                             className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
    //                                         >
    //                                             {user.name}

    //                                             <svg
    //                                                 className="ml-2 -mr-0.5 h-4 w-4"
    //                                                 xmlns="http://www.w3.org/2000/svg"
    //                                                 viewBox="0 0 20 20"
    //                                                 fill="currentColor"
    //                                             >
    //                                                 <path
    //                                                     fillRule="evenodd"
    //                                                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //                                                     clipRule="evenodd"
    //                                                 />
    //                                             </svg>
    //                                         </button>
    //                                     </span>
    //                                 </Dropdown.Trigger>

    //                                 <Dropdown.Content>
    //                                     <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
    //                                     <Dropdown.Link href={route('logout')} method="post" as="button">
    //                                         Log Out
    //                                     </Dropdown.Link>
    //                                 </Dropdown.Content>
    //                             </Dropdown>
    //                         </div>
    //                     </div>

    //                     <div className="-mr-2 flex items-center sm:hidden">
    //                         <button
    //                             onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
    //                             className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
    //                         >
    //                             <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
    //                                 <path
    //                                     className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
    //                                     strokeLinecap="round"
    //                                     strokeLinejoin="round"
    //                                     strokeWidth="2"
    //                                     d="M4 6h16M4 12h16M4 18h16"
    //                                 />
    //                                 <path
    //                                     className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
    //                                     strokeLinecap="round"
    //                                     strokeLinejoin="round"
    //                                     strokeWidth="2"
    //                                     d="M6 18L18 6M6 6l12 12"
    //                                 />
    //                             </svg>
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>

    //             <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
    //                 <div className="pt-2 pb-3 space-y-1">
    //                     <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
    //                         Dashboard
    //                     </ResponsiveNavLink>
    //                 </div>

    //                 <div className="pt-4 pb-1 border-t border-gray-200">
    //                     <div className="px-4">
    //                         <div className="font-medium text-base text-gray-800">{user.name}</div>
    //                         <div className="font-medium text-sm text-gray-500">{user.email}</div>
    //                     </div>

    //                     <div className="mt-3 space-y-1">
    //                         <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
    //                         <ResponsiveNavLink method="post" href={route('logout')} as="button">
    //                             Log Out
    //                         </ResponsiveNavLink>
    //                     </div>
    //                 </div>
    //             </div>
    //         </nav>

    //         {header && (
    //             <header className="bg-white shadow">
    //                 <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
    //             </header>
    //         )}

    //         <main>{children}</main>
    //     </div>
    // );
}