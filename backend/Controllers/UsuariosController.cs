using backend.connection;
using backend.entidades;
using backend.servicios;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[EnableCors ("CorsDev")]
[ApiController]
[Route("api/[controller]")]


public class UsuariosController : ControllerBase
{
    /// <summary>
    /// Clase usuario controller
    /// </summary>
    private readonly IConfiguration _configuration;
    private readonly string? connectionString;


    /// <summary>
    /// Constructor usuarios
    /// </summary>
    /// <param name="configuration"></param>
    public UsuariosController(IConfiguration configuration)
    {
        _configuration = configuration;
        connectionString = _configuration["SqlConnectionString:DefaultConnection"];
        BDManager.GetInstance.ConnectionString = connectionString;
    }

    /// <summary>
    /// Obtener todo
    /// </summary>
    /// <returns></returns>

    [HttpGet]
    [Route("GetAllUsuarios")]
    public IActionResult GetAllUsuarios()
    {
        try
        {
            var result = UsuariosServicios.ObtenerTodo<Usuarios>();
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    /// <summary>
    /// Obtener un usuario por su id
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet]
    [Route("GetUsuariosById")]
    public IActionResult GetUsuariosById([FromQuery] int id)
    {
        try
        {
            var result = UsuariosServicios.ObtenerById<Usuarios>(id);
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    
    /// <summary>
    /// Insertar usuario nuevo
    /// </summary>
    /// <param name="usuarios"></param>
    /// <returns></returns>
    [HttpPost]
    [Route("AddUsuario")]
    public IActionResult AddUsuario(Usuarios usuarios)
    {
        try
        {
            var result = UsuariosServicios.InsertUsuario(usuarios);
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    /// <summary>
    /// Actualizar usuario insertado
    /// </summary>
    /// <param name="usuarios"></param>
    /// <returns></returns>
    [HttpPut]
    [Route("UpdateUsuario")]
    public IActionResult UpdateUsuario(Usuarios usuarios)
    {
        try
        {
            var result = UsuariosServicios.UpdateUsuarios(usuarios);
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    /// <summary>
    /// Eliminar usuario insertado por su id
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpDelete]
    [Route("DeleteUsuario")]
    public IActionResult DeleteUsuario([FromQuery]int id)
    {
        try
        {
            var result = UsuariosServicios.DeleteUsuarios(id);
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }
}