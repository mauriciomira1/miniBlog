// CSS
import styles from "./Register.module.css";

// Hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassord, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (password !== confirmPassord) {
      setError("As senhas não coincidem. Tente novamente.");
      return;
    }

    const response = await createUser(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.registerPage}>
      <form onSubmit={handleSubmit}>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e compartilhe seus melhores momentos.</p>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            value={displayName}
            onChange={(ev) => setDisplayName(ev.target.value)}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            autoComplete="off"
          />
        </label>
        <label>
          <span>Confirme a senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Senha"
            value={confirmPassord}
            onChange={(ev) => setConfirmPassword(ev.target.value)}
            autoComplete="off"
          />
        </label>
        {!loading && <button className="btn">Cadastrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
