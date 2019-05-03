import React from 'react'
import Button__Primary from '../../../component/block/button/primary/index.jsx'
import Container__Billboard from '../../../component/block/container/billboard/index.jsx'
import Container__Section from '../../../component/block/container/section/index.jsx'
import grid from '../../../asset/grid.scss';
import Imagery__Example from '../../../component/block/imagery/example/index.jsx'
import Typography__Body_Copy from '../../../component/block/typography/body-copy/index.jsx'
import Typography__Loud from '../../../component/block/typography/loud/index.jsx'
import Typography__Section_Title from '../../../component/block/typography/section-title/index.jsx'
import Typography__Sub_Loud from '../../../component/block/typography/sub-loud/index.jsx'
import Typography__Sub_Heading from '../../../component/block/typography/sub-heading/index.jsx'

const HomePage = () => (
  <React.Fragment>

    <Container__Billboard>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col12}>
          <Typography__Loud
            text='Block Component Design'
          />
          <Typography__Sub_Loud
            text='A complete structure for your digital components'
          />
        </div>
      </div>
    </Container__Billboard>

    <Container__Section>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col10}>
          <Typography__Section_Title
            text='BCD is a methodology to organise components into manageable elements. It ensures consistency whilst allowing flexibility for business requirements. Design language and naming conventions are downstreamed from the design community to software engineering, allowing for a seamless integration.'
          />
        </div>
      </div>

      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col10}>
          <Imagery__Example>
            <img
              alt='BCD overview'
              src='/asset/img/bcd-overview.png'
              width='100%'
            />
          </Imagery__Example><br /><br />
        </div>
      </div>

      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col10}>
          <Typography__Sub_Heading
            text='Components'
          />
          <Typography__Body_Copy
            text='At the core of BCD, Components are formed using two key elements; Blocks and Modules. Each Component may also consume things from Assets and Behaviours.'
          />

          {/* <Button__Primary
            href='/components'
            text='More about Components'
          /><br /><br /><br /> */}

          <Typography__Sub_Heading
            text='Assets'
          />
          <Typography__Body_Copy
            text='Assets are used within components, usually for styling purposes. They include Colours, Fonts and Icons. Components only use Assets defined in this section, which will encourage consistency in the visual design.'
          />

          <Typography__Sub_Heading
            text='Behaviours'
          />
          <Typography__Body_Copy
            text='Behaviours define how a user will interact with the application. They help manage the user experience and control data into the system.'
          />
        </div>
      </div>
    </Container__Section>

  </React.Fragment>
)

export default HomePage
