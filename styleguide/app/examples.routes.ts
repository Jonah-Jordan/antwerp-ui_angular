import { AVATAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/avatar';
import { CALENDAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/calendar';
import { FLYOUT_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/flyout';
import { LOCALSTORAGE_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/localstorage';
import { LOGO_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/logo';
import { PAGINATION_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/pagination';
import { PROGRESS_BAR_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/progress-bar';
import { SELECTABLE_LIST_EXAMPLES_ROUTES } from '@acpaas-ui/ngx-examples/selectable-list';

export const EXAMPLES_ROUTES = [
	{ path: 'avatar', children: AVATAR_EXAMPLES_ROUTES, title: 'Avatar', },
	{ path: 'calendar', children: CALENDAR_EXAMPLES_ROUTES, title: 'Calendar', },
	{ path: 'flyout', children: FLYOUT_EXAMPLES_ROUTES, title: 'Flyout', },
	{ path: 'localstorage', children: LOCALSTORAGE_EXAMPLES_ROUTES, title: 'Localstorage', },
	{ path: 'logo', children: LOGO_EXAMPLES_ROUTES, title: 'Logo', },
	{ path: 'pagination', children: PAGINATION_EXAMPLES_ROUTES, title: 'Pagination', },
	{ path: 'progress-bar', children: PROGRESS_BAR_EXAMPLES_ROUTES, title: 'Progress bar', },
	{ path: 'selectable-list', children: SELECTABLE_LIST_EXAMPLES_ROUTES, title: 'Selectable list', },
];
