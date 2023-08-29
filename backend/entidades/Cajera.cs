namespace backend.entidades
{
    public class Cajera : Common
    {
        public int Id { get; set; }
        public string NombreCompleto { get; set; }
        public string Turno { get; set; }
        public int NumeroCaja { get; set; }
    }
}