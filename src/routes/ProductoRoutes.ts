import HttpStatusCodes from '@src/common/HttpStatusCodes';

import ProductoService from '@src/services/ProductoService';
import { IProducto } from '@src/models/Producto';
import { IReq, IRes } from './types/express/misc';


// **** Functions **** //

/**
 * Get all users.
 */
async function getAll(_: IReq, res: IRes) {
    const productos = await ProductoService.getAll();
    return res.status(HttpStatusCodes.OK).json({ productos });
}

async function getOne(req: IReq, res: IRes) {
  const id = +req.params.id;
  const producto = await ProductoService.getOne(id);
  return res.status(HttpStatusCodes.OK).json( producto );
}

/**
 * Add one user.
 */
async function add(req: IReq<IProducto>, res: IRes) {
  const  producto  = req.body;
  await ProductoService.addOne(producto);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one user.
 */
async function update(req: IReq<IProducto>, res: IRes) {
  const producto = req.body;
  await ProductoService.updateOne(producto);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one user.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await ProductoService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}


// **** Export default **** //

export default {
  getAll,
  getOne,
  add,
  update,
  delete: delete_,
} as const;
