import { Story, Meta } from '@storybook/react/types-6-0';
import TextField from './TextField';
import { IInputProps } from './TextField.types';

export default {
  title: 'Core/TextField',
  component: TextField,
  argTypes: {
    variant: {
      options: ['standard', 'filled', 'outlined'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<IInputProps> = (args) => (
  <TextField {...args}>{args.children}</TextField>
);

export const Standard = Template.bind({});
Standard.args = {
  placeholder: 'Label',
  variant: 'standard',
};

export const Outlined = Template.bind({});
Outlined.args = {
  placeholder: 'Label',
  variant: 'outlined',
};

export const Filled = Template.bind({});
Filled.args = {
  placeholder: 'Label',
  variant: 'filled',
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  placeholder: 'Label',
  variant: 'standard',
  leftIcon: true,
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  placeholder: 'Label',
  variant: 'standard',
  rightIcon: true,
};

export const HasError = Template.bind({});
HasError.args = {
  placeholder: 'Label',
  variant: 'standard',
  hasError: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Label',
  variant: 'standard',
  disabled: true,
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  placeholder: 'Label',
  variant: 'standard',
  helperText: 'Helper Text',
};
