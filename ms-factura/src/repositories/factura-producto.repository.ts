import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {FacturaProducto, FacturaProductoRelations} from '../models';

export class FacturaProductoRepository extends DefaultCrudRepository<
  FacturaProducto,
  typeof FacturaProducto.prototype.id,
  FacturaProductoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(FacturaProducto, dataSource);
  }
}
