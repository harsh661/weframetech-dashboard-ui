import Header from "@/components/header/Header"
import { todoData, todos } from "@/constant/todoData"
import Todo from "@/components/todos/Todo"
import TodoWrapper from "@/components/todos/TodoWrapper"

export default function Home() {
  return (
    <section className="py-5 px-10">
      <Header />
      <div className="flex pt-7 gap-10">
        {todoData.map((item, index) => {
          return (
            <TodoWrapper key={item.title + index} title={item.title}>
              {item.todos.length ? (
                <>
                  {item.todos.map((todo: todos) => (
                    <Todo key={todo.id} {...todo} />
                  ))}
                </>
              ) : (
                <div className="p-5 bg-dark-blue rounded-lg">
                  <div className="bg-dark-alt text-main-text py-3 text-center rounded-lg border-2 border-dashed border-main-text">
                    Move card here
                  </div>
                </div>
              )}
            </TodoWrapper>
          )
        })}
      </div>
    </section>
  )
}
