import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { Content } from "../../content"
import { Logo as LogoImg } from "../../logo"

type HeaderProps = {
  height: number
}

export const Header = ({ height }: HeaderProps) => {
  return (
    <HeaderWrapper height={height}>
      <Content>
        <HeaderContainer>
          <Logo>
            <LogoImg />
            <Link to={'/'}>
              <h1>Кукбук</h1>
            </Link>
          </Logo>
          <Controls>
            <Navigation>
              <Link to={'recipes'}>
                Рецепты
              </Link>
              <div>Генератор</div>
              <SearchBar>

              </SearchBar>
            </Navigation>
            <Auth>

            </Auth>
          </Controls>
        </HeaderContainer>
      </Content>
    </HeaderWrapper>
  )
}

type WrapperProps = {
  height: number
}

const HeaderWrapper = styled.header<WrapperProps>(({ height }) => ({
  position: 'sticky',
  top: 0,
  width: '100vw',
  height,
  background: '#f9f9f9',
  borderBottom: '1px solid #d9d9d9'
}))

const HeaderContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 20
})

const Logo = styled.div({
  display: 'flex',
  gap: 8,
  alignItems: 'center'
})

const Navigation = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: 16
})

const SearchBar = styled.div({
  width: 250,
  height: 40,
  background: 'black'
})

const Auth = styled.div({
  width: 200,
  height: '60px',
  background: 'black'
})

const Controls = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%'
})