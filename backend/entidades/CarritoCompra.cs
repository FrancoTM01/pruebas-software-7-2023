namespace backend.entidades
{
    /// <summary>
    /// Clase Carrito Compra
    /// </summary>
    public class CarritoCompra : Common
    {
        /// <summary>
        /// Id de Carrito Compra
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Fecha de Carrito Compra
        /// </summary>
        public DateTime Fecha { get; set; }
        /// <summary>
        /// Id de Usuario de Carrito Compra
        /// </summary>
        public int IdUsuario { get; set; }
    }
}