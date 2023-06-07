import {Entity, model, property} from '@loopback/repository';

@model()
export class FacturaProducto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  cantidad?: number;


  constructor(data?: Partial<FacturaProducto>) {
    super(data);
  }
}

export interface FacturaProductoRelations {
  // describe navigational properties here
}

export type FacturaProductoWithRelations = FacturaProducto & FacturaProductoRelations;
