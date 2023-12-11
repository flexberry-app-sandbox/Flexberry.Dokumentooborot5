import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dokumentooborot5-т-ч-пользователь', 'Unit | Serializer | i-i-s-dokumentooborot5-т-ч-пользователь', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-dokumentooborot5-т-ч-пользователь',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-dokumentooborot5-отделы',
    'transform:i-i-s-dokumentooborot5-пол',
    'transform:i-i-s-dokumentooborot5-права-пол',
    'transform:i-i-s-dokumentooborot5-утверждение',

    'model:i-i-s-dokumentooborot5-ав-пользователи',
    'model:i-i-s-dokumentooborot5-вход-в-систему',
    'model:i-i-s-dokumentooborot5-документ-не-ут',
    'model:i-i-s-dokumentooborot5-должность',
    'model:i-i-s-dokumentooborot5-сотрудники',
    'model:i-i-s-dokumentooborot5-т-ч-пользователь',
    'model:i-i-s-dokumentooborot5-т-ч-права',
    'model:i-i-s-dokumentooborot5-т-ч-созд-док',
    'model:i-i-s-dokumentooborot5-форма-документа',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
