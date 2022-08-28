import { Story, Meta } from '@storybook/react/types-6-0';
import Footer from './Footer';
import { IFooterProps } from './Footer.types';

export default {
  title: 'Core/Footer',
  component: Footer,
} as Meta;

const Template: Story<IFooterProps> = (args) => <Footer {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  copyRightText: '© 2022 Sigma Labs',
  rightText: '154869129',
};
