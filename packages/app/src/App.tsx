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
import { createTheme, lightTheme, darkTheme, genPageTheme, shapes } from '@backstage/theme';

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
        pageTheme: {
          home: genPageTheme(['#fefefe'], shapes.wave),
          documentation: genPageTheme(['#24AE1D'], shapes.wave2),
          tool: genPageTheme(['#24AE1D'], shapes.round),
          service: genPageTheme(['#24AE1D'], shapes.wave),
          website: genPageTheme(['#24AE1D'], shapes.wave),
          library: genPageTheme(['#24AE1D'], shapes.wave),
          other: genPageTheme(['#24AE1D'], shapes.wave),
          app: genPageTheme(['#24AE1D'], shapes.wave),
          apis: genPageTheme(['#24AE1D'], shapes.wave),
        }
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
            indicator: '#89DF00',
            color: '#24AE1D',
            selectedColor: '#89DF00',
          },
          primary: {
            main: '#24AE1D',
            dark: '#89DF00',
          },
        },
        fontFamily: 'Open Sans, sans-serif',
        defaultPageTheme: 'home',
        pageTheme: {
          home: genPageTheme(['#262626'], shapes.wave),
          documentation: genPageTheme(['#262626'], shapes.wave2),
          tool: genPageTheme(['#262626'], shapes.round),
          service: genPageTheme(['#262626'], shapes.wave),
          website: genPageTheme(['#262626'], shapes.wave),
          library: genPageTheme(['#262626'], shapes.wave),
          other: genPageTheme(['#262626'], shapes.wave),
          app: genPageTheme(['#262626'], shapes.wave),
          apis: genPageTheme(['#262626'], shapes.wave),
        },
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
