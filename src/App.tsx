function App() {
  return (
    <main>
      <form>
        <header>
          <h1>Welcome</h1>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu
            ad litora torquent.Quem num gosta di mim que vai caçá sua turmis!
            Quem manda na minha terra sou euzis!Nec orci ornare consequat.
            Praesent lacinia ultrices consectetur. Sed non ipsum felis.
          </p>
        </header>
        <h2>Login</h2>
        <div>
          <input type="text" id="email" placeholder="Username" />
          <input type="text" id="pass" placeholder="******" />
        </div>
        <button>Login</button>
        <div>
          <div>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <a href="https://betrybe.com">Esqueci minha senha</a>
        </div>
      </form>
    </main>
  );
}

export default App;
