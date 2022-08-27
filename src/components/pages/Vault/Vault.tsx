import './Vault.css';
import Footer from '../../atoms/Footer/Footer';
import Layout from '../../atoms/Layout/Layout';
import Navbar from '../../atoms/Navbar/Navbar';
import TypoGraphy from '../../atoms/Typography/Typography';
import { IVaultProps } from './Vault.types';
import Card from '../../atoms/Card/Card';
import Button from '../../atoms/Button/Button';
import Table from '../../atoms/Table/Table';

const Vault = ({
  footerProps,
  navbarProps,
  buttonText,
  caption,
  title,
  cards,
  tableProps,
  warning,
  icon = '/lock.png',
  icon_warning = "/warning.png"
}: IVaultProps) => {
  return (
    <div className="w-full vault-section">
      {warning &&
        <div className='w-full vault-section-warning'>
          <Card variant="custom">
            <div className='mb-5'>
              <img
                src={icon_warning}
                className="object-contain w-8 warning-icon"
                alt="Claim SDX"
              />
            </div>
            <TypoGraphy variant="body1" className='warning-msg'>{warning}</TypoGraphy>
          </Card>
        </div>
      }
      <Navbar {...navbarProps} />
      <div className="mt-12 mb-28 min-h-screen flex flex-col items-center justify-center">
        <Layout variant="medium">
          <div className="flex justify-center items-center">
            {cards && <Card variant="custom">
              <div className="w-full flex flex-col items-center text-center">
                <TypoGraphy variant="h3">{title}</TypoGraphy>
                <div className="mt-3">
                  <TypoGraphy variant="caption">{caption}</TypoGraphy>
                </div>
                <div className="mt-5">
                  <img
                    src={icon}
                    className="object-contain w-8"
                    alt="Claim SDX"
                  />
                </div>
                <div className="mt-5 border px-5 pb-5 rounded-xl w-full">
                  {cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="w-full flex justify-between items-center mt-5"
                    >
                      <div className="flex items-center relative">
                        <img
                          src={card.icon}
                          className="w-7 object-cover"
                          alt={card.body1}
                        />
                        {card.timerIcon &&
                          <img
                            src={card.timerIcon}
                            className="w-3 object-cover absolute top-2 right-[4.5rem]"
                            alt={card.body1}
                          />
                        }
                        <div className="ml-4">
                          <TypoGraphy variant="body1" isbold>
                            {card.body1}
                          </TypoGraphy>
                        </div>
                      </div>
                      <div>
                        <TypoGraphy variant="body1" isbold>
                          {card.body2}
                          {card.change?.length ? (
                            <span className="ml-1" style={{ color: '#51C64F' }}>
                              {card.change}
                            </span>
                          ) : null}
                        </TypoGraphy>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Button variant="outlined">{buttonText}</Button>
                </div>
              </div>
            </Card>}
          </div>
        </Layout>
        {
          tableProps &&
          <Layout variant="wide">
            <div className='w-full flex flex-row items-center justify-center'>
              <div className='w-3/4'>
                <Card variant="custom">
                  <div className="w-full flex flex-col items-center text-center">
                    <TypoGraphy variant="h3">{title}</TypoGraphy>
                    <div className="mt-3">
                      <TypoGraphy variant="caption">{caption}</TypoGraphy>
                    </div>
                    <div className="mt-5 shadow px-5 pt-3 pb-4 rounded-xl w-full custom-table-container">
                      <Table {...tableProps} />
                    </div>
                  </div>
                  <div className="mt-10 flex flex-row justify-end">
                    <Button variant="outlined">{buttonText}</Button>
                  </div>
                </Card>
              </div>
            </div>
          </Layout>
        }

      </div>
      <Footer {...footerProps} />
    </div>
  );
};

export default Vault;
