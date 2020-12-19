import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import AlbumsPage from '../pages/AlbumsPage';
import ArtistsPage from '../pages/ArtistsPage';
import GenresPage from '../pages/GenresPage';
import MainPlayer from '../components/MainPlayer';
import Sidebar from '../components/Sidebar';

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/albums" component={AlbumsPage} />
        <Route path="/artists" component={ArtistsPage} />
        <Route path="/genres" component={GenresPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <MainPlayer />
    </div>
  </Router>
);

export default AppRouter;
