import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/sidebar/about.svg';
import ArticlesIcon from 'shared/assets/icons/sidebar/articles.svg';
import MainIcon from 'shared/assets/icons/sidebar/main.svg';
import ProfileIcon from 'shared/assets/icons/sidebar/profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
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
    {
        path: RoutePath.profile,
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
];