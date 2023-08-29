using System.Data;
using backend.connection;
using backend.entidades;
using Dapper;

namespace backend.servicios
{
    public static class PagoDeMateriaServicios
    {
        public static IEnumerable<T> ObtenerTodo<T>()
        {
            const string sql = "SELECT TOP 5 * FROM PAGO_DE_MATERIA ORDER BY ID DESC";
            return BDManager.GetInstance.GetData<T>(sql);
        }

        public static T ObtenerPorId<T>(int id)
        {
            const string sql = "SELECT * FROM PAGO_DE_MATERIA WHERE ID = @Id AND ESTADO_REGISTRO = 1";

            var parameters = new DynamicParameters();
            parameters.Add("Id", id, DbType.Int32);

            var result = BDManager.GetInstance.GetDataWithParameters<T>(sql, parameters);

            return result.FirstOrDefault();
        }

        public static int InsertPagoDeMateria(PagoDeMateria pago)
        {
            const string sql = "INSERT INTO PAGO_DE_MATERIA (ID_CAJERA, ID_USUARIO, FECHA_PAGO, MONTO, MATERIA) VALUES (@idCajera, @idUsuario, @fechaPago, @monto, @materia)";

            var parameters = new DynamicParameters();
            parameters.Add("idCajera", pago.IdCajera, DbType.Int32);
            parameters.Add("idUsuario", pago.IdUsuario, DbType.Int32);
            parameters.Add("fechaPago", pago.FechaPago, DbType.DateTime);
            parameters.Add("monto", pago.Monto, DbType.Decimal);
            parameters.Add("materia", pago.Materia, DbType.String);

            var result = BDManager.GetInstance.SetData(sql, parameters);
            return result;
        }

        public static int UpdatePagoDeMateria(PagoDeMateria pago)
        {
            const string sql = "UPDATE PAGO_DE_MATERIA SET ID_CAJERA = @idCajera, ID_USUARIO = @idUsuario, FECHA_PAGO = @fechaPago, MONTO = @monto, MATERIA = @materia WHERE ID = @id";

            var parameters = new DynamicParameters();
            parameters.Add("id", pago.Id, DbType.Int32);
            parameters.Add("idCajera", pago.IdCajera, DbType.Int32);
            parameters.Add("idUsuario", pago.IdUsuario, DbType.Int32);
            parameters.Add("fechaPago", pago.FechaPago, DbType.DateTime);
            parameters.Add("monto", pago.Monto, DbType.Decimal);
            parameters.Add("materia", pago.Materia, DbType.String);

            var result = BDManager.GetInstance.SetData(sql, parameters);
            return result;
        }

        public static int DeletePagoDeMateria(int id)
        {
            const string sql = "DELETE FROM PAGO_DE_MATERIA WHERE ID = @id";

            var parameters = new DynamicParameters();
            parameters.Add("id", id, DbType.Int32);

            var result = BDManager.GetInstance.SetData(sql, parameters);
            return result;
        }
    }
}