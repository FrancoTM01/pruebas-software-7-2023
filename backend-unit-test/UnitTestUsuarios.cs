using backend.connection;
using backend.servicios;

namespace backend_unit_test
{
    public class UnitTestUsuarios
    {
        public UnitTestUsuarios()
        {
            BDManager.GetInstance.ConnectionString = "";
        }
        [Fact]
        public void Usuarios_Get_Verificar_Notnull()
        {
            var result = UsuariosServicios.ObtenerTodo<Usuarios>();
            Assert.Null(result);
        }
    }
}