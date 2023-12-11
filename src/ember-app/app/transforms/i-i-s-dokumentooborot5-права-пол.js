import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПраваПолEnum from '../enums/i-i-s-dokumentooborot5-права-пол';

export default FlexberryEnum.extend({
  enum: ПраваПолEnum,
  sourceType: 'IIS.Dokumentooborot5.ПраваПол'
});
