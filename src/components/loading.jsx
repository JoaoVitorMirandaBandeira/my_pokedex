import styled from "styled-components"
import pokebola from '../public/pokebola.gif'
import '../style/loading.scss'
const DivLoading = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 999;
  height: 100%;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Loading = () => {
    return(
        <div className="loading">
            <img src={pokebola} alt="gif de uma bokebola" width={80} height={80} />
        </div>
    )
}