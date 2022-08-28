import { Story, Meta } from '@storybook/react/types-6-0';
import Button from './Button';
import { IButtonProps } from './Button.types';

export default {
  title: 'Core/Button',
  component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Contained = Template.bind({});
Contained.args = {
  children: 'A contained button',
  color: 'primary',
  size: 'large',
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'An outlined button',
  color: 'primary',
  size: 'large',
  variant: 'outlined',
};
export const alternate = Template.bind({});
alternate.args = {
  children: 'An outlined button',
  color: 'primary',
  size: 'large',
  variant: 'alternate',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'A disabled button',
  color: 'primary',
  size: 'large',
  variant: 'contained',
  disabled: true,
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  children: 'With Left Icon',
  color: 'primary',
  size: 'large',
  variant: 'contained',
  iconLeft: true,
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  children: 'With Left Icon',
  color: 'primary',
  size: 'large',
  variant: 'contained',
  iconRight: true,
};
