import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISDokumentooborot5АвПользователиLForm from './forms/i-i-s-dokumentooborot5-ав-пользователи-l';
import IISDokumentooborot5ВходВСистемуLForm from './forms/i-i-s-dokumentooborot5-вход-в-систему-l';
import IISDokumentooborot5ДокументНеУтLForm from './forms/i-i-s-dokumentooborot5-документ-не-ут-l';
import IISDokumentooborot5ДолжностьLForm from './forms/i-i-s-dokumentooborot5-должность-l';
import IISDokumentooborot5СотрудникиLForm from './forms/i-i-s-dokumentooborot5-сотрудники-l';
import IISDokumentooborot5ФормаДокументаLForm from './forms/i-i-s-dokumentooborot5-форма-документа-l';
import IISDokumentooborot5АвПользователиEForm from './forms/i-i-s-dokumentooborot5-ав-пользователи-e';
import IISDokumentooborot5ВходВСистемуEForm from './forms/i-i-s-dokumentooborot5-вход-в-систему-e';
import IISDokumentooborot5ДокументНеУтEForm from './forms/i-i-s-dokumentooborot5-документ-не-ут-e';
import IISDokumentooborot5ДолжностьEForm from './forms/i-i-s-dokumentooborot5-должность-e';
import IISDokumentooborot5СотрудникиEForm from './forms/i-i-s-dokumentooborot5-сотрудники-e';
import IISDokumentooborot5ФормаДокументаEForm from './forms/i-i-s-dokumentooborot5-форма-документа-e';
import IISDokumentooborot5АвПользователиModel from './models/i-i-s-dokumentooborot5-ав-пользователи';
import IISDokumentooborot5ВходВСистемуModel from './models/i-i-s-dokumentooborot5-вход-в-систему';
import IISDokumentooborot5ДокументНеУтModel from './models/i-i-s-dokumentooborot5-документ-не-ут';
import IISDokumentooborot5ДолжностьModel from './models/i-i-s-dokumentooborot5-должность';
import IISDokumentooborot5СотрудникиModel from './models/i-i-s-dokumentooborot5-сотрудники';
import IISDokumentooborot5ТЧПользовательModel from './models/i-i-s-dokumentooborot5-т-ч-пользователь';
import IISDokumentooborot5ТЧПраваModel from './models/i-i-s-dokumentooborot5-т-ч-права';
import IISDokumentooborot5ТЧСоздДокModel from './models/i-i-s-dokumentooborot5-т-ч-созд-док';
import IISDokumentooborot5ФормаДокументаModel from './models/i-i-s-dokumentooborot5-форма-документа';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-dokumentooborot5-ав-пользователи': IISDokumentooborot5АвПользователиModel,
    'i-i-s-dokumentooborot5-вход-в-систему': IISDokumentooborot5ВходВСистемуModel,
    'i-i-s-dokumentooborot5-документ-не-ут': IISDokumentooborot5ДокументНеУтModel,
    'i-i-s-dokumentooborot5-должность': IISDokumentooborot5ДолжностьModel,
    'i-i-s-dokumentooborot5-сотрудники': IISDokumentooborot5СотрудникиModel,
    'i-i-s-dokumentooborot5-т-ч-пользователь': IISDokumentooborot5ТЧПользовательModel,
    'i-i-s-dokumentooborot5-т-ч-права': IISDokumentooborot5ТЧПраваModel,
    'i-i-s-dokumentooborot5-т-ч-созд-док': IISDokumentooborot5ТЧСоздДокModel,
    'i-i-s-dokumentooborot5-форма-документа': IISDokumentooborot5ФормаДокументаModel
  },

  'application-name': 'Dokumentooborot5',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Dokumentooborot5',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Dokumentooborot5',
          title: 'Dokumentooborot5'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        dokumentooborot5: {
          caption: 'Dokumentooborot5',
          title: 'Dokumentooborot5',
          'i-i-s-dokumentooborot5-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-dokumentooborot5-форма-документа-l': {
            caption: 'Форма документа',
            title: ''
          },
          'i-i-s-dokumentooborot5-вход-в-систему-l': {
            caption: 'Вход в систему',
            title: ''
          },
          'i-i-s-dokumentooborot5-документ-не-ут-l': {
            caption: 'Документ не ут',
            title: ''
          },
          'i-i-s-dokumentooborot5-ав-пользователи-l': {
            caption: 'Ав пользователи',
            title: ''
          },
          'i-i-s-dokumentooborot5-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-dokumentooborot5-ав-пользователи-l': IISDokumentooborot5АвПользователиLForm,
    'i-i-s-dokumentooborot5-вход-в-систему-l': IISDokumentooborot5ВходВСистемуLForm,
    'i-i-s-dokumentooborot5-документ-не-ут-l': IISDokumentooborot5ДокументНеУтLForm,
    'i-i-s-dokumentooborot5-должность-l': IISDokumentooborot5ДолжностьLForm,
    'i-i-s-dokumentooborot5-сотрудники-l': IISDokumentooborot5СотрудникиLForm,
    'i-i-s-dokumentooborot5-форма-документа-l': IISDokumentooborot5ФормаДокументаLForm,
    'i-i-s-dokumentooborot5-ав-пользователи-e': IISDokumentooborot5АвПользователиEForm,
    'i-i-s-dokumentooborot5-вход-в-систему-e': IISDokumentooborot5ВходВСистемуEForm,
    'i-i-s-dokumentooborot5-документ-не-ут-e': IISDokumentooborot5ДокументНеУтEForm,
    'i-i-s-dokumentooborot5-должность-e': IISDokumentooborot5ДолжностьEForm,
    'i-i-s-dokumentooborot5-сотрудники-e': IISDokumentooborot5СотрудникиEForm,
    'i-i-s-dokumentooborot5-форма-документа-e': IISDokumentooborot5ФормаДокументаEForm
  },

});

export default translations;
