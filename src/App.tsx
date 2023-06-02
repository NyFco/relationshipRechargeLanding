import 'swiper/css';

import { ThemeProvider } from 'styled-components';

import CommentSec from './components/commentSec/commentSec';
import EmailSec from './components/emailSec/emailSec';
import FaqSec from './components/faqSec/faqSec';
import Footer from './components/footer/footer';
import FormSec from './components/formSec/formSec';
import Header from './components/header/header';
import HeartSec from './components/heartSec/heartSec';
import HowSec from './components/howSec/howSec';
import JoinSec from './components/joinSec/joinSec';
import LoveSec from './components/loveSec/loveSec';
import MainSec from './components/mainSec/mainSec';
import MobileEmpowerSec from './components/mobileEmpowerSec/mobileEmpowerSec';
import OfferSec from './components/offerSec/offerSec';
import TopicsSec from './components/topicsSec/topicsSec';
import VisionSec from './components/visionSec/visionSec';
import WhySec from './components/whySec/whySec';
import theme from './styles/Theme';

import 'antd/dist/reset.css';
import './global.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainSec />
      <OfferSec />
      <JoinSec />
      <LoveSec />
      <TopicsSec />
      <HowSec />
      <WhySec />
      <CommentSec />
      <FormSec />
      <FaqSec />
      <VisionSec />
      <HeartSec />
      <MobileEmpowerSec />
      <EmailSec />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
