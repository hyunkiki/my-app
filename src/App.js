function Header(props) {
  console.log(props); //const props = {title:"리액트(React)"}
  return (
    <header>
      <h1>logo</h1>
      <Nav />
    </header>
  );
}
function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">HTML</a>
        </li>
        <li>
          <a href="/">CSS</a>
        </li>
        <li>
          <a href="/">JS</a>
        </li>
      </ul>
    </nav>
  );
}
function Article() {
  return (
    <article>
      <h1>타이틀1</h1>
      <p>Hello, React</p>
    </article>
  );
}

export function App() {
  return (
    <div className="root">
      <Header title="리액트(React)" />
      <Nav />
      <Article />
      <Article />
      <Article />
    </div>
  );
}

// 내보내기(App을 기본으로 내보내기)
export default App;
