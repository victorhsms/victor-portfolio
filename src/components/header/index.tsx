import { Header } from './style'
import Link from 'next/link'

export default function HeaderComponent() {
  return (
    <Header>
      <div className="title-container">
        <strong>victor-hugo</strong>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="">
              <a>_hello</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>_about-me</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>_projects</a>
            </Link>
          </li>
        </ul>
        <span>
          <Link href="">
            <a>_contact_me</a>
          </Link>
        </span>
      </nav>
    </Header>
  )
}
