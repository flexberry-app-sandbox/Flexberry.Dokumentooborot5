import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПолEnum from '../enums/i-i-s-dokumentooborot5-пол';

export default FlexberryEnum.extend({
  enum: ПолEnum,
  sourceType: 'IIS.Dokumentooborot5.Пол'
});
