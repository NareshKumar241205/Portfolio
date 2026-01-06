import '../style/landing.css';

function Landing() {
  return (
    <div className="landing">
      
      {/* LEFT BIG TEXT */}
      <div className="landing-left">
        <h1 className="landing-hi">
          HI<span className="accent">!</span>
        </h1>
        <div className="baseline" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="landing-right">
        <p className="landing-title">
          WELCOME TO MY PERSONAL WEBSITE.
        </p>

        <p className="landing-text">
          I HAVE CREATED THIS WEBSITE TO FEEL LIKE A GAME / SCI-FI INTERFACE.
          ALL TEXT INSIDE TRIES TO REFLECT THIS.
        </p>

        <p className="landing-text">
          YOU WILL FIND “ACHIEVEMENTS” OR “QUESTS” THAT SHOW THE PROGRESS
          IN MY PROFESSIONAL LIFE AND ARE RELATED TO WHAT I AM WORKING ON.
        </p>

        <button className="enter-btn">
          ENTER THE SYSTEM
        </button>
      </div>

    </div>
  );
}

export default Landing;
