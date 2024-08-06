import { rtkApi } from '@/shared/api/rtkApi';

import { Notification } from '../types/notification';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotificationList: build.query<Notification[], null>({
            query: () => ({
                url: '/notifications',
                params: {},
            }),
        }),
    }),
});

export const useNotificationList = notificationApi.useGetNotificationListQuery;
