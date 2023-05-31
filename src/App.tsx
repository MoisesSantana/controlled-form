import { useState } from 'react';

const EMAIL_REGEX = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;

function App() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const emailIsValid = EMAIL_REGEX.test(email);
  const passIsValid = pass.length > 6;
  const isActive = emailIsValid && passIsValid;
  console.log(isActive);
  return (
    <main>
      <header>
        <h1>Welcome</h1>
        <p>
          Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu
          ad litora torquent.Quem num gosta di mim que vai caçá sua turmis!
          Quem manda na minha terra sou euzis!Nec orci ornare consequat.
          Praesent lacinia ultrices consectetur. Sed non ipsum felis.
        </p>
      </header>
      <form>
        <img src="/logo.jpg" alt="lorem ipsum company" className="logo" />
        <div className="input-container">
          <img src="/user.svg" alt="user" />
          <input
            type="text"
            id="email"
            placeholder="Username"
            value={ email }
            onChange={ (
              e: React.ChangeEvent<HTMLInputElement>,
            ) => setEmail(e.target.value) }
          />
        </div>
        <div className="input-container">
          <img src="/pass.svg" alt="password" />
          <input
            type="password"
            id="pass"
            placeholder="******"
            value={ pass }
            onChange={ (
              e: React.ChangeEvent<HTMLInputElement>,
            ) => setPass(e.target.value) }
          />
        </div>
        <button disabled={ !isActive }>Login</button>
        <footer>
          <div>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <a href="https://betrybe.com">Forget password</a>
        </footer>
      </form>
    </main>
  );
}

export default App;
