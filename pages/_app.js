import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import '../styles/globals.css'
import 'antd/dist/antd.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import List from '../src/components/commons'


function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <List>
      <Component {...pageProps} />
      </List>
    </ApolloProvider>
  )
}

export default MyApp
