using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/hello")]
public class HelloController : ControllerBase
{
    // GET: api/hello
    [HttpGet]
    public string GetHello()
    {
        return "Hello from the Controller!";
    }

    // GET: api/hello/time
    [HttpGet("time")]
    public string GetTime()
    {
        return $"Current Time: {DateTime.Now}";
    }

    // GET: api/hello/random
    [HttpGet("random")]
    public int GetRandomNumber()
    {
        var random = new Random();
        return random.Next(1, 100);
    }

    // GET: api/hello/greet?name=John
    [HttpGet("greet")]
    public string Greet([FromQuery] string name)
    {
        return $"Hello, {name}!";
    }
}
