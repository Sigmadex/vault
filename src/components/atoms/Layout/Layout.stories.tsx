import { ComponentMeta, Story } from '@storybook/react';
import TypoGraphy from '../Typography/Typography';
import Layout from './Layout';
import { ILayoutProps } from './Layout.types';

export default {
  title: 'Core/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: Story<ILayoutProps> = (args) => <Layout {...args} />;

const LayoutBody = () => (
  <div className="w-full flex flex-col justify-center items-center bg-red-50 py-16">
    <TypoGraphy variant="h6">The title can be anything</TypoGraphy>
    <TypoGraphy variant="body1">The body can be anything</TypoGraphy>
    <TypoGraphy variant="caption">The caption can be anything</TypoGraphy>
  </div>
);

export const Wide = Template.bind({});
Wide.args = {
  variant: 'wide',
  children: LayoutBody(),
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'medium',
  children: LayoutBody(),
};

export const Small = Template.bind({});
Small.args = {
  variant: 'small',
  children: LayoutBody(),
};
