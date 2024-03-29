
import { Form } from './components/Form'
import './index.css'

type textProps = {
	classText: string
	text: string
}

const texts = [
	{
		classText: 'title',
		text: 'WORK TO-DOS'
	},
	{
		classText: 'firstText',
		text: 'Enter text into the input field to add items to your list.'
	},
	{
		classText: 'secondText',
		text: 'Click the item to mark it as complete.'
	},
	{
		classText: 'thirdText',
		text: "Click the 'X' to remove the item from your list."
	}
]

function Text({ classText, text }: textProps) {
	return <p className={classText}>{text}</p>
}


export function App() {
	return (
		<>
			<div className="app">
				{texts.map((el, index) => (
					<Text key={index} classText={el.classText} text={el.text} />
				))}
			</div>
			<div>
				<Form />
			</div>
		</>
	)
}