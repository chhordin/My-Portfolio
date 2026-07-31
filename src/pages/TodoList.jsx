import { useState, useEffect } from "react";
import FadeIn from "../components/FadeIn";

export const TodoList = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("portfolio_tasks");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse tasks", e);
      }
    }
    return [
      { id: 1, text: "Build Vue 3 Dynamic Components", completed: true, category: "Vue" },
      { id: 2, text: "Optimize REST API Endpoints with Axios", completed: false, category: "API" },
      { id: 3, text: "Design Responsive UI with Tailwind CSS", completed: false, category: "UI" },
    ];
  });

  const [input, setInput] = useState("");
  const [category, setCategory] = useState("Vue");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("portfolio_tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
      category: category,
    };

    setTasks([newTask, ...tasks]);
    setInput("");
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <section className="py-16 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
              <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Interactive Todo List
              </span>
            </h2>
            <p className="text-blue-600 max-w-md mx-auto text-sm sm:text-base font-medium">
              A real-time state management demo featuring local storage persistence, category tagging, and status filtering.
            </p>
            <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-4" />
          </div>
        </FadeIn>

        {/* Todo Card Wrapper */}
        <FadeIn delay={0.15}>
          <div className="border border-blue-200/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl">
            
            {/* Input Form */}
            <FadeIn delay={0.25}>
              <form onSubmit={handleAddTask} className="flex flex-col sm:flex-row gap-3 mb-6">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Add a new task or feature..."
                  className="flex-1 px-4 py-3 rounded-2xl bg-white border border-blue-200 text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 text-sm transition-all"
                />
                
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="px-4 py-3 rounded-2xl bg-white border border-blue-200 text-blue-800 text-sm focus:outline-none focus:border-blue-500 cursor-pointer font-medium"
                >
                  <option value="Vue">Vue</option>
                  <option value="React">React</option>
                  <option value="API">API</option>
                  <option value="UI">UI</option>
                </select>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-2xl font-semibold text-white bg-linear-to-r from-purple-500 to-pink-500 hover:opacity-90 shadow-lg shadow-purple-500/20 active:scale-95 transition-all text-sm flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Add Task
                </button>
              </form>
            </FadeIn>

            {/* Filter Tabs & Stats */}
            <FadeIn delay={0.35}>
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-blue-200/60">
                <div className="flex gap-2">
                  {["all", "active", "completed"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setFilter(tab)}
                      className={`px-4 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all cursor-pointer ${
                        filter === tab
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                          : "text-blue-700 hover:text-blue-900 bg-white border border-blue-200 hover:bg-blue-100"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="text-xs text-blue-700 font-semibold">
                  Completed: <span className="text-blue-900 font-bold">{completedCount}</span> / {tasks.length}
                </div>
              </div>
            </FadeIn>

            {/* Task Items List */}
            <div className="space-y-3 min-h-45">
              {filteredTasks.length === 0 ? (
                <FadeIn delay={0.4}>
                  <div className="text-center py-12 text-blue-400 text-sm font-medium">
                    No tasks found. Add a new one to get started!
                  </div>
                </FadeIn>
              ) : (
                filteredTasks.map((task, index) => (
                  <FadeIn key={task.id} delay={0.4 + index * 0.08}>
                    <div
                      className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-200 ${
                        task.completed
                          ? "bg-blue-100/50 border-blue-200/60 opacity-75"
                          : "bg-white border-blue-200 shadow-sm hover:border-blue-400"
                      }`}
                    >
                      <div className="flex items-center gap-3.5 flex-1 min-w-0 mr-3">
                        <button
                          onClick={() => handleToggleTask(task.id)}
                          className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all cursor-pointer ${
                            task.completed
                              ? "bg-blue-600 border-transparent text-white"
                              : "border-blue-300 hover:border-blue-500 bg-blue-50"
                          }`}
                        >
                          {task.completed && (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </button>

                        <span
                          className={`text-sm truncate font-medium ${
                            task.completed ? "line-through text-blue-400" : "text-blue-900"
                          }`}
                        >
                          {task.text}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-1 text-[10px] font-bold bg-blue-100 text-blue-700 border border-blue-300 rounded-lg uppercase tracking-wider">
                          {task.category}
                        </span>

                        <button
                          onClick={() => handleDeleteTask(task.id)}
                          className="text-blue-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                          aria-label="Delete Task"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </FadeIn>
                ))
              )}
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
};