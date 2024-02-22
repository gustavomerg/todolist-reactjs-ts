import { Trash2 } from "lucide-react";

export interface TodoItemType {
  key: string;
  checked: boolean;
  content: string;
}

export function TodoItem ({item}:TodoItemType) {
  {console.log('teste: ' + item.checked)}
  return (
    <div className="flex bg-custom-gray-500 border border-custom-gray-400 p-4 gap-3 rounded-[8px]"> {/* Item */}
      <div>
        <button type="button" className="w-[17.45px] h-[17.45px] rounded-full border-[2px] flex justify-center items-center m-[3.27px] border-custom-blue hover:border-custom-blue-dark hover:bg-custom-blue-dark/20 outline-none focus-visible:outline-[1.5px] focus-visible:outline-custom-purple-dark" />
      </div>
      <span className="text-custom-gray-100 text-sm">{}Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illum ipsam tenetur commodi eos esse rerum, veritatis laborum voluptatem eius eveniet quaerat quo dicta natus. Magni odio facilis nostrum neque.</span>
      <button className="w-max h-max outline-none focus-visible:outline-[1.5px] focus-visible:rounded-[4px] focus-visible:outline-custom-purple-dark">
        <Trash2 className="text-custom-gray-300 box-content p-[5px] hover:text-custom-danger hover:bg-custom-gray-400 rounded-[4px]" size={14}/>
      </button>
    </div>
  )
}