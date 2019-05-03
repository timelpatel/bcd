import React from 'react'
import Button__Social from '../../../../component/block/button/social/index.jsx'
import grid from '../../../../asset/grid.scss';

const Social = () => (

  <div className={grid.row}>
    <div className={grid.col}>
      <Button__Social
        css='linkedin'
        href='https://linkedin.com/in/timelpatel'
        text='LinkedIn'
      />
  </div>

  <div className={grid.col}>
      <Button__Social
        css='twitter'
        href='https://twitter.com/timelpatel'
        text='Twitter'
      />
  </div>

  <div className={grid.col}>
      <Button__Social
        css='instagram'
        href='https://instagram.com/timelpatel/'
        text='Instagram'
      />
    </div>
  </div>

)

export default Social
