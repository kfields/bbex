
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages') },
      { path: 'bookmarks', component: () => import('pages/Bookmarks') },
      { path: 'bookmarks/:id', component: () => import('pages/Bookmark'), props: true },
      { path: 'url/:id', component: () => import('pages/Resource'), props: true },
      { path: 'history', component: () => import('pages/History') }
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
