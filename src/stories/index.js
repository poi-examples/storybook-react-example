import { storiesOf } from 'storybook-react'
import { action } from '@storybook/addon-actions'

import MyButton from '../Button'

const Welcome = () => (
  <div>
    Welcome!
    <p>
    This storybook is built with <a href="https://github.com/egoist/poi">Poi</a> + <a href="https://github.com/egoist/poi/tree/master/packages/poi-preset-storybook">poi-preset-storybook</a>
    </p>
    <p>
    Check out the source code <a href="https://github.com/poi-examples/storybook-react-example">here</a>.
    </p>
  </div>
)

storiesOf('Button', module)
  .add('Welcome', Welcome)
  .add('Default', () => <MyButton>Default</MyButton>)
  .add('Emoji', () => <MyButton>😎🎉🌈⚽️</MyButton>)
  .add('Click action', () => {
    const handleClick = () => action('button-click')(`hmmm, I'm clicked..`)
    return (
      <MyButton onClick={handleClick}>
        Click me!
      </MyButton>
    )
  })
