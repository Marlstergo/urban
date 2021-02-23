import styled, {css} from 'styled-components'

import {Link} from 'react-router-dom'

const optioncontainerstyles = css`
    color: rgba(17, 16, 16, 0.795);
    text-decoration: none;
    margin-left: 3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const LogoContainer = styled(Link)`
    margin-left: 0;
`
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`

export const LinksContainer = styled.div`
    width: 50%;
    // justify-content: space-between;
    display: flex;
    justify-content: flex-end;  
`

export const LinkContainer = styled(Link)`
    ${optioncontainerstyles}
`

export const OptionDiv = styled.div`
    ${optioncontainerstyles}
`
