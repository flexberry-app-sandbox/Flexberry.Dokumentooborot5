import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.dokumentooborot5.caption'),
          title: i18n.t('forms.application.sitemap.dokumentooborot5.title'),
          children: [{
            link: 'i-i-s-dokumentooborot5-должность-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot5.i-i-s-dokumentooborot5-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot5.i-i-s-dokumentooborot5-должность-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot5-форма-документа-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot5.i-i-s-dokumentooborot5-форма-документа-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot5.i-i-s-dokumentooborot5-форма-документа-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot5-вход-в-систему-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot5.i-i-s-dokumentooborot5-вход-в-систему-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot5.i-i-s-dokumentooborot5-вход-в-систему-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot5-документ-не-ут-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot5.i-i-s-dokumentooborot5-документ-не-ут-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot5.i-i-s-dokumentooborot5-документ-не-ут-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot5-ав-пользователи-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot5.i-i-s-dokumentooborot5-ав-пользователи-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot5.i-i-s-dokumentooborot5-ав-пользователи-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot5-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot5.i-i-s-dokumentooborot5-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot5.i-i-s-dokumentooborot5-сотрудники-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})