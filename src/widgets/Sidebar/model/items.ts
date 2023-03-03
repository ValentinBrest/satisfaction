import { RoutePath } from 'app/providers/router/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/sidebar/about.svg';
import MainIcon from 'shared/assets/icons/sidebar/main.svg';
import ProfileIcon from 'shared/assets/icons/sidebar/profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
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
    },
];