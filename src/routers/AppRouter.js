import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import { AlbumDetailPage, AlbumsPage } from '../pages/AlbumsPage';
import { ArtistsDetailPage, ArtistsPage } from '../pages/ArtistsPage';
import GenresPage from '../pages/GenresPage';
import { useDispatch } from 'react-redux';
import { getAlbums } from '../redux/ducks/albumsDucks';

const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlbums());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/albums" component={AlbumsPage} />
      <Route exact path="/albums/:albumId" component={AlbumDetailPage} />
      <Route exact path="/artists" component={ArtistsPage} />
      <Route exact path="/artists/:artistId" component={ArtistsDetailPage} />
      <Route exact path="/genres" component={GenresPage} />
      <Route exact component={NotFoundPage} />
    </Switch>
  );
};

export default AppRouter;
