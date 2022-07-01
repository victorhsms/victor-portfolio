import Link from 'next/link'
import { Main } from './style'

export default function Apresentation() {
  return (
    <Main>
      <div className="introduction-container">
        <div className="title-introduction">
          <h2>
            Olá pessoas. Eu sou o<span>Victor Hugo</span>
          </h2>
          <span className="job"> {'>'} Desenvolvedor FullStack</span>
        </div>
        <div className="repository-introduction">
          <p className="comment">// você pode ver o repositório</p>
          <p className="comment">// desse portfólio pelo link abaixo</p>
          <p>
            <span className="const">const</span>{' '}
            <span className="variable-name">githubLink</span> ={' '}
            <Link href="https://github.com/victorhsms/victor-portfolio">
              <a className="string">
                “<span>https://github.com/victorhsms/victor-portfolio</span>”
              </a>
            </Link>
          </p>
        </div>
      </div>
    </Main>
  )
}
