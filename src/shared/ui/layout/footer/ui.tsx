import styled from "@emotion/styled"

type FooterProps = {
  height: number
}

export const Footer = ({ height }: FooterProps) => {
  return (
    <FooterWrapper height={height}>

    </FooterWrapper>
  )
}

type WrapperProps = {
  height: number
}

const FooterWrapper = styled.footer<WrapperProps>(({ height }) => ({
  width: '100vw',
  height,
  background: '#554488',
  position: 'absolute',
  bottom: 0
}))