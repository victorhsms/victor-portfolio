import { MainContent } from './style'
import HeaderComponent from '../components/header'
import Apresentation from '../components/apresentation'
import FooterComponent from '../components/footer'

export default function Home() {
  return (
    <MainContent>
      <HeaderComponent />
      <Apresentation />
      <FooterComponent />
    </MainContent>
  )
}
