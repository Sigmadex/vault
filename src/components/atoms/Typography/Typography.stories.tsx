import { Story, Meta } from '@storybook/react/types-6-0';
import Typography from './Typography';
import { ITypographyProps } from './Typography.types';

export default {
  title: 'Core/Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
      ],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<ITypographyProps> = (args) => (
  <Typography {...args}>{args.children}</Typography>
);

export const H1 = Template.bind({});
H1.args = {
  children: 'Typography',
  variant: 'h1',
  darkmode: false,
};

export const H2 = Template.bind({});
H2.args = {
  children: 'Typography',
  variant: 'h2',
  darkmode: false,
};
export const H3 = Template.bind({});
H3.args = {
  children: 'Typography',
  variant: 'h3',
  darkmode: false,
};

export const H4 = Template.bind({});
H4.args = {
  children: 'Typography',
  variant: 'h4',
  darkmode: false,
};
export const H5 = Template.bind({});
H5.args = {
  children: 'Typography',
  variant: 'h5',
  darkmode: false,
};

export const H6 = Template.bind({});
H6.args = {
  children: 'Typography',
  variant: 'h6',
  darkmode: false,
};
export const Body1 = Template.bind({});
Body1.args = {
  children: 'Typography',
  variant: 'body1',
  darkmode: false,
};
export const Body2 = Template.bind({});
Body2.args = {
  children: 'Typography',
  variant: 'body2',
  darkmode: false,
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  children: 'Typography',
  variant: 'subtitle1',
  darkmode: false,
};
export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  children: 'Typography',
  variant: 'subtitle2',
  darkmode: false,
};
export const Caption = Template.bind({});
Caption.args = {
  children: 'Typography',
  variant: 'caption',
  darkmode: false,
};
export const Overline = Template.bind({});
Overline.args = {
  children: 'Typography',
  variant: 'overline',
  darkmode: false,
};
