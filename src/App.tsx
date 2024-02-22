import rocketIcon from "./assets/rocket.svg";
import { LucidePlusCircle, Trash2, Check } from "lucide-react";
import { TodoItem, TodoItemType } from "./components/TodoItem";
import { v4 as uuidv4 } from 'uuid';

const todoItems: TodoItemType[] = [
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
]

console.log('Todos os itens: ' + JSON.stringify(todoItems))

function App() {
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
            />
          <button 
            className="flex items-center bg-custom-blue-dark text-custom-gray-100 text-sm font-bold p-[15px] space-x-2 rounded-lg hover:bg-custom-blue hover:transition-colors duration-75 outline-none focus-visible:outline-[1.5px] focus-visible:outline-custom-purple-dark"
          >
            <span>Criar</span>
            <div>
              <LucidePlusCircle size={16}/>
            </div>
          </button>
        </form>

        <div>{/* Body */}

          <div className="flex justify-between mb-6"> {/* Informativo */}
            <span className="flex items-center gap-[8px]">
              <strong className="text-sm font-bold text-custom-blue">Tarefas criadas</strong>
              <span 
              className="text-xs font-bold text-custom-gray-200 px-[8px] py-[2px] bg-custom-gray-400 rounded-full">
                5
              </span>
            </span>

            <span className="flex items-center gap-[8px]">
            <strong className="text-sm font-bold text-custom-purple">Concluídas</strong>
              <span 
              className="text-xs font-bold text-custom-gray-200 px-[8px] py-[2px] bg-custom-gray-400 rounded-full">
                2 de 5
              </span>
            </span>
          </div>

          <div className="flex flex-col gap-3"> {/* Lista de ToDo */}

            {todoItems.map(item => {
              console.log(item)
              return (
                <TodoItem key={item.key} item={item} />
              )
            })}
            {/* <TodoItem /> */}

            <div className="flex bg-custom-gray-500 border border-custom-gray-400 p-4 gap-3 rounded-[8px]"> {/* Item */}
              <div>
                
                <button type="button" className="w-[17.45px] h-[17.45px] rounded-full border-[2px] flex justify-center items-center m-[3.27px] border-custom-purple-dark bg-custom-purple-dark hover:bg-custom-purple hover:border-custom-purple transition-colors duration-75 outline-none focus-visible:outline-[1.5px] focus-visible:outline-custom-purple-dark" >
                  <Check size={10} className="text-custom-gray-100 stroke-[3]"/>
                </button>
              </div>
              <span className="text-custom-gray-300 text-sm line-through">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illum ipsam tenetur commodi eos esse rerum, veritatis laborum voluptatem eius eveniet quaerat quo dicta natus. Magni odio facilis nostrum neque.</span>
              <button className="w-max h-max outline-none focus-visible:outline-[1.5px] focus-visible:rounded-[4px] focus-visible:outline-custom-purple-dark">
                <Trash2 className="text-custom-gray-300 box-content p-[5px] hover:text-custom-danger hover:bg-custom-gray-400 rounded-[4px]" size={14}/>
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
