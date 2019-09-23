import React from 'react'
import Button__Primary from '../../../../component/block/button/primary/index.jsx'
import Container__Billboard from '../../../../component/block/container/billboard/index.jsx'
import layout from './layout.scss'
import Typography__Loud from '../../../../component/block/typography/loud/index.jsx'
import Typography__Sub_Loud from '../../../../component/block/typography/sub-loud/index.jsx'
import grid from '../../../../asset/grid.scss'

const CTA__Welcome = () => (

  <Container__Billboard>
    <div className={grid.row}>
      <div className={grid.col + ' ' + grid.col12}>

        <div className={layout.typography__loud}>
          <Typography__Loud
            text='Block Component Design'
          />
        </div>

        <div className={layout.typography__sub_loud}>
          <Typography__Sub_Loud
            text='A complete structure for digital applications'
          />
        </div>

        <div className={layout.button__primary}>
          <Button__Primary
            href='/getting-started'
            // onColor='true'
            text='Get started'
          />
        </div>

      </div>
    </div>
  </Container__Billboard>

)

export default CTA__Welcome
