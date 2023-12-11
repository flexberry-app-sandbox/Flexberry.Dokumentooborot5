import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ОтделыEnum from '../enums/i-i-s-dokumentooborot5-отделы';

export default FlexberryEnum.extend({
  enum: ОтделыEnum,
  sourceType: 'IIS.Dokumentooborot5.Отделы'
});
