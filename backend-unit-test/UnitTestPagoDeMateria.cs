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
    public class UnitTestPagoDeMateria
    {
        public UnitTestPagoDeMateria()
        {
            BDManager.GetInstance.ConnectionString = "workstation id=UniversidadCumbre.mssql.somee.com;packet size=4096;user id=FrancoTapiaM_SQLLogin_3;pwd=jtgmvharja;data source=UniversidadCumbre.mssql.somee.com;persist security info=False;initial catalog=UniversidadCumbre";
        }

        [Fact]
        public void PagoDeMateria_Get_Verificar_NotNull()
        {
            var result = PagoDeMateriaServicios.ObtenerTodo<PagoDeMateria>();
            Assert.NotNull(result);
        }

        [Fact]
        public void PagoDeMateria_GetById_VerificarItem()
        {
            // Cambiar el valor del ID a uno que existe en la base de datos
            int idExistente = 15;

            var result = PagoDeMateriaServicios.ObtenerPorId<PagoDeMateria>(idExistente);

            Assert.NotNull(result);
            Assert.Equal(idExistente, result.Id);
        }

        [Fact]
        public void PagoDeMateria_Insertar()
        {
            PagoDeMateria pagoTemp = new()
            {
                IdCajera = 1,
                IdUsuario = 1,
                FechaPago = DateTime.Now,
                Monto = 100.0M,
                Materia = "Materia Test"
            };

            var result = PagoDeMateriaServicios.InsertPagoDeMateria(pagoTemp);
            Assert.True(result > 0);
        }

        [Fact]
        public void PagoDeMateria_Actualizar()
        {
            var pago = new PagoDeMateria
            {
                // Reemplaza los datos del ID a actualizar
                Id = 11,
                IdCajera = 1,
                IdUsuario = 45,
                FechaPago = DateTime.Now,
                Monto = 2500.0M,
                Materia = "Materia Test Actualizada"
            };

            int result = PagoDeMateriaServicios.UpdatePagoDeMateria(pago);
            Assert.True(result > 0);
        }

        [Fact]
        public void PagoDeMateria_Eliminar_EliminacionExitosa()
        {
            int idPagoAEliminar = 19; // Reemplaza con el ID correcto a eliminar

            int result = PagoDeMateriaServicios.DeletePagoDeMateria(idPagoAEliminar);

            Assert.True(result > 0);
        }
    }
}