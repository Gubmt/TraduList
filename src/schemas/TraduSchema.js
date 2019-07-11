export default class TraduSchema {
  static schema = {
    name: 'ListTradu',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      word: 'string',
      tradu: 'string',
    },
  };
}