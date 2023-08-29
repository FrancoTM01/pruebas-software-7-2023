namespace backend.entidades
{
    public class PagoDeMateria : Common
    {
        public int Id { get; set; }
        public int IdCajera { get; set; }
        public int IdUsuario { get; set; }
        public DateTime FechaPago { get; set; }
        public decimal Monto { get; set; }
        public string Materia { get; set; }
    }
}