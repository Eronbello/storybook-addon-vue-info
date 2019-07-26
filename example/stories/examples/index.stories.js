import { storiesOf } from '@storybook/vue'

import BaseBlank from '../../components/BaseBlank.vue'
import BaseButton from '../../components/BaseButton.vue'
import NumberList from '../../components/NumberList.vue'

import CustomWrapper from '../../components/customDocs/wrapper/Wrapper.vue'

storiesOf('Examples/Basic usage', module)
  .add(
    'Simple example',
    () => ({
      components: { LocalButton: BaseButton },
      template: '<local-button label="I\'m a button!"/>'
    }),
    {
      info: {}
    }
  )
  .add(
    'Show summary',
    () => ({
      components: { BaseButton },
      template: '<base-button disabled label="I\'m a button!"/>'
    }),
    {
      info: `
        # This is _summary_

        You can write summary in [Markdown](https://en.wikipedia.org/wiki/Markdown).

        There is also syntax highlighting powered by [Highlight.js](https://highlightjs.org/).

        \`\`\`js
        export function foo() {
          console.log('Hello, World!')
        }
        \`\`\`
      `
    }
  )
  .add(
    'Multiple components',
    () => ({
      components: { BaseButton, NumberList },
      template: `
        <div>
          <base-button label="button"/>
          <number-list/>
        </div>
      `
    }),
    {
      info: 'You can specify more than one components to show info tables.'
    }
  )
  .add(
    'Specify components',
    () => ({
      components: { BaseButton, NumberList, BaseBlank },
      template: `
        <div>
          <base-button label="button"/>
          <base-blank/>
          <number-list/>
        </div>
      `
    }),
    {
      info: {
        summary: `
          You can specify which components to be shown in info tables by passing \`components\` option to the addon.

          \`\`\`js
          storiesOf('...')
            .add('...', () => ({
              // Addon ignore this
              components: { BaseButton, NumberList, BaseBlank },
              template: '...'
            }), {
              info: {
                // Show tables for these
                components: { BaseButton, NumberList }
              }
            })
          \`\`\`
        `,
        components: { BaseButton, NumberList }
      }
    }
  )

storiesOf('Examples/Advance usage', module)
  .add(
    'Hide header',
    () => ({
      components: { BaseButton },
      template: '<base-button label="I\'m a button!"/>'
    }),
    {
      info: {
        summary: `
          To hide header section, set \`header\` option to \`false\`.

          \`\`\`js
          {
            info: {
              header: false
            }
          }
          \`\`\`
        `,
        header: false
      }
    }
  )
  .add(
    'Hide story source',
    () => ({
      components: { BaseButton },
      template: '<base-button label="I\'m a button!"/>'
    }),
    {
      info: {
        summary: `
          To hide story source, set \`source\` option to \`false\`.

          \`\`\`js
          {
            info: {
              source: false
            }
          }
          \`\`\`
        `,
        source: false
      }
    }
  )
  .add(
    'Ignore docgen info',
    () => ({
      components: { BaseButton },
      template: '<base-button label="I\'m a button!"/>'
    }),
    {
      info: {
        summary: `
          To ignore component's information generated by vue-docgen-api,
          set \`useDocgen\` option to \`false\`.
          This only affects when you set our custom loader in Storybook's webpack config.

          \`\`\`js
          {
            info: {
              useDocgen: false
            }
          }
          \`\`\`
        `,
        useDocgen: false
      }
    }
  )
  .add(
    'Set props description',
    () => ({
      components: { BaseButton },
      template: '<base-button label="I\'m a button!"/>',
      propsDescription: {
        BaseButton: {
          disabled: 'DISABLED!',
          type: 'TYPE!',
          label: 'LABEL!'
        }
      }
    }),
    {
      info: {
        summary: `
          You can set description for each props explicitly.

          \`\`\`js
          () => ({
            components: { BaseButton },
            template: '<base-button label="I\'m a button!"/>',
            propsDescription: {
              BaseButton: {
                disabled: 'DISABLED!',
                type: 'TYPE!',
                label: 'LABEL!'
              }
            }
          })
          \`\`\`

          This will override descriptions generated by docgen.
        `
      }
    }
  )
  .add(
    'Show docs in preview area',
    () => ({
      components: { BaseButton },
      template: '<base-button label="I\'m a button!"/>'
    }),
    {
      info: {
        summary: `
          To show docs in preview area, turn off \`docsInPanel\` option.

          \`\`\`js
          {
            info: {
              docsInPanel: false
            }
          }
          \`\`\`

          This will override descriptions generated by docgen.

          If you never use docsInPanel feature,
          you can omit \`import 'storybook-addon-vue-info/register\` in \`.storybook/addons.js\`.

          ### ATTENTION!

          Docs in preview wraps story component, which may cause unexpected behaviors/bugs.
          I personally recommend to use \`docsInPanel: true\`.
        `,
        docsInPanel: false
      }
    }
  )
  .add(
    'Apply custom styles to preview',
    () => ({
      components: { BaseButton },
      template: '<base-button label="I\'m a button!"/>'
    }),
    {
      info: {
        docsInPanel: false,
        previewClassName: 'my-custom-class-name',
        previewStyle: {
          backgroundColor: 'tomato',
          padding: '1em'
        },
        summary: `
        You can customize preview wrapper style by
        passing \`previewClassName\` option or \`previewStyle\` option.
      `
      }
    }
  )
  .add(
    'Customize docs',
    () => ({
      components: { BaseButton },
      template: '<base-button label="I\'m a button!"/>'
    }),
    {
      info: {
        summary: `
          ## Customize docs in preview

          To customize docs in preview area, set your docs component to \`wrapperComponent\` option.

          This addon passes two props:

          - \`info\` ... Information about story and contained components. Interface defined in \`src/types/info\` (\`StoryInfo\`).
          - \`options\` ... Addon options.

          Story component is passed as default slot.

          For more detail, please look at source code of this example
          (\`example/components/customDocs/wrapper\`).

          <br/>

          ## Customize docs in addon panel

          Not supported.

          It's challenging to change components in addon panel.
          To avoid plugin being complex and messy, customizing addon panel is not supported.
        `,
        wrapperComponent: CustomWrapper,
        docsInPanel: false
      }
    }
  )
  .add(
    'Writes story in JSX',
    () => ({
      render(h) {
        return <BaseButton label="I'm a button!" />
      }
    }),
    {
      info: {
        summary: `
          You can also write story in render function with JSX.
          Of course you should configure Babel.

          \`\`\`jsx
          () => ({
            render(h) {
              return <BaseButton label="I'm a button!"/>
            }
          })
          \`\`\`
        `
      }
    }
  )