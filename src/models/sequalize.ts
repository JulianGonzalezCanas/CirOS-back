import { Compra } from "./Compra";
import { Producto } from "./Producto";
import { Producto_has_Compra } from "./Producto_has_Compra";
import { Usuario } from "./User";

export function defineAssociations() {

    Usuario.hasMany(Compra, {foreignKey: 'Usuario_idUsuario'});


    Producto.belongsToMany(Compra, {through: Producto_has_Compra, foreignKey: 'Producto_idProducto'});
    Compra.belongsToMany(Producto, {through: Producto_has_Compra, foreignKey: 'Compra_idCompra'});
}