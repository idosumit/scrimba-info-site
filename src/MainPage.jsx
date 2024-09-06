// import reactBgSvg from "./assets/react-background.svg";

function MainPage() {
  return (
    <main>
      <h1 className="main--title">Fun Facts about React</h1>
      <ul className="main--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      {/* style={{ backgroundImage: `url(${reactBgSvg})` }} */}
    </main>
  );
}

export default MainPage;
