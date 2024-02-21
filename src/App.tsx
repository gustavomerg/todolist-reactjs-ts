import rocketIcon from "./assets/rocket.svg";
import { LucidePlusCircle } from "lucide-react";

function App() {
  return (
    <div>
      <header className="bg-custom-gray-700 h-48 flex justify-center items-center">
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
            className="bg-custom-gray-500 text-custom-gray-300 text-base p-4 rounded-lg outline-none w-full border-solid border border-custom-gray-700"
            />
          <button className="flex items-center bg-custom-blue-dark text-custom-gray-100 text-sm font-bold p-4 space-x-2 rounded-lg">
            <span>Criar</span>
            <LucidePlusCircle size={16}/>
          </button>
        </form>

        <div>{/* Body */}

          <div> {/* Informativo */}
            <span>
              <strong>Tarefas criadas</strong>
              <span>5</span>
            </span>

            <strong>Concluídas</strong>
            <span>2 de 5</span>
          </div>

          <div> {/* Item */}
            <input type="checkbox" />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illum ipsam tenetur commodi eos esse rerum, veritatis laborum voluptatem eius eveniet quaerat quo dicta natus. Magni odio facilis nostrum neque.</span>
            <span>lixeira</span>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
