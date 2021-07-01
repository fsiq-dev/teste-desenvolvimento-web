import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        
    }

    #root {
        display:flex;
        flex-direction:column;
        height: 100vh;
    }
    .pagination {
      width: 500px;
      display: flex;
      margin: auto;
      list-style: none;
      justify-content: space-between;
      padding: 25px;
    }
`

export default GlobalStyle
