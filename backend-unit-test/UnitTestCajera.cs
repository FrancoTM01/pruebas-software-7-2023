using backend.connection;
using backend.entidades;
using backend.servicios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace backend_unit_test
{
    public class UnitTestCajera
    {
        public UnitTestCajera()
        {
            BDManager.GetInstance.ConnectionString = "workstation id=UniversidadCumbre.mssql.somee.com;packet size=4096;user id=FrancoTapiaM_SQLLogin_3;pwd=jtgmvharja;data source=UniversidadCumbre.mssql.somee.com;persist security info=False;initial catalog=UniversidadCumbre";
        }

        [Fact]
        public void Cajera_Get_Verificar_NotNull()
        {
            var result = CajeraServicios.ObtenerTodo<Cajera>();
            Assert.NotNull(result);
        }

        [Fact]
        public void Cajera_GetById_VerificarItem()
        {
            var result = CajeraServicios.ObtenerPorId<Cajera>(1);
            Assert.Equal(1, result.Id);
        }

        [Fact]
        public void Cajera_Insertar()
        {
            Cajera cajeraTemp = new()
            {
                NombreCompleto = "Nombre Test",
                Turno = "Turno Test",
                NumeroCaja = 1
            };

            var result = CajeraServicios.InsertCajera(cajeraTemp);
            Assert.True(result > 0);
        }

        [Fact]
        public void Cajera_Actualizar()
        {
            var cajera = new Cajera
            {
                Id = 1,
                NombreCompleto = "Nombre Test Actualizado",
                Turno = "Turno Test Actualizado",
                NumeroCaja = 2
            };

            int result = CajeraServicios.UpdateCajera(cajera);
            Assert.True(result > 0);
        }

        [Fact]
        public void Cajera_Eliminar_EliminacionExitosa()
        {
            int idCajeraAEliminar = 15; // Reemplaza con el ID correcto a eliminar

            int result = CajeraServicios.DeleteCajera(idCajeraAEliminar);

            Assert.True(result > 0);
        }
    }
}