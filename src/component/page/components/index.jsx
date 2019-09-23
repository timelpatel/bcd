import React from 'react'
import Container__Card from '../../../component/block/container/card/index.jsx'
import Container__Chic from '../../../component/block/container/chic/index.jsx'
import Container__Section from '../../../component/block/container/section/index.jsx'
import grid from '../../../asset/grid.scss'
import Imagery__Example from '../../../component/block/imagery/example/index.jsx'
import Notification__Tip from '../../../component/block/notification/tip/index.jsx'
import Table__Content from '../../../component/block/table/content/index.jsx'
import Typography__Body_Copy from '../../../component/block/typography/body-copy/index.jsx'
import Typography__Bullet_List from '../../../component/block/typography/bullet-list/index.jsx'
import Typography__Code from '../../../component/block/typography/code/index.jsx'
import Typography__Page_Title from '../../../component/block/typography/page-title/index.jsx'
import Typography__Section_Title from '../../../component/block/typography/section-title/index.jsx'
import Typography__Sub_Heading from '../../../component/block/typography/sub-heading/index.jsx'
import Typography__Subtle_Title from '../../../component/block/typography/subtle-title/index.jsx'

const ComponentsPage = () => (
  <React.Fragment>

    <Container__Chic>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col9}>
          <Typography__Page_Title
            text='Components'
          />
          <Typography__Body_Copy
            text='The Component library is the heart of the BCD ecosystem. It is split into two parts; Blocks and Modules. It is able to consume items from the other libraries - Assets and Behaviours.'
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
                <td>Block</td>
                <td>Single elements whos stlye we want to control independantly from other Blocks.</td>
                <td>Category</td>
              </tr>
              <tr>
                <td>Module</td>
                <td>One or more Blocks to form a usable component on a page.</td>
                <td>Category</td>
              </tr>
              <tr>
                <td>Page</td>
                <td>Pages (or views in single page applications) containing Components. Good place to consume Assets > Grid.</td>
                <td>Name</td>
              </tr>
            </tbody>
          </Table__Content>

          <Notification__Tip
            text='We recommend using at least Blocks and Modules from the Components section.'
          />
        </div>
      </div>
    </Container__Section>

    <Container__Section>
    <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col9}>
          <Typography__Body_Copy
            text='To allow for flexibility, Blocks can be used within Blocks and Modules can be used within Modules. It is important that a component should only be modified at its source and changes filter down. For example, it would be bad practice to change the visual styling of a block after it was imported into a module; we want to ensure a single source of truth policy.'
          />
        </div>
      </div>

      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col5}>
          <div className={grid.spaced}>
            <Container__Card
              content={
                <Typography__Bullet_List
                  listItems={[
                    {id: 1, text:'All visual styling applied'},
                    {id: 2, text:'Does not contain content'},
                    {id: 3, text:'Is not aware of server-side data'},
                  ]}
                />
              }
              title='Blocks'
            />
          </div>
        </div>

        <div className={grid.col + ' ' + grid.col5}>
          <div className={grid.spaced}>
            <Container__Card
              content={
                <Typography__Bullet_List
                  listItems={[
                    {id: 1, text:'Layout styling for Block’s applied'},
                    {id: 2, text:'Visual styling for Blocks can not be modified'},
                    {id: 3, text:'Content and data may be applied'},
                  ]}
                />
              }
              title='Modules'
            />
          </div>
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
            text='Components are stored in the component folder. Each type of Component is then stored within meaningful categories, followed by the component itself.'
          />
          <Typography__Body_Copy
            text='In the sample folder structure below, we have added HTML and CSS, however these can be replaced by the technology stack in use (index.jsx and style.scss, for example). You may also wish to include other files, which relate to the component. This is completely fine as long as you abide by the fundamental rules of the system.'
          />

          <Typography__Code>
            /component<br />
            &nbsp;├── /block<br />
            &nbsp;| &nbsp;&nbsp; └── /category-name<br />
            &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /block-name<br />
            &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── index.html<br />
            &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── style.css<br />
            &nbsp;|<br />
            &nbsp;├── /module<br />
            &nbsp;| &nbsp;&nbsp; └── /category-name<br />
            &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /module-name<br />
            &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── index.html<br />
            &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── layout.css<br />
            &nbsp;└── /page<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── page-name.html<br />
          </Typography__Code>
        </div>
      </div>
    </Container__Section>

    <Container__Section>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col10}>
          <Typography__Section_Title
            text='Code structure'
          />
          <Typography__Body_Copy
            text='Now that we have our component names and categories in place, we can use them within the code. Notice how we use double dashes and underscores to differentiate between sections of our system.'
          />

          <Typography__Sub_Heading
            text='HTML'
          />
          <Typography__Code>
            div class='category_name__component_name'<br />
            div class='button__primary'<br /><br />
            div class='category_name__component_name__variant'<br />
            div class='button__primary__large'
          </Typography__Code>

          <Typography__Sub_Heading
            text='CSS'
          />
          <Typography__Body_Copy
            text='All CSS (SASS or LESS) are named style or layout. Block styles are naming style as they style the Block where as Module files are named layout as they should only be used for positioning.'
          />
          <Typography__Code>
            style.css<br />
            .category_name__block_name &#123;<br /><br />&#125;<br /><br />
            layout.css<br />
            .category_name__module_name &#123;<br /><br />&#125;
          </Typography__Code>

          <Typography__Sub_Heading
            text='JavaScript'
          />
          <Typography__Body_Copy
            text='Scripting files specific to certain components should reference the component name used in the HTML and CSS. This is different to scripting files found in the Behaviours section as they are for generic use and have their own naming convention.'
          />
          <Typography__Code>
            category_name__component_name.js<br />
            button__primary.js
          </Typography__Code>
        </div>
      </div>
    </Container__Section>

    <Container__Section>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col10}>
          <Typography__Section_Title
            text='Breaking down components'
          />
          <Typography__Body_Copy
            text='The names you choose for your components are entirely up to you. We find that a design team, which starts to think about components is able to downstream their thoughts and naming conventions into engineering.'
          />
          <Typography__Body_Copy
            text='Components can sometimes look similar but have different usage in the application. In this case, it is good to think about change management. If the design or behaviour changed in one component, would you always want the same for the other?'
          />
          <Typography__Body_Copy
            text='Lets take a Primary and Secondary button for example. The only difference may be the background colour, however if we wanted to change the styling or sizing of one, does not always mean we want to change the other. One side effect of having such a managable system is that you may end up with slightly more code, however the advantages when it comes to re-designing components and testing components in isolation usually outweight the negatives.'
          />
          <Typography__Body_Copy
            text='Below are some example categories and component names.'
          />
        </div>
      </div>

      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col10}>
          <Typography__Sub_Heading
            text='Blocks'
          />
        </div>
      </div>

      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col6}>
          <Typography__Subtle_Title
            text='Button'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'Primary'},
                {id: 2, text:'Secondary'},
                {id: 3, text:'Social'},
                {id: 4, text:'Tertiary'},
              ]
            }
          />

          <Typography__Subtle_Title
            text='Container'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'Footer'},
                {id: 2, text:'Header'},
                {id: 3, text:'Section'},
              ]
            }
          />

          <Typography__Subtle_Title
            text='Imagery'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'Avatar'},
                {id: 2, text:'Logo'},
              ]
            }
          />

          <Typography__Subtle_Title
            text='Input Field'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'Checkbox'},
                {id: 2, text:'Date'},
                {id: 3, text:'Dropdown'},
                {id: 4, text:'Text area'},
                {id: 5, text:'Text input'},
              ]
            }
          />
        </div>

        <div className={grid.col + ' ' + grid.col6}>
          <Typography__Subtle_Title
            text='Notification'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'Alert'},
                {id: 2, text:'Form error'},
              ]
            }
          />

          <Typography__Subtle_Title
            text='Navigation'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'Main'},
                {id: 2, text:'Sidebar'},
              ]
            }
          />

          <Typography__Subtle_Title
            text='Table'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'Data'},
                {id: 2, text:'Product select'},
              ]
            }
          />

          <Typography__Subtle_Title
            text='Typography'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'Body copy'},
                {id: 2, text:'Form label'},
                {id: 3, text:'Page title'},
                {id: 4, text:'Section title'},
              ]
            }
          />
        </div>
      </div>

      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col10}>
          <Typography__Sub_Heading
            text='Modules'
          />
        </div>
      </div>

      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col6}>
          <Typography__Subtle_Title
            text='Header &amp; Footer'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'Auth header'},
                {id: 2, text:'Unauth header '},
                {id: 3, text:'Footer '},
              ]
            }
          />

          <Typography__Subtle_Title
            text='Messaging &amp; Communication'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'Chat'},
                {id: 2, text:'Comments'},
              ]
            }
          />
        </div>

        <div className={grid.col + ' ' + grid.col6}>
          <Typography__Subtle_Title
            text='Personal information'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'Address'},
                {id: 2, text:'Payment'},
                {id: 3, text:'Telephone'},
              ]
            }
          />
        </div>
      </div>
    </Container__Section>

    <Container__Section>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col10}>
          <Typography__Section_Title
            text='Example: Telephone number component'
          />
          <Typography__Body_Copy
            text='Let&#39;s look at how we would use BCD to create a telephone number component.'
          />

          <Typography__Sub_Heading
            text='The Blocks'
          />
          <Typography__Body_Copy
            text='Lets start with our 3 blocks, visually styled but no content.'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'/component/block/input-field/dropdown'},
                {id: 2, text:'/component/block/input-field/text-input'},
                {id: 3, text:'/component/block/typography/form-label'},
                // {id: 4, text:'/component/module/personal-information/telephone-row.css'},
                // {id: 5, text:'/component/module/personal-information/telephone-numbers'},
              ]
            }
          />
          <Imagery__Example>
            <img
              alt='Blocks example'
              src='/asset/img/telephone-example-block.png'
              width='100%'
            />
          </Imagery__Example>

          <Typography__Sub_Heading
            text='The Module'
          />
          <Typography__Body_Copy
            text='Firstly, we will position our Blocks, as shown below. Remember, we can not change the visual appearance. Next, we will create the three rows required and also add our content as we want this to be consistant throughout the journey. Content can be added when the module is used on the page, but this is optional depending on requirements.'
          />
          <Imagery__Example>
            <img
              alt='Layout example'
              src='/asset/img/telephone-example-layout.png'
              width='100%'
            />
          </Imagery__Example>
          <Typography__Body_Copy
            text='And thats it! Below, we can see a functional module, which is ready to be used at Page level loaded with content and data. This is a good time to add any Behaviours, such as Validation.'
          />
          <Imagery__Example>
            <img
              alt='Module example'
              src='/asset/img/telephone-example-module.png'
              width='100%'
            />
          </Imagery__Example>
        </div>
      </div>
    </Container__Section>

  </React.Fragment>
)

export default ComponentsPage
