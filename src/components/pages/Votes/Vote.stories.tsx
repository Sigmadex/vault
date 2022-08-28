import { ComponentMeta, Story } from '@storybook/react';
import Vote from './Vote';
import { IVoteProps, PortalCardType, VoteCardType } from './Vote.types';

export default {
  title: 'Pages/Vote',
  component: Vote,
} as ComponentMeta<typeof Vote>;


const portalCards: PortalCardType[] = [
  {
    body1: 'Proposal ID:',
    body2: 'SEP-002',
  },
  {
    body1: 'RE:',
    body2: 'LAUNCH Strategy',
  }, {
    body1: 'Forum Link:',
    body2: 'View',
  }
];

const cards: VoteCardType[] = [
  {
    body1: 'Option',
    body2: 'A',
    icon: 'wallet-1.png',
    timerIcon: 'timer.png',
  },
  {
    body1: 'Option',
    body2: 'B',
    icon: 'wallet-1.png',
    timerIcon: 'timer.png',
  },
  {
    body1: 'Option',
    body2: 'C',
    icon: 'wallet-1.png',
    timerIcon: 'timer.png',
  },
];
const Template: Story<IVoteProps> = (args) => <Vote {...args} />;

export const ConnectWallet = Template.bind({});
ConnectWallet.args = {
  navbarProps: {
    variant: 'connected',
    connectedText: '0x90R4...C2Y5',
    shadowed: false,
  },
  footerProps: {
    copyRightText: '© 2022 Sigma Labs',
    rightText: '154869129',
  },
  buttonText: 'Connect Wallet',
  title: 'Vote Portal',
  caption: 'Select one of the three options below and submit your vote.',
  cards,
  portalCards,
  isConnect:false,
};
export const Standard = Template.bind({});
Standard.args = {
  navbarProps: {
    variant: 'connected',
    connectedText: '0x90R4...C2Y5',
    shadowed: false,
  },
  footerProps: {
    copyRightText: '© 2022 Sigma Labs',
    rightText: '154869129',
  },
  buttonText: 'Caste Vote',
  title: 'Vote Portal',
  caption: 'Select one of the three options below and submit your vote.',
  cards,
  portalCards,
};

export const CastVote = Template.bind({});
CastVote.args = {
  navbarProps: {
    variant: 'connected',
    connectedText: '0x90R4...C2Y5',
    shadowed: false,
  },
  footerProps: {
    copyRightText: '© 2022 Sigma Labs',
    rightText: '154869129',
  },
  buttonText: 'Caste Vote',
  title: 'Vote Portal',
  caption: 'Select one of the three options below and submit your vote.',
  cards,
  portalCards
};
export const NFTVote = Template.bind({});
NFTVote.args = {
  navbarProps: {
    variant: 'connected',
    connectedText: '0x90R4...C2Y5',
    shadowed: false,
  },
  footerProps: {
    copyRightText: '© 2022 Sigma Labs',
    rightText: '154869129',
  },
  buttonText: 'Caste Vote',
  title: 'Vote Portal',
  caption: 'Select one of the three options below and submit your vote.',
  cards,
  portalCards,
  isConnect: false,
  warning: 'This wallet does not hold a vote NFT.',
};
