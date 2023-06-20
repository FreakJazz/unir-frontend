import { bagOutline, cartOutline, manOutline, mapOutline, statsChartOutline } from 'ionicons/icons';

export const Sections = [
	{
		title: 'General',
		items: [
			{
				title: 'Descripción General',
				path: '/overview',
				icon: statsChartOutline,
			},
			{
				title: 'Logistica',
				path: '/logistic',
				icon: mapOutline,
			},
		],
	},
	{
		title: 'Gestion',
		items: [
			{
				title: 'Clientes',
				path: '/client',
				icon: manOutline,
			},
			{
				title: 'Productos',
				path: '/product',
				icon: bagOutline,
			},
			{
				title: 'Pedidos',
				path: '/order',
				icon: cartOutline,
			},
		],
	},
];
