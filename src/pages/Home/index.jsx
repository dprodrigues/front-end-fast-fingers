import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Link to="login">Login</Link>
            <Link to="register">Register</Link>
        </>
    );
};

export default Home;
