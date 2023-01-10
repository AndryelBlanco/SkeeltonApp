import React, { Component } from 'react';
import { Route } from 'react-router';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import './custom.css';
import '../src/styles/root.scss';
import HeaderApp from './components/Header/HeaderApp';
import FooterApp from './components/Footer/FooterApp';
import AppContent from './components/AppContent/AppContent';
import AppDataProvider from './context/AppDataContext';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div className='page-container'>
        <AppDataProvider>
          <DndProvider backend={HTML5Backend}>
            <HeaderApp />
            <Route exact path='/:id' component={AppContent} />
          </DndProvider>
        </AppDataProvider>
      </div>
    );
  }
}
