import { ComponentMeta, Story } from '@storybook/react';
import { IHeaderProps, RowType } from '../../atoms/Table/Table.types';
import Vault from './Vault';
import { IVaultProps, VaultCardType } from './Vault.types';

export default {
  title: 'Pages/Vault',
  component: Vault,
} as ComponentMeta<typeof Vault>;

const tableHeader: IHeaderProps[] = [
  {
    key: 'txId',
    display: 'TX ID',
  },
  {
    key: 'Timestamp',
    display: 'Time Stamp',
  },
  {
    key: 'vaultAddress',
    display: 'Vault Address',
  },
  {
    key: 'destination',
    display: 'Destination',
  },
  {
    key: 'claimAmount',
    display: 'Claim Amount',
  },
];
const tableRows: RowType[] = [
  {
    txId: 'N/A',
    Timestamp: 'N/A',
    vaultAddress: 'N/A',
    destination: 'N/A',
    claimAmount: 'N/A',
  },
];

const cardsConnected: VaultCardType[] = [
  {
    body1: 'Locked:',
    body2: '1,000.00',
    icon: 'wallet-1.png',
    timerIcon: 'timer.png',
  },
  {
    body1: 'Available:',
    body2: '40.00',
    icon: 'wallet-1.png',
  },
  {
    body1: 'Vault Value:',
    body2: '$249,014.55',
    change: '+12%',
    icon: 'default-1.png',
  },
];
const cardsConnected1: VaultCardType[] = [
  {
    body1: 'Locked:',
    body2: '1,000.00',
    icon: 'wallet-1.png',
    timerIcon: 'timer.png',
  },
  {
    body1: 'Available:',
    body2: '40.00',
    icon: 'wallet-1.png',
  },

];
const cards: VaultCardType[] = [
  {
    body1: 'Locked:',
    body2: 'N/A',
    icon: 'wallet-1.png',
    timerIcon: 'timer.png',
  },
  {
    body1: 'Available:',
    body2: 'N/A',
    icon: 'wallet-1.png',
  },
  {
    body1: 'Vault Value:',
    body2: '$249,014.55',
    change: '+12%',
    icon: 'default-1.png',
  },
];
const Template: Story<IVaultProps> = (args) => <Vault {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  navbarProps: {
    // rightIcon:'',
    variant: 'connect',
    buttonText: 'Connect Wallet',
    shadowed: false,
  },
  footerProps: {
    copyRightText: '© 2022 Sigma Labs',
    rightText: '154869129',
  },
  buttonText: 'Connect Wallet',
  title: 'Claim SDEX',
  caption: 'Your vault balances are displayed below:',
  cards,
};

export const Withdraw = Template.bind({});
Withdraw.args = {
  navbarProps: {
    variant: 'connected',
    connectedText: '0x90R4...C2Y5',
    shadowed: false,
  },
  footerProps: {
    copyRightText: '© 2022 Sigma Labs',
    rightText: '154869129',
  },
  buttonText: 'Withdraw',
  title: 'Claim SDEX',
  caption: 'Your vault balances are displayed below:',
  icon: '/lock.png',
  cards: cardsConnected,
};

export const History = Template.bind({});
History.args = {
  navbarProps: {
    variant: 'connected',
    connectedText: '0x90R4...C2Y5',
    shadowed: false,
  },
  footerProps: {
    copyRightText: '© 2022 Sigma Labs',
    rightText: '154869129',
  },
  buttonText: 'Next',
  title: 'Claim SDEX History',
  caption: 'The following SDEX claim transactions have occurred:',
  tableProps: {
    header: tableHeader,
    rows: tableRows,
    selected:
    {
      firstTitle: 'Actions:',
      caption: 'N/A',
      secondTitle: 'N/A',
      buttons: [
        { variant: 'outlined', children: 'Action' },
      ],
    },
  }
};

export const Claim = Template.bind({});
Claim.args = {
  navbarProps: {
    variant: 'connected',
    connectedText: '0x90R4...C2Y5',
    shadowed: false,
  },
  footerProps: {
    copyRightText: '© 2022 Sigma Labs',
    rightText: '154869129',
  },
  buttonText: 'Withdraw',
  title: 'Claim SDEX',
  caption: 'Your vault balances are displayed below:',
  icon: '/lock.png',
  warning: "Lightbox message lorem ipsum.",
  icon_warning: '/warning.png',
  
  cards: cardsConnected1,
};