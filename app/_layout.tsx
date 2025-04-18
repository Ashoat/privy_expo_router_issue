import { PrivyProvider } from "@privy-io/react-auth";
import { styled} from 'styled-components'

console.log(styled, styled.div, styled.div.withConfig)

export default function RootLayout() {
  return (
    <>
      <PrivyProvider appId="cm9k1qxs8000hqa1fpacxand0">hi</PrivyProvider>
    </>
  );
}
