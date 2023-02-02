import { Content } from "../content"
import { Footer } from "./footer"
import { Header } from "./header"
import styled from "@emotion/styled"

type LayoutProps = {
  children: JSX.Element
}

const headerHeight = 80
const footerHeight = 80

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header height={headerHeight} />
      <Main>
        <Content>
          {children}
        </Content>
      </Main>
      <Footer height={footerHeight} />
    </>
  )
}

const Main = styled.main({
  width: '100vw',
  minHeight: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`
})