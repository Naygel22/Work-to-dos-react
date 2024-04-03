import { useState } from "react"


export function Form() {
	const [workToDos, setWorkToDos] = useState<string[]>([])
	const [newItemValue, setNewItemValue] = useState<string>('')

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		setWorkToDos((prev) => [...prev, newItemValue])
		setNewItemValue('')

	}

	function handleDelete(workToDoToDelete: string) {
		setWorkToDos(prev => prev.filter(workToDo => workToDo !== workToDoToDelete));
	}


	console.log(workToDos)

	return (
		<form onSubmit={handleSubmit} style={{ width: '800px', margin: 'auto' }}>
			<div className="inputArea">
				<input type="text" value={newItemValue} onChange={e => setNewItemValue(e.target.value)} className="inputBar" placeholder="New item..." />
				<button type="submit" className="pencil">
					<img src="src/assets/pencil.png" alt="" />
				</button>
			</div>

			<div>
				{workToDos.map((workToDo, index) => (
					<div key={index} className='answerItem'>
						<div className='answerText'>{workToDo}</div>
						<button type="button" className='deleteButton' onClick={() => handleDelete(workToDo)}>X</button>
					</div>
				))}
			</div>
		</form>
	)
}