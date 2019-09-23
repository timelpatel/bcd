import React from 'react'
import Container__Chic from '../../../component/block/container/chic/index.jsx'
import Container__Section from '../../../component/block/container/section/index.jsx'
import grid from '../../../asset/grid.scss';
import Notification__Tip from '../../../component/block/notification/tip/index.jsx'
import Table__Content from '../../../component/block/table/content/index.jsx'
import Typography__Body_Copy from '../../../component/block/typography/body-copy/index.jsx'
import Typography__Code from '../../../component/block/typography/code/index.jsx'
import Typography__Page_Title from '../../../component/block/typography/page-title/index.jsx'
import Typography__Section_Title from '../../../component/block/typography/section-title/index.jsx'
import Typography__Sub_Heading from '../../../component/block/typography/sub-heading/index.jsx'

const BehavioursPage = () => (
  <React.Fragment>
    <Container__Chic>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col10}>
          <Typography__Page_Title
            text='Behaviours'
          />
          <Typography__Body_Copy
            text='The Behaviours library covers all aspects of how we envisage behavioural expectations and helps to create a consistant experience.'
          />
        </div>
      </div>
    </Container__Chic>

    <Container__Section>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col10}>
          <Typography__Section_Title
            text='Library entries'
          />

          <Table__Content>
            <thead>
              <tr>
                <th>Entry</th>
                <th>Notes</th>
                <th>Order</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Functional</td>
                <td>Various function helpers to be used wihtin Components.</td>
                <td>Category</td>
              </tr>
              {/* <tr>
                <td>Models</td>
                <td>x</td>
                <td>x</td>
              </tr> */}
              <tr>
                <td>Motion &amp; Touch</td>
                <td>Animation and gesture related experiences to be used within Components.</td>
                <td>Category</td>
              </tr>
              <tr>
                <td>Validation</td>
                <td>User input validation to be used within Components.</td>
                <td>Category</td>
              </tr>
            </tbody>
          </Table__Content>

          <Notification__Tip
            text='Remember, you do not need to use all library entries. Just what you need in the application.'
          />
        </div>
      </div>
    </Container__Section>

    <Container__Section>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col10}>
          <Typography__Section_Title
            text='Folder structure'
          />
          <Typography__Body_Copy
            text='Like our Components, Behaviours are stored in the root of the application folder.'
          />
          <Typography__Body_Copy
            text='Below is a sample folder structure for what you might expect to find.'
          />

          <Typography__Code>
            /behaviour<br />
            &nbsp;├── /functional<br />
            &nbsp;| &nbsp;&nbsp; └── /category-name<br />
            &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── functional-name.js<br />
            &nbsp;|<br />
            &nbsp;├── /motion-touch<br />
            &nbsp;| &nbsp;&nbsp; └── /category-name<br />
            &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── /style.css<br />
            &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /script.js<br />
            &nbsp;|<br />
            &nbsp;└── /validation<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /category-name<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── validation-name.js
          </Typography__Code>
        </div>
      </div>
    </Container__Section>

    <Container__Section>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col10}>
          <Typography__Section_Title
            text='Breaking down Behaviours'
          />

          <Typography__Sub_Heading
            text='Functional'
          />
          <Typography__Body_Copy
            text='Common functions, which may be used throughout the application. Again, using meaningful categories will be helpful for developers to find existing functions.'
          />

          <Typography__Sub_Heading
            text='Motion &amp; Touch'
          />
          <Typography__Body_Copy
            text='Here, we can define a set of animations and gestures, however it is recommended to define user actions. Delete message or open navigation, for example.'
          />

          <Typography__Sub_Heading
            text='Validation'
          />
          <Typography__Body_Copy
            text='Data validation includes the usual form field verification. This may be a good place to store a list of regex snippets too.'
          />
        </div>
      </div>
    </Container__Section>

  </React.Fragment>
)

export default BehavioursPage
