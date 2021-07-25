import {
  AnyApiFactory, configApiRef, createApiFactory
} from '@backstage/core';
import {
  ScmIntegrationsApi, scmIntegrationsApiRef
} from '@backstage/integration-react';
import { CustomTechRadarDataClient } from './lib/CustomTechRadarDataClient';
import { techRadarApiRef } from '@backstage/plugin-tech-radar';

export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
  createApiFactory(techRadarApiRef, new CustomTechRadarDataClient()),
];
