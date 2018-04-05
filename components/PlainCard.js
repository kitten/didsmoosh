import styled from 'styled-components'
import { rem } from 'polished'

const Wrapper = styled.div`
  color: #0e1e25;
  margin: ${rem(25)} ${rem(40)};
`

const CardContent = styled.div`
  padding: ${rem(24)} ${rem(32)} ${rem(24)} ${rem(32)};
  min-height: ${rem(480)};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  text-align: center;
  width: ${rem(620)};

  background: #fff;
  box-shadow: ${rem(5)} ${rem(35)} ${rem(85)} rgba(0, 0, 0, 0.34);
  border-radius: ${rem(4)};
`


const PlainCard = ({ children }) => (
  <Wrapper>
    <CardContent>
      {children}
    </CardContent>
  </Wrapper>
)

export default PlainCard
