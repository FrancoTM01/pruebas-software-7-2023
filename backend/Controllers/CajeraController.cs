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
    public class CajeraController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly string? connectionString;

        public CajeraController(IConfiguration configuration)
        {
            _configuration = configuration;
            connectionString = _configuration["SqlConnectionString:DefaultConnection"];
            BDManager.GetInstance.ConnectionString = connectionString;
        }

        [HttpGet]
        [Route("GetAllCajeras")]
        public IActionResult GetAllCajeras()
        {
            try
            {
                var result = CajeraServicios.ObtenerTodo<Cajera>();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        [Route("GetCajeraById")]
        public IActionResult GetCajeraById([FromQuery] int id)
        {
            try
            {
                var result = CajeraServicios.ObtenerPorId<Cajera>(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        [Route("AddCajera")]
        public IActionResult AddCajera(Cajera cajera)
        {
            try
            {
                var result = CajeraServicios.InsertCajera(cajera);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        [Route("UpdateCajera")]
        public IActionResult UpdateCajera(Cajera cajera)
        {
            try
            {
                var result = CajeraServicios.UpdateCajera(cajera);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete]
        [Route("DeleteCajera")]
        public IActionResult DeleteCajera([FromQuery] int id)
        {
            try
            {
                var result = CajeraServicios.DeleteCajera(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}