import {
  TechRadarApi,
  TechRadarLoaderResponse,
} from '@backstage/plugin-tech-radar';

export class CustomTechRadarDataClient implements TechRadarApi {
  async load(): Promise<TechRadarLoaderResponse> {
    // if needed id prop can be used to fetch the correct data

    const data = await fetch('tech-radar-data.json').then(res => res.json());

    // maybe you'll need to do some data transformation here to make it look like TechRadarLoaderResponse

    return data;
  }
}
