import styles from "./PostDetail.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdby}>{post.createdBy}</p>
      <div className={styles.tags}>
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span> #</span>
            {tag}
          </p>
        ))}
      </div>
      <Link className="btn btn-outline" to={`/posts/${post.id}`}>
        Detalhes
      </Link>
    </div>
  );
};

export default PostDetail;

PostDetail.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    createdBy: PropTypes.string,
    tagsArray: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
  }),
};
