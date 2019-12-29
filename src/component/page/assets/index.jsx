import React from 'react'
import Button__Tertiary_External from '../../../component/block/button/tertiary/external.jsx'
import Container__Chic from '../../../component/block/container/chic/index.jsx'
import Container__Section from '../../../component/block/container/section/index.jsx'
import grid from '../../../asset/grid.scss';
import Notification__Tip from '../../../component/block/notification/tip/index.jsx'
import Table__Content from '../../../component/block/table/content/index.jsx'
import Typography__Body_Copy from '../../../component/block/typography/body-copy/index.jsx'
import Typography__Bullet_List from '../../../component/block/typography/bullet-list/index.jsx'
import Typography__Code from '../../../component/block/typography/code/index.jsx'
import Typography__Page_Title from '../../../component/block/typography/page-title/index.jsx'
import Typography__Section_Title from '../../../component/block/typography/section-title/index.jsx'
import Typography__Sub_Heading from '../../../component/block/typography/sub-heading/index.jsx'
import Typography__Subtle_Title from '../../../component/block/typography/subtle-title/index.jsx'

const AssetPage = () => (

  <React.Fragment>

    <Container__Chic>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col10}>
          <Typography__Page_Title
            text='Assets'
          />
          <Typography__Body_Copy
            text='The Asset library is a collection of styles and branding. Everything used to style components is defined here and components will only use these pre-defined values.'
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
                <td>Color</td>
                <td>Meaningful color variables (including gradiants, shadows, etc) to be used within Components.</td>
                <td>Category</td>
              </tr>
              <tr>
                <td>Font</td>
                <td>All font files required (.svg, tff, woff, etc). Good area to store font-face mixin and any other font-related requirements such as a hide-text class. Usually used in Components > Blocks > Typography but could be used in other Blocks too.</td>
                <td>Name</td>
              </tr>
              <tr>
                <td>Grid</td>
                <td>Grid system for page layout. Variables used within Components and Pages.</td>
                <td>Usage</td>
              </tr>
              <tr>
                <td>Icon</td>
                <td>Graphic files containing icon sets to be used within CSS styling.</td>
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
            text='Like our Components, Assets are stored in the root of the application folder. Some assets are then categorised, whilst others are put into the name of the asset.'
          />
          <Typography__Body_Copy
            text='Below is a sample folder structure for what you might expect to find.'
          />

          <Typography__Code>
            /asset<br />
            &nbsp;├── /color<br />
            &nbsp;| &nbsp;&nbsp; └── /category-name.css<br />
            &nbsp;|<br />
            &nbsp;├── /font<br />
            &nbsp;| &nbsp;&nbsp; ├── /font-name<br />
            &nbsp;| &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; ├── font-name.tff<br />
            &nbsp;| &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; └── font-name.woff<br />
            &nbsp;| &nbsp;&nbsp; └── /style.css<br />
            &nbsp;|<br />
            &nbsp;├── /icon<br />
            &nbsp;| &nbsp;&nbsp;&nbsp; └── /category-name<br />
            &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /icon-name<br />
            &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── icon-name.png<br />
            &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── icon-name.svg<br />
            &nbsp;|<br />
            &nbsp;└── grid.css<br />
          </Typography__Code>
        </div>
      </div>
    </Container__Section>

    <Container__Section>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col10}>
          <Typography__Section_Title
            text='Breaking down Assets'
          />
          <Typography__Body_Copy
            text='You&#39;ll see below how we go about structuing our assets, however you may find it useful to include a global assets section to include things like a CSS reset, a grid system or a SASS includes file, for example.'
          />

          <Typography__Sub_Heading
            text='Color'
          />
          <Typography__Body_Copy
            text='Defining colors into useful categories is a nice way to make sure colors have meaningful names based on usage and not the color itself. Lets take a look at some examples:'
          />
        </div>
      </div>

      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col6}>
          <div className={grid.spaced}>
            <Typography__Code>
              /asset/color/call-to-action.sass<br /><br />
              $color-primary: <span className='example-primary'>#009900</span>;<br />
              $color-secondary: <span className='example-secondary'>#ff9900</span>;<br />
              $color-link: <span className='example-link'>#ff0000</span>;
            </Typography__Code>
          </div>
        </div>

        <div className={grid.col + ' ' + grid.col6}>
          <div className={grid.spaced}>
            <Typography__Code>
              /asset/color/notification.sass<br /><br />
              $color-error: <span className='example-error'>#ff0000</span>;<br />
              $color-success: <span className='example-success'>#009900</span>;<br />
              $color-warning: <span className='example-warning'>#ff9900</span>;
            </Typography__Code>
          </div>
        </div>
      </div>

      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col10}>
          
          <Notification__Tip
            text='You can add all the variables into one single file, especially if the application is not particularly large.'
          />

          <Typography__Sub_Heading
            text='Font'
          />
          <Typography__Body_Copy
            text='Fonts are fairly self explanatory. Create a folder using the font name and add all the various font files within. These fonts can then be referenced in the style.css file in the font directory.'
          />
          <Typography__Code>
            /asset/font/style.sass<br /><br />
            $font-stack-title: 'Arial Black';<br />
            $font-stack-normal: helvetica, arial;
          </Typography__Code>
          <Button__Tertiary_External
            href='https://github.com/timelpatel/Infinity/tree/master/src/asset/font/_style.scss'
            text='See font example on Github'
          />

          <Typography__Sub_Heading
            text='Grid'
          />
          <Typography__Body_Copy
            text='The grid system code can be a single styling file in the root of the asset directory. Generally used in Pages but can also be used at Component level. Its wise to allow componenets to consume the full width of their container to allow for adaptive or responsive layouts.'
          />
          <Button__Tertiary_External
            href='https://github.com/timelpatel/Infinity/tree/master/src/asset/grid.scss'
            text='See grid example on Github'
          />

          <Typography__Sub_Heading
            text='Icon'
          />
          <Typography__Body_Copy
            text='Like colors, Icons will be defined within meaningful category names based on usage. Let&#39;s take a look at some examples:'
          />
        </div>
      </div>

      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col6}>
          <Typography__Subtle_Title
            text='Communication'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'chat.svg'},
                {id: 2, text:'new-message.svg'},
                {id: 3, text:'reply.svg'},
                {id: 4, text:'send.svg'},
              ]
            }
          />
        </div>

        <div className={grid.col + ' ' + grid.col6}>
          <Typography__Subtle_Title
            text='Social'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'amazon.svg'},
                {id: 2, text:'apple.svg'},
                {id: 3, text:'facebook.svg'},
                {id: 4, text:'google.svg'},
              ]
            }
          />
        </div>
      </div>
    </Container__Section>

    </React.Fragment>

)

export default AssetPage
