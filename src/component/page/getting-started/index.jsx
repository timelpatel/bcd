import React from 'react'
import Button__Tertiary from '../../../component/block/button/tertiary/index.jsx'
import Container__Chic from '../../../component/block/container/chic/index.jsx'
import Container__Section from '../../../component/block/container/section/index.jsx'
import grid from '../../../asset/grid.scss'
import { Link } from 'react-router-dom'
import Typography__Body_Copy from '../../../component/block/typography/body-copy/index.jsx'
// import Typography__Bullet_List from '../../../component/block/typography/bullet-list/index.jsx'
import Typography__Code from '../../../component/block/typography/code/index.jsx'
import Typography__Page_Title from '../../../component/block/typography/page-title/index.jsx'
import Typography__Section_Title from '../../../component/block/typography/section-title/index.jsx'
import Typography__Sub_Heading from '../../../component/block/typography/sub-heading/index.jsx'

const GettingStartedPage = () => (
  <React.Fragment>

    <Container__Chic>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col9}>
          <Typography__Page_Title
            text='Getting Started'
          />
          <Typography__Body_Copy
            text='The BCD system is easy to setup. It is all about organisation using categories and does not care about the technology stack in use.'
          />
        </div>
      </div>
    </Container__Chic>

    <Container__Section>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col9}>
          <Typography__Section_Title
            text='Add BCD folders'
          />
          <Typography__Body_Copy
            text='Let&#39;s start by creating some folders.'
          />
          <Typography__Code>
            /src<br />
            &nbsp;├── /asset<br />
            &nbsp;| &nbsp;&nbsp; ├── /colour<br />
            &nbsp;| &nbsp;&nbsp; └── /font<br />
            &nbsp;├── /behaviour<br />
            &nbsp;└── /component<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── /block<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── /module<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /page
          </Typography__Code>
        </div>

        {/* <div className={grid.col + ' ' + grid.col3}>
          <Typography__Body_Copy
            text='On this page'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'Add BCD Folders'},
                {id: 2, text:'Create Blocks'},
                {id: 3, text:'Add Assets to Blocks'},
                {id: 4, text:'Create a Module'},
              ]
            }
          />
        </div> */}
      </div>
    </Container__Section>

    <Container__Section>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col9}>
          <Typography__Section_Title
            text='Create Blocks'
          />
          <Typography__Body_Copy
            text='Now we will add some components starting with Blocks. As we know, we need to create a category folder before we create the component. We will make a primary button and add it to a Button category.'
          />
          <Typography__Code>
            /block<br />
            &nbsp;└── /button<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /primary
          </Typography__Code>

          <Typography__Sub_Heading
            text='Basic principles'
          />
          <Typography__Body_Copy
            text='Next we add the component itself. In the example below, we will see how BCD uses folder names within component code.'
          />
          <Typography__Code>
            src/component/block/button/primary/index.html<br /><br />
            &lt;button class='button__primary'&gt;<br /><br />
            &lt;/button&gt;
          </Typography__Code>
          <Typography__Code>
            src/component/block/button/primary/style.css<br /><br />
            .button__primary &#123;<br /><br />
            &#125;
          </Typography__Code>
          <Typography__Body_Copy
            text='The same principles would apply to Modules; category folders, component naming, etc.'
          />

          <Typography__Sub_Heading
            text='With React'
          />
          <Typography__Body_Copy
            text='Now this is quite basic to show the principles, however the system becomes more interesting when used with technologies, which allow the use of imports. Let&#39;s take a look at what a component written in React would look like.'
          />
          <Typography__Code>
            src/component/block/button/primary/index.jsx<br /><br />
            import React from 'react'<br />
            import styles from './style.scss'<br /><br />
            const Button__Primary = (props) => (<br />
            &nbsp;&nbsp;&lt;button<br />
            &nbsp;&nbsp;&nbsp;&nbsp;className=&#123;styles.button__primary&#125;<br />
            &nbsp;&nbsp;&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#123;props.text&#125;<br />
            &nbsp;&nbsp;&lt;/button&gt;<br />
            )<br /><br />export default Button__Primary
          </Typography__Code>
          <Typography__Code>
            src/component/block/input-field/text-input/index.jsx<br /><br />
            import React from 'react'<br />
            import styles from './style.scss'<br /><br />
            const Input_Field__Text_Input = (props) => (<br />
            &nbsp;&nbsp;&lt;input<br />
            &nbsp;&nbsp;&nbsp;&nbsp;className=&#123;styles.input_field__text_input&#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;type='text'<br />
            &nbsp;&nbsp;/&gt;<br />
            )<br /><br />export default Input_Field__Text_Input
          </Typography__Code>
        </div>
      </div>
    </Container__Section>

    <Container__Section>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col9}>
          <Typography__Section_Title
            text='Add Assets to Blocks'
          />
          <Typography__Body_Copy
            text='Now that we have some basic Blocks, we can add some styling. Assets are like the brand guidelines. All the colours, fonts and icons are defined here.'
          />

          <Typography__Sub_Heading
            text='Colours'
          />
          <Typography__Body_Copy
            text='All the colours used in our components need to be defined here. Let&#39;s take a look at how we may achieve this. We&#39;ll use SASS here, however you can use what you prefer.'
          />
          <Typography__Code>
            src/asset/color/call-to-action.sass<br /><br />
            $primary-bg: #090;<br />
            $primary-text: #fff;
          </Typography__Code>

          <Typography__Sub_Heading
            text='Fonts'
          />
          <Typography__Body_Copy
            text='We wont bother boring you with how to set fonts in CSS, however take a quick look here to see how we may go about naming the folders and font files.'
          />
          <Typography__Code>
            /font<br />
            &nbsp;└── /helvetica<br />
            &nbsp;&nbsp;&nbsp;&nbsp; ├── helvetica.eot<br />
            &nbsp;&nbsp;&nbsp;&nbsp; ├── helvetica.svg<br />
            &nbsp;&nbsp;&nbsp;&nbsp; ├── helvetica.ttf<br />
            &nbsp;&nbsp;&nbsp;&nbsp; └── helvetica.woff
          </Typography__Code>
          <Button__Tertiary
            href='/assets'
            text='Learn more about Assets'
          />
        </div>
      </div>
    </Container__Section>

    <Container__Section>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col9}>
          <Typography__Section_Title
            text='Create a Module'
          />
          <Typography__Body_Copy
            text='Now we have some Blocks, lets create a Module with an input field and submit button to allow the user to enter their name.'
          />
          <Typography__Body_Copy
            text='We&#39;re going to carry on using React. If you&#39;re not familiar with React, hopefully you can still work out whats going on. We&#39;re simply importing our Blocks and we can also add some content to our primary button. Depending on usage, you may also choose to add content at Page level. This would allow the Module to be used in various areas of the application.'
          />
          <Typography__Code>
            src/component/module/personal-information/name/index.jsx<br /><br />
            import React from 'react'<br />
            import Button__Primary from '/src/component/block/button/primary/index.jsx'<br />
            import Input_Field__Text_Input from '/src/component/block/input-field/text-input/index.jsx'<br />
            import layout from './layout.scss'<br /><br />
            const Personal_Information__Name = (props) => (<br />
            &nbsp;&nbsp;&lt;Input_Field__Text_Input /&gt;<br />
            &nbsp;&nbsp;&lt;Button__Primary<br />
            &nbsp;&nbsp;&nbsp;&nbsp;className=&#125;layout.button&#126;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;text='Submit'<br />
            &nbsp;&nbsp;/&gt;<br />
            )<br /><br />export default Personal_Information__Name
          </Typography__Code>
        </div>
      </div>
    </Container__Section>

    <Container__Section>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col9}>
          <Typography__Section_Title
            text='Add Behaviours'
          />
          <Typography__Body_Copy
            text='Behaviours can be inserted at various points of the system depending on the component functionality. As you start building you&#39;re own application, this as with other parts of BCD will become clearer.'
          />

          <Typography__Sub_Heading
            text='Validation'
          />
          <Typography__Body_Copy
            text='For this example, lets add some validation to the input field when the user clicks the submit button.'
          />
          <Typography__Body_Copy
            text='Add a folder in the &#39;behaviour&#39; folder and name it &#39;validation&#39;. Then, add a category folder within there and name it &#39;user-input&#39;.'
          />
          <Typography__Code>
            src/asset/behaviour/validation/user-input/required.js<br /><br />
            - - - Validation Code Here - - -
          </Typography__Code>
          <Typography__Body_Copy
            text='Now we can use &#39;required.js&#39; within our &#39;name&#39; Module.'
          />
          <Typography__Code>
            src/component/module/personal-information/name/index.jsx<br /><br />
            ...<br />
            import required from '/src/behaviour/validation/user-input/required.jsx'<br /><br />
            this.handleClick() &#123;<br />
            &nbsp;&nbsp;...<br />
            &#125;<br /><br />
            const Personal_Information__Name = (props) => (<br />
            &nbsp;&nbsp;...<br />
            &nbsp;&nbsp;&lt;Button__Primary<br />
            &nbsp;&nbsp;&nbsp;&nbsp;onClick='handleClick'<br />
            &nbsp;&nbsp;&nbsp;&nbsp;text='Submit'<br />
            &nbsp;&nbsp;/&gt;<br />
            )<br /><br />export default Personal_Information__Name
          </Typography__Code>
          <Button__Tertiary
            href='/behaviours'
            text='Learn more about Behaviours'
          />
        </div>
      </div>
    </Container__Section>

    <Container__Section>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col9}>
          <Typography__Section_Title
            text='Add to Pages'
          />
          <Typography__Body_Copy
            text='Now we have some Blocks and Modules, we can start adding them to Pages. Remember, you can add both Blocks and Modules to Pages depending on the requirements.'
          />
        </div>
      </div>
    </Container__Section>

    <Container__Section>
      <div className={grid.row}>
        <div className={grid.col + ' ' + grid.col9}>
          <Typography__Section_Title
            text='Further reading'
          />
          <Typography__Body_Copy>
            See how the BCD website is scructured using the system at the following URL...<br />
            <a
              href='https://github.com/timelpatel/bcd/tree/master/src'
              target='_blank'
            >https://github.com/timelpatel/bcd/tree/master/src</a>
          </Typography__Body_Copy>
        </div>
      </div>
    </Container__Section>

  </React.Fragment>
)

export default GettingStartedPage
