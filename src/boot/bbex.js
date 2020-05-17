import QSection from 'components/QSection'
import QSectionHeader from 'components/QSectionHeader'
import HeaderShell from 'components/HeaderShell'
import FooterShell from 'components/FooterShell'
import QDatetime from 'components/QDatetime'

export default async ({ app, store, Vue }) => {
  Vue.component('q-section', QSection)
  Vue.component('q-section-header', QSectionHeader)
  Vue.component('header-shell', HeaderShell)
  Vue.component('footer-shell', FooterShell)
  Vue.component('q-datetime', QDatetime)
}
