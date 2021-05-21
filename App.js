import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import AppHeader from './assets/components/header';
import AppHome from './views/home';
import OnBoard from './views/OnBoard';
import SignIn from './views/signIn';
import SignUp from './views/signUp';
import Verification from './views/verification';
import HeaderUser from './assets/components/user/header';
import { Layout } from 'antd';
import UserHome from './views/UserHome';
import UserDetailProduct from './views/UserDetailProduct';
import UserCart from './views/UserCart';
import UserFavorite from './views/UserFavorite';
import UserDetailHistory from './views/UserDetailHistory';
import UserHistory from './views/UserHistory';
import UserProfile from './views/UserProfile';
const { Header, Content, Footer } = Layout;

const App = () => {
    return (
        <Layout className="mainLayout">
            {/* <Header>
                <AppHeader />
            </Header> */}
            <Content>
                <UserProfile/>
            </Content>
        </Layout>
    )
};

export default App;