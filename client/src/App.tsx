import './App.css';
import { useFindManyPost } from './hooks';

function App() {
    const { data: posts } = useFindManyPost({
        where: { published: true },
        include: { author: true },
    });

    return (
        <>
            <h1>My Blob</h1>
            <ul>
                {posts?.map((post) => (
                    <div key={post.id} className="card">
                        <h2>{post.title}</h2>
                        <p>
                            {post.content} by {post.author?.email}
                        </p>
                    </div>
                ))}
            </ul>
        </>
    );
}

export default App;
