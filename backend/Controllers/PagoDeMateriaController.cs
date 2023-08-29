using backend.connection;
using backend.entidades;
using backend.servicios;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [EnableCors("CorsDev")]
    [ApiController]
    [Route("api/[controller]")]
    public class PagoDeMateriaController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly string? connectionString;

        public PagoDeMateriaController(IConfiguration configuration)
        {
            _configuration = configuration;
            connectionString = _configuration["SqlConnectionString:DefaultConnection"];
            BDManager.GetInstance.ConnectionString = connectionString;
        }

        [HttpGet]
        [Route("GetAllPagosDeMateria")]
        public IActionResult GetAllPagosDeMateria()
        {
            try
            {
                var result = PagoDeMateriaServicios.ObtenerTodo<PagoDeMateria>();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        [Route("GetPagoDeMateriaById")]
        public IActionResult GetPagoDeMateriaById([FromQuery] int id)
        {
            try
            {
                var result = PagoDeMateriaServicios.ObtenerPorId<PagoDeMateria>(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        [Route("AddPagoDeMateria")]
        public IActionResult AddPagoDeMateria(PagoDeMateria pago)
        {
            try
            {
                var result = PagoDeMateriaServicios.InsertPagoDeMateria(pago);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        [Route("UpdatePagoDeMateria")]
        public IActionResult UpdatePagoDeMateria(PagoDeMateria pago)
        {
            try
            {
                var result = PagoDeMateriaServicios.UpdatePagoDeMateria(pago);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete]
        [Route("DeletePagoDeMateria")]
        public IActionResult DeletePagoDeMateria([FromQuery] int id)
        {
            try
            {
                var result = PagoDeMateriaServicios.DeletePagoDeMateria(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}