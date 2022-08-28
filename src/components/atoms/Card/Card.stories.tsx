import { ComponentMeta, Story } from '@storybook/react';
import TypoGraphy from '../Typography/Typography';
import Card from './Card';
import { ICardProps } from './Card.types';

export default {
  title: 'Core/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: Story<ICardProps> = (args) => (
  <div className="max-w-[250px]">
    <Card {...args} />
  </div>
);

export const Standard = Template.bind({});
Standard.args = {
  variant: 'standard',
  icon: 'default-1.png',
  heading: '62.5k',
  body: 'Total SDEX Staked',
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  variant: 'standard',
  icon: 'default-1.png',
  heading: '62.5k',
  body: 'Total SDEX Staked',
  subtitle: '62,512.02 SDEX',
};

export const APYNFT = Template.bind({});
APYNFT.args = {
  variant: 'nft',
  colors: ['#FADD46', '#FFB547'],
  heading: 'No Penalties',
  subtitle: 'Status:',
  body: 'Owned (1)',
};

const CustomTemplate = () => (
  <div>
    <TypoGraphy variant="h6">Heading</TypoGraphy>
    <TypoGraphy variant="caption">A Caption</TypoGraphy>
    <div className="mt-8">
      <TypoGraphy variant="body2">The Body</TypoGraphy>
    </div>
  </div>
);

export const Custom = Template.bind({});
Custom.args = {
  variant: 'custom',
  children: CustomTemplate(),
};
