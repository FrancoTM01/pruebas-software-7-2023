namespace backend.entidades
{
    /// <summary>
    /// Clase Detalle Carrito
    /// </summary>
public class DetalleCarrito : Common
 {
/// <summary>
/// Id de Detalle Carrito
/// </summary>
 public int Id {get; set;}
/// <summary>
/// Cantidad de Detalle Carrito
/// </summary>
 public int Cantidad {get; set;}
/// <summary>
/// Id de Producto en Detalle Carrito
/// </summary>
 public int IdProducto {get; set;}
/// <summary>
/// Id de Carrito Compra en Detalle Carrito
/// </summary>
 public int IdCarritoCompra {get; set;}

 }
}