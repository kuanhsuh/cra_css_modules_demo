import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Button from './Button/Button';
import registerServiceWorker from './registerServiceWorker';

const BtnGroup = () => (
  <div>
    <Button text="primary" mode="primary"/>
    <Button text="danger" mode="danger"/>
    <Button text="info" mode="info"/>
    <Button text="warning" mode="warning"/>
  </div>
)

ReactDOM.render(<BtnGroup />, document.getElementById('root'));
registerServiceWorker();
