import React from 'react'

import { Checkbox } from '.'

export default {
  title: 'Data Input/Checkbox',
  component: Checkbox,
}

export const Default = (args :any) => <Checkbox name="checkbox-group" label="JavaScript" {...args} /> 

export const withGroup = (args :any) => (
  <Checkbox.Group {...args}>
    <Checkbox id="checkbox1" name="checkbox1" label="JavaScript" description="JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification."/> 
    <Checkbox id="checkbox2" name="checkbox2" label="Typescript" description="TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. "/>
    <Checkbox id="checkbox3" name="checkbox3" label="React" description="React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies."/>
  </Checkbox.Group>
)

export const withGroupHorizontal = (args :any) => (
  <Checkbox.Group {...args}>
    <Checkbox id="checkbox1" name="checkbox1" label="JavaScript" description="JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification."/> 
    <Checkbox id="checkbox2" name="checkbox2" label="Typescript" description="TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. "/>
    <Checkbox id="checkbox3" name="checkbox3" label="React" description="React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies."/>
  </Checkbox.Group>
)

Default.args = {
  id: 'checkobox-q',
  label: 'This is the label',
  description: 'This is the description',
  disabled: false,
  className: "font-sans",
  layout: 'vertical'
}

withGroup.args = {
  id: 'checkobox-q',
  label: 'This is the label',
  description: 'This is the description',
  disabled: false,
  className: "font-sans",
  layout: 'vertical'
}

withGroupHorizontal.args = {
  id: 'checkobox-q',
  label: 'This is the label',
  description: 'This is the description',
  disabled: false,
  className: "font-sans",
  layout: 'horizontal'
}