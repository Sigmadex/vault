import './Vote.css';
import Footer from '../../atoms/Footer/Footer';
import Layout from '../../atoms/Layout/Layout';
import Navbar from '../../atoms/Navbar/Navbar';
import TypoGraphy from '../../atoms/Typography/Typography';
import { IVoteProps } from './Vote.types';
import Card from '../../atoms/Card/Card';
import Button from '../../atoms/Button/Button';

const Vote = ({
  footerProps,
  navbarProps,
  buttonText,
  caption,
  title,
  cards,
  portalCards,
  isConnect,
  warning,
  icon_warning = "/warning.png"
}: IVoteProps) => {
  return (
    <div className="w-full vote-section">
      {warning &&
        <div className='vote-section-warning'>
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
      <div className="mt-[1.25rem] mb-28 min-h-screen flex flex-col items-center justify-center">
        <Layout variant="wide">
          <div className="w-full flex justify-center">
            <div className="w-3/5">
              <div className="w-full flex justify-center items-center">
                {cards &&
                  <Card variant="custom">
                    <div className="w-full flex flex-col items-center text-center">
                      <TypoGraphy variant="h3">{title}</TypoGraphy>
                      <div className="mt-3">
                        <TypoGraphy variant="caption">{caption}</TypoGraphy>
                      </div>
                      {
                        portalCards.map((card, idx) => (
                          <div
                            key={idx}
                            className="w-full flex justify-between items-center mt-5 px-20"
                          >
                            <div className="flex items-center relative">
                              <div className="ml-4">
                                <TypoGraphy variant="body1">
                                  {card.body1}
                                </TypoGraphy>
                              </div>
                            </div>
                            <div>
                              <TypoGraphy variant="body1" isbold>
                                {card.body2}
                              </TypoGraphy>
                            </div>
                          </div>
                        ))
                      }
                      <div className="mt-5  flex flex-row justify-between px-5 pb-5 rounded-xl w-full">
                        {cards.map((card, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col justify-between mt-5"
                          >
                            <div className={isConnect === false ? "disabled-options-card-container" : 'options-card-container'}>
                              <Card variant="custom">
                                <div className="px-6">
                                  <div>
                                    <TypoGraphy variant="h6" isbold color={isConnect === false ? "#B3BEC6" : ""}>
                                      {card.body1}
                                    </TypoGraphy>
                                  </div>
                                  <div>
                                    <TypoGraphy variant="h4" isbold color={isConnect === false ? "#B3BEC6" : ""}>
                                      {card.body2}
                                    </TypoGraphy>
                                  </div>
                                </div>
                              </Card>
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
            </div>
          </div>
        </Layout>
      </div >
      <Footer {...footerProps} />
    </div >
  );
};
export default Vote;
