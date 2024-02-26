import { Check, Trash2 } from "lucide-react";

export interface TodoItemType {
  key: string;
  checked: boolean;
  content: string;
}

interface TodoItemProps {
  item: TodoItemType;
  onTodoItemCheck: (key: string) => void;
  onTodoItemDeleted: (key: string) => void;
}

export function TodoItem ({item, onTodoItemCheck, onTodoItemDeleted}:TodoItemProps) {

  function handleCheckTodoItem () {
    onTodoItemCheck(item.key)
  }

  function handleDeleteTodoItem () {
    onTodoItemDeleted(item.key)
  }

  return (
    <div className="flex bg-custom-gray-500 border border-custom-gray-400 p-4 gap-3 rounded-[8px]"> {/* Item */}
      <div>
        <button 
          type="button" 
          className={`w-[17.45px] h-[17.45px] rounded-full border-[2px] flex justify-center items-center m-[3.27px] ${item.checked ? 'border-custom-purple-dark bg-custom-purple-dark hover:bg-custom-purple hover:border-custom-purple transition-colors duration-75 outline-none focus-visible:outline-[1.5px] focus-visible:outline-custom-purple-dark' : 'border-custom-blue hover:border-custom-blue-dark hover:bg-custom-blue-dark/20 outline-none focus-visible:outline-[1.5px] focus-visible:outline-custom-purple-dark' } `} 
          onClick={handleCheckTodoItem}
        >
          {item.checked ? <Check size={10} className="text-custom-gray-100 stroke-[3]"/> : ''}
        </button>
      </div>
      <span className={`text-sm ${item.checked ? 'line-through text-custom-gray-300' : 'text-custom-gray-100'}`}>
        {item.content}
      </span>
      <button 
        className="w-max h-max outline-none focus-visible:outline-[1.5px] focus-visible:rounded-[4px] focus-visible:outline-custom-purple-dark ml-auto"
        onClick={handleDeleteTodoItem}
      >
        <Trash2 className="text-custom-gray-300 box-content p-[5px] hover:text-custom-danger hover:bg-custom-gray-400 rounded-[4px]" size={14}/>
      </button>
    </div>
  )
}