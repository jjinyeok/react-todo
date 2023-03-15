import React from "react";

export default function Form({todoData, setTodoData, value, setValue}) {

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        // form 안에 input을 전송할 때 페이지 리로드 되는 것을 막아줌
        e.preventDefault();

        let newTodo = {
            id: todoData.length + 1,
            title: value,
            completed: false,
        }

        setTodoData([...todoData, newTodo]);
        localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo]));
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit} className="flex pt-2">
            <input 
                type="text"
                name="value"
                className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
                placeholder="해야 할 일을 입력하세요."
                value={value}
                onChange={handleChange}
            />
            <input className="p-2 text-blue-400 border-2 border-blue rounded hover:text-white hover:bg-blue-200"
                type="submit" value="입력"/>
        </form>
    )
}
