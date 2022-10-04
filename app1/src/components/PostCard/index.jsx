import "./styles.css";

//Se eu quiser passar o objeto inteiro, no caso o post, uso dessa forma

// export const PostCard = ({ post }) => {
// 	return (
// 		<div className="post">
// 			<img src={post.cover} alt={post.title} />
// 			<div key={post.id}>
// 				<div className="post-content">
// 					<h1>{post.title}</h1>
// 					<p>{post.body}</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// senão

export const PostCard = ({ title, cover, body, id }) => (
	<div className="post">
		<img
			src={cover}
			alt={title}
		/>
		<div className="post-content">
			<h2>{title}</h2>
			<p>{body}</p>
		</div>
	</div>
);
