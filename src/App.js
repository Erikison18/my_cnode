import React from 'react';
import MainHeader from './view/header.jsx'
import MainFooter from './view/footer.jsx'
import RouterIndex from './router/indedx'
import './view/index.css'

function App() {
  return (
    // <RouterIndex></RouterIndex>
    <div className="pageWrap">
      <MainHeader></MainHeader>
      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
