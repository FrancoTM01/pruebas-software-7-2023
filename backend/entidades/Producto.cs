namespace backend.entidades
{

    /// <summary>
    /// Producto clase
    /// </summary>
    public class Producto : Common
    {

        /// <summary>
        /// Id de Producto
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Nombre de producto
        /// </summary>
        public string? Nombre { get; set; }
        /// <summary>
        /// Ide categeoria de producto
        /// </summary>
        public int IdCategoria { get; set; }
    }
}