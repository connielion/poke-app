export interface Pokemon {
  id: number;
  name: string;
  height: number;
  order: number;
  abilities: [
    {
      is_hidden: true;
      slot: number;
      ability: {
        name: string;
        url: string;
      }
    }
  ];
  types: [
    {
    type: {
      slot: number;
      name: string;
    }
  }
 ];
}
