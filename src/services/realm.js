import Realm from 'realm';

import TraduSchema from '../schemas/TraduSchema';

export default function getRealm() {
  return Realm.open({
    schema: [TraduSchema],
  });
}