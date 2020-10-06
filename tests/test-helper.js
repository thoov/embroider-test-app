import Application from 'embroider-test-app/app';
import config from 'embroider-test-app/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
