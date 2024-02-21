import rocketIcon from "./assets/rocket.svg";
import { LucidePlusCircle, Trash2 } from "lucide-react";

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
            type="text" 
            placeholder="Adicione uma nova tarefa" 
            className="bg-custom-gray-500 text-custom-gray-100 placeholder:text-custom-gray-300 text-base p-4 rounded-lg outline-none flex-1 border-solid border border-custom-gray-700 focus-visible:border-custom-purple-dark"
            />
          <button className="flex items-center bg-custom-blue-dark text-custom-gray-100 text-sm font-bold p-4 space-x-2 rounded-lg hover:bg-custom-blue hover:transition-colors outline-none focus-visible:outline-1 focus-visible:outline-offset-0 focus-visible:outline-custom-purple-dark">
            <span>Criar</span>
            <div>
              <LucidePlusCircle size={16}/>
            </div>
          </button>
        </form>

        <div>{/* Body */}

          <div className="flex justify-between"> {/* Informativo */}
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

          <div className="flex"> {/* Item */}
            <input type="checkbox" />
            <span className="text-custom-gray-300 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illum ipsam tenetur commodi eos esse rerum, veritatis laborum voluptatem eius eveniet quaerat quo dicta natus. Magni odio facilis nostrum neque.</span>
            <div>
              <Trash2 className="text-custom-gray-300" size={14}/>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
