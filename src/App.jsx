import { useState } from 'react'
import './App.scss'


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // сохранение токена или перенаправление на другую страницу
      } else {
        const error = await response.text();
        throw new Error(error);

        // неправильный пароль например
      }
    } catch (error) {
      console.error(error);
      // обработка ошибок
    }
  };


  return (
    <div className="form__container">
      <h2 className="form__title">Log In</h2>
      <form className="form" onSubmit={handleSubmit}>
          <label className="form__label copy" htmlFor="email">Email</label>
          <input
            className="form__input copy"
            type="email"
            id="email"
            placeholder='martian'
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
      

          <label className="form__label copy" htmlFor="password">Password</label>
          <input
            className="form__input copy"
            type="password"
            id="password"
            placeholder='qwerty'
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className='form__link'>
            <a className='copy' href="#">Forgot password?</a>
          </div>
          

      <button className="form__button" type="submit">Log In</button>
    </form>
  </div>
  )
}

export default App


