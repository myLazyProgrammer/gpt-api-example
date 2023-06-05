import './App.css'
import { Button } from '@douyinfe/semi-ui'
import { useRemeshDomain, useRemeshQuery, useRemeshSend } from 'remesh-react'
import { CountDomain } from './domain/countDown';

function App() {
  const send = useRemeshSend();
  const countDomain = useRemeshDomain(CountDomain());
  const count = useRemeshQuery(countDomain.query.CountQuery());
  
  const handleIncrement = () => {
    send(countDomain.command.IncreaseCountCommand());
  }

  const handleDecrement = () => {
    send(countDomain.command.DecreaseCountCommand());
  }

  const handleStartIncrement = () => {
    send(countDomain.command.StartCommand('increment'));
  }

  const handleStartDecrement = () => {
    send(countDomain.command.StartCommand('decrement'));
  }

  const handleStop = () => {
    send(countDomain.command.StopCommand())
  }


  return (
    <div className='tw-h-full'>
      <h1>
        {count}
      </h1>
     <div className="tw-flex">
        <Button onClick={handleStartIncrement}>
          start increment
        </Button>
        <Button onClick={handleIncrement}>
          +1
        </Button>
        <Button onClick={handleStop}>
          stop
        </Button>
        <Button onClick={handleDecrement}>
          -1
        </Button>
        <Button onClick={handleStartDecrement}>
          start decrease
        </Button>
     </div>
    </div>
  )
}

export default App
