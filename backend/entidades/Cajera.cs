namespace backend.entidades
{
    /// <summary>
    /// Clase Cajera
    /// </summary>
    public class Cajera : Common
    {
        /// <summary>
        /// Id de Cajera
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Nombre Completo de Cajera
        /// </summary>
        public string? NombreCompleto { get; set; }
        /// <summary>
        /// Turno de Cajera
        /// </summary>
        public string? Turno { get; set; }
        /// <summary>
        /// Numero de Caja de Cajera
        /// </summary>
        public int NumeroCaja { get; set; }
    }
}