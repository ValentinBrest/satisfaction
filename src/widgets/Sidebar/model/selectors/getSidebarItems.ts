import { createSelector } from '@reduxjs/toolkit';
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import { getUserAuthData } from 'entities/User';
import AboutIcon from 'shared/assets/icons/sidebar/about.svg';
import ArticlesIcon from 'shared/assets/icons/sidebar/articles.svg';
import MainIcon from 'shared/assets/icons/sidebar/main.svg';
import ProfileIcon from 'shared/assets/icons/sidebar/profile.svg';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Главная',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'О сайте',
            },
            
        ];
        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticlesIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }
        
        return sidebarItemsList;
    },
);