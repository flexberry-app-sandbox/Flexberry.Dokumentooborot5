import { Serializer as ФормаДокументаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-dokumentooborot5-форма-документа';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ФормаДокументаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
