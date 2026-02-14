import "./bloggersignup.css";

const BloggerSignup = () => {
  return (
    <div className="signup-wrapper">
      <div className="signup-left">
        <h1>Where Creators Build Momentum & Grow!</h1>
        <p>
          Turn your platform into income by promoting music that deserves
          attention.
        </p>
      </div>

      <div className="signup-right">
        <h2>Create a Free Account</h2>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          <button type="submit">Create an Account</button>
        </form>
      </div>
    </div>
  );
};

export default BloggerSignup;
