import { useState } from 'react'

export default function Taskform({ addTask }) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const [category, setCategory] = useState('general');
  const [showHint, setShowHint] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      setShowHint(true);
      return;
    }
    addTask({ text: task, priority, category, completed: false });

    // Reset only if task is added
    setTask('');
    setPriority('medium');
    setCategory('general');
    setShowHint(false);
  };

  return (
    <form onSubmit={handlesubmit} className='task-form'>
      <div id="inp">
        <input
          type="text"
          placeholder="Enter the task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
            if (showHint && e.target.value.trim()) setShowHint(false);
          }}
        />
        <button type="submit">Add Task</button>
        {showHint && <span className="hint">Please enter a task name!</span>}
      </div>

      <div id="btns">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
      </div>
    </form>
  );
}