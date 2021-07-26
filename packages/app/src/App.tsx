import React from 'react';
import { Navigate, Route } from 'react-router';
import {
  AlertDisplay,
  createApp,
  FlatRoutes,
  OAuthRequestDialog,
} from '@backstage/core';
import { apiDocsPlugin, ApiExplorerPage } from '@backstage/plugin-api-docs';
import {
  CatalogEntityPage,
  CatalogIndexPage,
  catalogPlugin,
} from '@backstage/plugin-catalog';
import {CatalogImportPage, catalogImportPlugin} from '@backstage/plugin-catalog-import';
import { ScaffolderPage, scaffolderPlugin } from '@backstage/plugin-scaffolder';
import { SearchPage } from '@backstage/plugin-search';
import { TechRadarPage } from '@backstage/plugin-tech-radar';
import { TechdocsPage } from '@backstage/plugin-techdocs';
import { UserSettingsPage } from '@backstage/plugin-user-settings';
import { apis } from './apis';
import { entityPage } from './components/catalog/EntityPage';
import { Root } from './components/Root';
import { createTheme, lightTheme, darkTheme } from '@backstage/theme';

const app = createApp({
  apis,
  themes: [
    {
      id: 'light-theme',
      title: 'Light Theme',
      variant: 'light',
      theme: createTheme({
        palette: {
          ...lightTheme.palette,
          navigation: {
            background: '#171717',
            indicator: '#9BF0E1',
            color: '#24AE1D',
            selectedColor: '#FFF',
          },
        },
        fontFamily: 'Open Sans, sans-serif',
        defaultPageTheme: 'home',
      }),
    },
    {
      id: 'dark-theme',
      title: 'Dark Theme',
      variant: 'dark',
      theme: createTheme({
        palette: {
          ...darkTheme.palette,
          navigation: {
            background: '#424242',
            indicator: '#9BF0E1',
            color: '#24AE1D',
            selectedColor: '#FFF',
          },
        },
        fontFamily: 'Open Sans, sans-serif',
        defaultPageTheme: 'home',
      }),
    },
  ],
  bindRoutes({ bind }) {
    bind(catalogPlugin.externalRoutes, {
      createComponent: scaffolderPlugin.routes.root,
    });
    bind(apiDocsPlugin.externalRoutes, {
      createComponent: scaffolderPlugin.routes.root,
    });
    bind(scaffolderPlugin.externalRoutes, {
      registerComponent: catalogImportPlugin.routes.importPage,
    });
  },
});

const AppProvider = app.getProvider();
const AppRouter = app.getRouter();

const routes = (
  <FlatRoutes>
    <Navigate key="/" to="/catalog" />
    <Route path="/catalog" element={<CatalogIndexPage />} />
    <Route
      path="/catalog/:namespace/:kind/:name"
      element={<CatalogEntityPage />}
    >
      {entityPage}
    </Route>
    <Route path="/docs" element={<TechdocsPage />} />
    <Route path="/create" element={<ScaffolderPage />} />
    <Route path="/api-docs" element={<ApiExplorerPage />} />
    <Route
      path="/tech-radar"
      element={<TechRadarPage width={1500} height={800} />}
    />
    <Route path="/catalog-import" element={<CatalogImportPage />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/settings" element={<UserSettingsPage />} />
  </FlatRoutes>
);

const App = () => (
  <AppProvider>
    <AlertDisplay />
    <OAuthRequestDialog />
    <AppRouter>
      <Root>{routes}</Root>
    </AppRouter>
  </AppProvider>
);

export default App;
