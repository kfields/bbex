
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home') },
      { path: 'setup', component: () => import('pages/Setup') },
      { path: 'bookmarks', component: () => import('pages/Bookmarks') },
      { path: 'bookmarks/:id', component: () => import('pages/Resource'), props: true },
      { path: 'history', component: () => import('pages/History') },
      { path: 'history/:id', component: () => import('pages/Resource'), props: true },
      { path: 'favorites', component: () => import('pages/Favorites') },
      { path: 'favorites/:id', component: () => import('pages/Resource'), props: true },
      { path: 'resources', component: () => import('pages/Resources') },
      { path: 'resources/:id', component: () => import('pages/Resource'), props: true }
    ]
  },
  { path: '/popup', component: () => import('pages/Popup.vue') }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
