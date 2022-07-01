import { Footer } from './style'
import Linkedin from '../social/linkedin'
import Gmail from '../social/gmail'
import Github from '../social/github'
import Link from 'next/link'

export default function FooterComponent() {
  return (
    <Footer>
      <div className="legend">
        <span>find me in:</span>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="mailto:victorhsmsantos@gmail.com">
              <a>
                <Gmail />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/victor-hugo-santos/">
              <a>
                <Linkedin />
              </a>
            </Link>
          </li>
        </ul>
        <Link href="https://github.com/victorhsms">
          <a className="github-id">
            <span>@victorhsms</span>
            <Github />
          </a>
        </Link>
      </nav>
    </Footer>
  )
}
