// CSS
import styles from "./Home.module.css";

// Hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useAuthentication } from "../../hooks/useAuthentication";

// Components
import PostDetail from "../../components/PostDetail";

const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  const user = useAuthentication();

  return (
    <div className={styles.home}>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder="Busque por tags..."
          onChange={(ev) => setQuery(ev.target.value)}
        />{" "}
        <button className="btn">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}

        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts.</p>
            <Link to="/posts/create" className="btn">
              Criar meu primeiro post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
