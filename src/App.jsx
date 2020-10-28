import React from 'react';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ContentHeader from './components/ContentHeader';
import VideoPlayer from './components/VideoPlayer';
import DetailsCard from './components/DetailsCard';
import SummaryAccordion from './components/SummaryAccordion';
import Discussion from './components/Discussion';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <>  
  <Sidebar />
  <Header />
  <ContentHeader />
  <VideoPlayer />
  <DetailsCard />
  <SummaryAccordion />
  <Discussion />
  </>
);

export default App;
