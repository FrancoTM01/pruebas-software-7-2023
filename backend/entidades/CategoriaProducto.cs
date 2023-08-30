namespace backend.entidades
{
    /// <summary>
    /// Clase Categoria Producto
    /// </summary>
    public class CategoriaProducto : Common
    {
        /// <summary>
        /// Id de Categeoria Producto
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Nombre de Categoria Producto
        /// </summary>
        public string? Nombre { get; set; }
    }
}