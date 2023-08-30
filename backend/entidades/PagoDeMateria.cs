namespace backend.entidades
{
    /// <summary>
    /// Clase Pago de Materia
    /// </summary>
    public class PagoDeMateria : Common
    {
        /// <summary>
        /// Id de Pago de Materia
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Id de Cajera en Pago de Materia
        /// </summary>
        public int IdCajera { get; set; }
        /// <summary>
        /// Id de Usuario en Pago de Materia
        /// </summary>
        public int IdUsuario { get; set; }
        /// <summary>
        /// Fecha de pago en Pago de Materia
        /// </summary>
        public DateTime FechaPago { get; set; }
        /// <summary>
        /// Monto en Pago de Materia
        /// </summary>
        public decimal Monto { get; set; }
        /// <summary>
        /// Materia en Pago de Materia
        /// </summary>
        public string? Materia { get; set; }
    }
}