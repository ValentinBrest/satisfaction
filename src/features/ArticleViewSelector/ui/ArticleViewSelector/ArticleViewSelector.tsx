import { memo } from 'react';

import { ArticleView } from '@/entities/Article';
import GridIcon from '@/shared/assets/icons/article/grid.svg';
import ListIcon from '@/shared/assets/icons/article/list.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui';
import { Icon } from '@/shared/ui/Icon';

import cl from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.GRID,
        icon: <Icon width={24} height={24} Svg={GridIcon} />,
    },
    {
        view: ArticleView.LIST,
        icon: <Icon width={24} height={24} Svg={ListIcon} />,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => {
        return () => {
            onViewClick?.(newView);
        };
    };

    return (
        <div className={classNames(cl.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    key={viewType.view}
                    onClick={onClick(viewType.view)}
                    className={classNames(cl.icon, {
                        [cl.selected]: viewType.view === view,
                    })}
                >
                    {viewType.icon}
                </Button>
            ))}
        </div>
    );
});
