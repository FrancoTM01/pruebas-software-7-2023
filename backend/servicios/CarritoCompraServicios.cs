using System.Data;
using backend.connection;
using backend.entidades;
using Dapper;

namespace backend.servicios
{
    public static class CarritoCompraServicios
    {
        public static IEnumerable<T> ObtenerTodo<T>()
        {
            const string sql = "select * from CARRITO_COMPRA";
            var parameters = new DynamicParameters();
            return BDManager.GetInstance.GetData<T>(sql);//Dapper
            //const string storedProcedureName = "GetAllCarritoCompra";
            //return BDManager.GetInstance.SPGetData<T>(storedProcedureName, parameters);
        }

        public static T ObtenerById<T>(int id)
        {
            const string sql = "select * from carrito_compra where ID = @Id and estado_registro = 1";
            //const string storedProcedureName = "GetCarritoCompraById";
            var parameter = new DynamicParameters();
            parameter.Add("id", id, DbType.Int64);
            var result = BDManager.GetInstance.GetDataWithParameters<T>(sql, parameter);
            //var result =  BDManager.GetInstance.SPGetDataWithParameters<T>(storedProcedureName, parameter);
            return result.FirstOrDefault();                      
        }

        public static int InsertCarritoCompra(CarritoCompra carritoCompra)
        {
            const string sql = "INSERT INTO [dbo].[CARRITO_COMPRA]([FECHA], [ID_USUARIO]) VALUES (@fecha, @id_usuario) ";
            //const string storedProcedureName = "AddCarritoCompra";
            var parameters = new DynamicParameters();
            parameters.Add("fecha", carritoCompra.Fecha, DbType.Date);
            parameters.Add("id_usuario", carritoCompra.IdUsuario, DbType.Int64);
            //var result = BDManager.GetInstance.SPSetData(storedProcedureName, parameters);
            var result = BDManager.GetInstance.SetData(sql, parameters);
            return result;
        }

        public static int UpdateCarritoCompra(CarritoCompra carritoCompra)
        {
            const string sql = "UPDATE [CARRITO_COMPRA] SET [FECHA] = @fecha, [ID_USUARIO] = @id_usuario WHERE [ID] = @id";
            //const string storedProcedureName = "UpdateCarritoCompra";
            var parameter = new DynamicParameters();
            parameter.Add("id", carritoCompra.Id, DbType.Int32);
            parameter.Add("fecha", carritoCompra.Fecha, DbType.DateTime);
            parameter.Add("id_usuario", carritoCompra.IdUsuario, DbType.Int32);
            var result = BDManager.GetInstance.SetData(sql, parameter);
            //var result = BDManager.GetInstance.SPSetData(storedProcedureName, parameter);
            return result;
        }

        public static int DeleteCarritoCompra(int id)
        {
            const string sql = "DELETE FROM [CARRITO_COMPRA] WHERE [ID] = @id";
            //const string storedProcedureName = "UpdateCarritoCompra";
            var parameter = new DynamicParameters();
            parameter.Add("id", id, DbType.Int32);
            var result = BDManager.GetInstance.SetData(sql, parameter);
            //var result = BDManager.GetInstance.SPSetData(storedProcedureName, parameter);
            return result;
        }

    }
}