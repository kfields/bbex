import HeaderShell from 'components/HeaderShell'
import FooterShell from 'components/FooterShell'
import QDatetime from 'components/QDatetime'

export default async ({ app, store, Vue }) => {
  Vue.component('header-shell', HeaderShell)
  Vue.component('footer-shell', FooterShell)
  Vue.component('q-datetime', QDatetime)
}
