export default [
  {
    path: '/settings',
    name: 'settingsIndex',
    component: () => import('../../views/settings/index.vue'),
    meta: {
      title: '设置'
    }
  }
];