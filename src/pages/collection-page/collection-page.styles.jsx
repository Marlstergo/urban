import styled from 'styled-components'

export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    .items{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    align-items: center;
    & .collection-item{
        margin-bottom: 30px;
    }
    }
    .name{
    font-size: 2rem;
    margin-bottom: 30px;
`