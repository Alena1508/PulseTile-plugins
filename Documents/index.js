import { combineEpics } from 'redux-observable';

import asyncComponent from '../../../../components/containers/AsyncComponent/AsyncComponent';
import { themeClientUrls } from '../../config/clientUrls';

import { fetchPatientDocumentsDetailEpic } from './ducks/fetch-patient-documents-detail.duck';
import { fetchPatientDocumentsEpic } from './ducks/fetch-patient-documents.duck';

import patientsDocuments from './ducks/fetch-patient-documents.duck';
import  documentsDetail from './ducks/fetch-patient-documents-detail.duck';

const epics = combineEpics(fetchPatientDocumentsDetailEpic, fetchPatientDocumentsEpic);
const Documents = asyncComponent(() => import(/* webpackChunkName: "documents" */ './Documents').then(module => module.default));

const  reducers = {
  patientsDocuments,
  documentsDetail
};

const sidebarConfig = { key: 'documents', pathToTransition: '/documents', name: 'Documents', isVisible: true };

const routers = [
  { key: 'documents', component: Documents, path: `${themeClientUrls.PATIENTS}/:userId/${themeClientUrls.DOCUMENTS}` },
  { key: 'documentsDetail', component: Documents, path: `${themeClientUrls.PATIENTS}/:userId/${themeClientUrls.DOCUMENTS}/:sourceId` },
];

export default {
  component: Documents,
  epics, reducers, sidebarConfig, routers
}
