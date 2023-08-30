namespace backend.entidades
{

/// <summary>
/// Usuarios
/// </summary>
public class Usuarios : Common
{


/// <summary>
/// id de usuario
/// </summary>
 public int Id {get; set;}
/// <summary>
/// Nombre completo de usuario
/// </summary>
 public string? NombreCompleto {get; set;}
/// <summary>
/// Nombre de usuario
/// </summary>
 public string? UserName {get; set;}
/// <summary>
/// Contraseña de usuario
/// </summary>
 public string? Password {get; set;}
}
}