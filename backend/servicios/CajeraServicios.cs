using System.Data;
using backend.connection;
using backend.entidades;
using Dapper;

namespace backend.servicios
{
    public static class CajeraServicios
    {
        public static IEnumerable<T> ObtenerTodo<T>()
        {
            const string sql = "SELECT TOP 5 * FROM CAJERA ORDER BY ID DESC";
            return BDManager.GetInstance.GetData<T>(sql);
        }

        public static T ObtenerPorId<T>(int id)
        {
            const string sql = "SELECT * FROM CAJERA WHERE ID = @Id AND ESTADO_REGISTRO = 1";

            var parameters = new DynamicParameters();
            parameters.Add("Id", id, DbType.Int32);

            var result = BDManager.GetInstance.GetDataWithParameters<T>(sql, parameters);

            return result.FirstOrDefault();
        }

        public static int InsertCajera(Cajera cajera)
        {
            const string sql = "INSERT INTO CAJERA (NOMBRE_COMPLETO, TURNO, NUMERO_CAJA) VALUES (@nombreCompleto, @turno, @numeroCaja)";

            var parameters = new DynamicParameters();
            parameters.Add("nombreCompleto", cajera.NombreCompleto, DbType.String);
            parameters.Add("turno", cajera.Turno, DbType.String);
            parameters.Add("numeroCaja", cajera.NumeroCaja, DbType.Int32);

            var result = BDManager.GetInstance.SetData(sql, parameters);
            return result;
        }

        public static int UpdateCajera(Cajera cajera)
        {
            const string sql = "UPDATE CAJERA SET NOMBRE_COMPLETO = @nombreCompleto, TURNO = @turno, NUMERO_CAJA = @numeroCaja WHERE ID = @id";

            var parameters = new DynamicParameters();
            parameters.Add("id", cajera.Id, DbType.Int32);
            parameters.Add("nombreCompleto", cajera.NombreCompleto, DbType.String);
            parameters.Add("turno", cajera.Turno, DbType.String);
            parameters.Add("numeroCaja", cajera.NumeroCaja, DbType.Int32);

            var result = BDManager.GetInstance.SetData(sql, parameters);
            return result;
        }

        public static int DeleteCajera(int id)
        {
            const string sql = "DELETE FROM CAJERA WHERE ID = @id";

            var parameters = new DynamicParameters();
            parameters.Add("id", id, DbType.Int32);

            var result = BDManager.GetInstance.SetData(sql, parameters);
            return result;
        }
    }
}