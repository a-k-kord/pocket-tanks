import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Loader from 'react-loader-spinner';
import { Title } from 'components/components/Title/Title';
import { Tabs } from 'components/components/Tabs/Tabs';
import { Page } from '../components/Page/Page';
import { getUserNickname } from '../../../redux/selectors/user-state';

import { sendNotificationDefault } from '../../../modules/notifications/notifications';

import './Profile.css';

const tabs = ['Данные', 'Аватар', 'Пароль'];

const Spinner = () => (
    <div className="profile-spinner">
        <Loader type="BallTriangle" color="#f9a600" width="200" height="200" />
    </div>
);

export const Profile = () => {
    const userName = useSelector(getUserNickname);

    useEffect(() => {
        setTimeout(() => {
            sendNotificationDefault('Загрузка данных отключена');
        }, 1000);
    }, []);

    return (
        <Page>
            <div className="profile-wrapper">
                <Title className="title title_middle" text={userName ?? 'Загрузка...'} />
                {userName ? <Tabs tabs={tabs} /> : <Spinner />}
            </div>
        </Page>
    );
};
