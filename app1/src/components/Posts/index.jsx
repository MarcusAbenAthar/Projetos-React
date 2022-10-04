import { PostCard } from "../PostCard";
import "./styles.css";

export const Posts = ({ posts }) => (
	<div className="posts">
		{posts.map((post) => (
			<PostCard
				// post={post} se eu quiser receber o objeto inteiro
				key={post.id}
				title={post.title}
				body={post.body}
				id={post.id}
				cover={post.cover}
			/>
		))}
	</div>
);
