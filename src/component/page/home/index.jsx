import React from 'react'
import Container__Section from '../../../component/block/container/section/index.jsx'
import CTA__Welcome from '../../../component/module/cta/welcome/index.jsx'
import grid from '../../../asset/grid.scss'
import Imagery__Simple from '../../../component/block/imagery/simple/index.jsx'
import Typography__Body_Copy from '../../../component/block/typography/body-copy/index.jsx'
import Typography__Section_Title from '../../../component/block/typography/section-title/index.jsx'
import Typography__Sub_Heading from '../../../component/block/typography/sub-heading/index.jsx'

const HomePage = () => (
  <React.Fragment>

    <CTA__Welcome />

    <Container__Section>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col10}>
          <Typography__Section_Title
            text='BCD is a methodology to organise and manage components. It encourages consistency and provides complete control over each component idependently. The system is split into three libraries; Assets, Behaviours and Components (ABC).'
          />
        </div>
      </div>

      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col10}>
          <Imagery__Simple>
            <img
              alt='BCD overview'
              src='/asset/img/bcd-overview.png'
              width='100%'
            />
          </Imagery__Simple>
        </div>
      </div>

      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col10}>
          <Typography__Sub_Heading
            text='Assets'
          />
          <Typography__Body_Copy
            text='Assets are used within components, usually for styling purposes. Think of assets as a brand styleguide. It includes colours, fonts and icons. Components only use Assets defined in this section, which will encourage branding consistency and reduce code duplication.'
          />

          <Typography__Sub_Heading
            text='Behaviours'
          />
          <Typography__Body_Copy
            text='Behaviours define how the application reacts to certain situations. This can touch many areas like user interactions and how data is handled. Think of it as every pre-defined action will have a particular response.'
          />

          <Typography__Sub_Heading
            text='Components'
          />
          <Typography__Body_Copy
            text='At the core of BCD, Components are formed using two key elements; Blocks and Modules. Each Component may consume items from Assets and Behaviours, and used to create pages and views.'
          />

          {/* <Button__Primary
            href='/components'
            text='More about Components'
          /><br /><br /><br /> */}
        </div>
      </div>
    </Container__Section>

  </React.Fragment>
)

export default HomePage
