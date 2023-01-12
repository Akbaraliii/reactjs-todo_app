function App() {
  return (
    <div className='todo-master'>
      <nav className='navbar app'>App bar</nav>
      <nav className='navbar board'> Board bar</nav>
      <div className='board-columns'>
        <header>Brainstorm</header>
        <ul>
          <li>
            <img
              src='https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png'
              alt=''
            />
          </li>
          <li>second</li>
        </ul>
        <footer>Add another card</footer>
      </div>
    </div>
  );
}

export default App;
