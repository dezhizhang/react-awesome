
import { useState } from 'react'
/** @jsx jsx */
import { jsx,css } from '@emotion/react';

const styles = css({
  color: 'hotpink'
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <div css={styles}>
    hello
    </div>
  )
}

export default App
