import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/sidebar/about.svg';
import ArticlesIcon from '@/shared/assets/icons/sidebar/articles.svg';
import MainIcon from '@/shared/assets/icons/sidebar/main.svg';
import ProfileIcon from '@/shared/assets/icons/sidebar/profile.svg';
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                Icon: MainIcon,
                text: 'main',
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: 'about',
            },
            
        ];
        if (userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    Icon: ProfileIcon,
                    text: 'profil',
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    Icon: ArticlesIcon,
                    text: 'articles',
                    authOnly: true,
                },
            );
        }
        
        return sidebarItemsList;
    },
);