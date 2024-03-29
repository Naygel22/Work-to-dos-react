import { useRef, useState } from "react"


export function Form() {
	const [workToDos, setWorkToDos] = useState<string[]>([])
	const inputText = useRef<HTMLInputElement>(null)

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault()

		const inputTextRef = inputText.current

		if (inputTextRef) {
			const inputTextRefValue = inputTextRef.value

			if (inputTextRefValue) {
				setWorkToDos((prev) => [...prev, inputTextRefValue])
				inputTextRef.value = ''
			}
		}
	}

  function handleDelete(workToDoToDelete: string) {
    setWorkToDos(prev => prev.filter(workToDo => workToDo !== workToDoToDelete));
}

	return (
		<form onSubmit={handleSubmit} style={{ width: '800px', margin: 'auto' }}>
			<div className="inputArea">
				<input type="text" ref={inputText} className="inputBar" placeholder="New item..."/>
				<button type="submit" className="pencil">
					<img src="src/assets/pencil.png" alt="" />
				</button>
			</div>

			<div>
				{workToDos.map((workToDo, index) => (
					<div key={index} className='answerItem'>
            <div className='answerText'>{workToDo}</div>
            <button className='deleteButton' onClick={() => handleDelete(workToDo)}>X</button>
            </div>
				))}
			</div>
		</form>
	)
}