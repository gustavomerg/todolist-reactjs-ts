import rocketIcon from "./assets/rocket.svg";
import { LucidePlusCircle, Trash2, Check, LucideClipboardX } from "lucide-react";
import { TodoItem, TodoItemType } from "./components/TodoItem";
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent, useState } from "react";
import clipboardIcon from "./assets/clipboard.svg"



/* const todoItems: TodoItemType[] = [
  {
    key: uuidv4(),
    checked: false,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illum ipsam tenetur commodi eos esse rerum, veritatis laborum voluptatem eius eveniet quaerat quo dicta natus. Magni odio facilis nostrum neque.',
  },
  {
    key: uuidv4(),
    checked: false,
    content: 'Estudar ReacrJS até codar de olhos fechados.',
  },
  {
    key: uuidv4(),
    checked: true,
    content: 'Tomar café até desenvolver de ponta cabeça.',
  },
] */

/* console.log('Todos os itens: ' + JSON.stringify(todoItems)) */

function App() {

  const [todoItems, setTodoItems] = useState<TodoItemType[]>(() => {

    const todoItemsOnStorage = localStorage.getItem('todoItems')

    if (todoItemsOnStorage) {
      return JSON.parse(todoItemsOnStorage)
    }

    return []
  })

  const [content, setContent] = useState('')

  function handleContentChanged (event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value)
  }

  function handleSaveTodoItem (event: FormEvent) {
    event.preventDefault()

    if (content == '') {
      return
    }

    const newTodoItem: TodoItemType = {
      key: uuidv4(),
      checked: false,
      content
    }

    const todoItemsArray = [newTodoItem, ...todoItems]

    setTodoItems(todoItemsArray)

    localStorage.setItem('todoItems', JSON.stringify(todoItemsArray))

    setContent('')
    
  }

  function onTodoItemCheck (key: string) {
/*     const todoItemsArray = todoItems.filter(item => {
      if (item.key == key) {
        item.checked = !item.checked
      }
      return true
    }) */

    /* Desta forma se mantém imutável */

    const todoItemsArray = todoItems.map(item => {
      if (item.key == key) {
        return {
          ...item,
          checked: !item.checked
        }
      }
      return item
    })

    setTodoItems(todoItemsArray)

    localStorage.setItem('todoItems', JSON.stringify(todoItemsArray))

  }

  function onTodoItemDeleted (key: string) {
    const todoItemsArray = todoItems.filter(item => {
      return item.key !== key
    })

    setTodoItems(todoItemsArray)

    localStorage.setItem('todoItems', JSON.stringify(todoItemsArray))

  }

  const todoItemsCount = todoItems.length;

  const todoItemsCheckedCount = todoItems.filter(item => item.checked).length;

  return (
    <div>
      <header className="bg-custom-gray-700 h-48 flex justify-center">
        <div className="flex items-center gap-3">
          <img className="pt-2.5 pb-0.5" src={rocketIcon} />
          <h1 className="font-bold text-title">
            <span className="text-custom-blue">to</span>
            <span className="text-custom-purple-dark">do</span>
          </h1>
        </div>
      </header>

      <div className="flex items-center flex-col max-w-5xl mx-auto px-5">{/* corpo */}
        <form action="" className="w-full flex gap-2 mt-[-1.8rem] mb-16">
          <input 
            alt="Campo para adicionar nova tarefa"
            type="text" 
            placeholder="Adicione uma nova tarefa" 
            className="bg-custom-gray-500 text-custom-gray-100 placeholder:text-custom-gray-300 text-base p-4 rounded-lg outline-none flex-1 border-solid border border-custom-gray-700 focus-visible:border-custom-purple-dark"
            onChange={handleContentChanged}
            value={content}
            />
          <button 
            className="flex items-center bg-custom-blue-dark text-custom-gray-100 text-sm font-bold p-[15px] space-x-2 rounded-lg hover:bg-custom-blue hover:transition-colors duration-75 outline-none focus-visible:outline-[1.5px] focus-visible:outline-custom-purple-dark"
            onClick={handleSaveTodoItem}
          >
            <span>Criar</span>
            <div>
              <LucidePlusCircle size={16}/>
            </div>
          </button>
        </form>

        <div className="w-full">{/* Body */}

          <div className="flex justify-between mb-6"> {/* Informativo */}
            <span className="flex items-center gap-[8px]">
              <strong className="text-sm font-bold text-custom-blue">Tarefas criadas</strong>
              <span 
              className="text-xs font-bold text-custom-gray-200 px-[8px] py-[2px] bg-custom-gray-400 rounded-full">
                {todoItemsCount}
              </span>
            </span>

            <span className="flex items-center gap-[8px]">
            <strong className="text-sm font-bold text-custom-purple">Concluídas</strong>
              <span 
              className="text-xs font-bold text-custom-gray-200 px-[8px] py-[2px] bg-custom-gray-400 rounded-full">
                {todoItemsCount > 0 
                ?
                `${todoItemsCheckedCount} de ${todoItemsCount}`
                :
                todoItemsCount
                }
                
              </span>
            </span>
          </div>

          <div className="flex flex-col gap-3 mb-6"> {/* Lista de ToDo */}
            {todoItemsCount > 0 
            ?             
            todoItems.map(item => {
              return (
                <TodoItem key={item.key} item={item} onTodoItemCheck={onTodoItemCheck} onTodoItemDeleted={onTodoItemDeleted} />
              )
            }) 
            : 
            <div className="flex flex-col items-center gap-4 border-t-[1.5px] border-t-custom-gray-400 rounded-t-lg">
              <img className="mt-16" src={clipboardIcon} />
              <div className="text-custom-gray-300 text-base">
                <p><strong className="text-custom-gray-300">Você ainda não tem tarefas cadastradas</strong></p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
              
            </div>
            }


          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
