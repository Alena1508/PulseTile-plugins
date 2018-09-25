import { combineEpics } from 'redux-observable';

import asyncComponent from '../../../../components/containers/AsyncComponent/AsyncComponent';
import { themeClientUrls } from '../../config/clientUrls';

import { fetchPatientImagesEpic } from './ducks/fetch-patient-images.duck';
import { fetchPatientImagesDetailEpic } from './ducks/fetch-patient-images-detail.duck';
import { fetchSeriesEpic } from './ducks/fetch-all-series.duck';
import { fetchSeriesDetailEpic } from './ducks/fetch-series-detail.duck';

import patientsImages from './ducks/fetch-patient-images.duck';
import imagesDetail from './ducks/fetch-patient-images-detail.duck';
import allSeries from './ducks/fetch-all-series.duck';
import seriesDetail from './ducks/fetch-series-detail.duck';

const epics = combineEpics(fetchPatientImagesEpic, fetchPatientImagesDetailEpic, fetchSeriesEpic, fetchSeriesDetailEpic);
const Images = asyncComponent(() => import(/* webpackChunkName: "images" */ './Images').then(module => module.default));

const reducers = {
  patientsImages,
  imagesDetail,
  allSeries,
  seriesDetail,
};

const sidebarConfig = { key: 'images', pathToTransition: '/images', name: 'Images', isVisible: true };

const routers = [
  { key: 'images', component: Images, path: `${themeClientUrls.PATIENTS}/:userId/${themeClientUrls.IMAGES}` },
  { key: 'imagesDetail', component: Images, path: `${themeClientUrls.PATIENTS}/:userId/${themeClientUrls.IMAGES}/:sourceId` },
];

export default {
  component: Images,
  epics, reducers, sidebarConfig, routers
}
