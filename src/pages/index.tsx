import Image from 'next/image'
import type { FC } from 'react'

import { CONSTANTS } from '@/utils/constants'

const Home: FC = () => {
  const { LOGO_ALT } = CONSTANTS

  return (
    <div>
      <div>
        <Image alt={LOGO_ALT} src={require('#/images/big_logo.png')} />
      </div>
      <div>
        <button>test</button>
        <button>test2</button>
      </div>
    </div>
  )
}

export default Home
