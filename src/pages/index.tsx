import { MainContent } from './style'
import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'

export default function Home() {
  return (
    <MainContent>
      <HeaderComponent />
      <FooterComponent />
    </MainContent>
  )
}
