using backend.connection;
using backend.entidades;
using backend.servicios;

namespace backend_unit_test
{
    public class UnitTestUsuarios
    {
        public UnitTestUsuarios()
        {
            BDManager.GetInstance.ConnectionString = "workstation id=UniversidadCumbre.mssql.somee.com;packet size=4096;user id=FrancoTapiaM_SQLLogin_3;pwd=jtgmvharja;data source=UniversidadCumbre.mssql.somee.com;persist security info=False;initial catalog=UniversidadCumbre";
        }

        [Fact]
        public void Usuarios_Get_Verificar_NotNull()
        {
            var result = UsuariosServicios.ObtenerTodo<Usuarios>();
            Assert.Null(result);
        }
    }
    
}