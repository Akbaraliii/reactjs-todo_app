import './Column.scss';
import Task from '../Task/Task';

const Column = () => {
  return (
    <>
      <div className='column'>
        <header>Brainstorm</header>
        <ul className='task-list'>
          <Task />
          <Task />
          <Task />
          <li className='task-item'>second</li>
          <li className='task-item'>third</li>
          <li className='task-item'>second</li>
          <li className='task-item'>1</li>
          <li>1</li>
          <li>second</li>
          <li>1</li>
          <li>1</li>
          <li>second</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>second</li>
          <li>1</li>
          <li>1</li>
        </ul>
        <footer>Add another card</footer>
      </div>
    </>
  );
};

export default Column;
