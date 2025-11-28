import './App.css'
import { List } from './components/List'
import type { ItemData } from './components/Item'
import type { FormData } from './components/Form'
import { Form } from './components/Form'
import { useState } from 'react'

const tasksData: ItemData[] = [
  {
    title: 'Příprava prezentace',
    description: 'Vytvořit prezentaci pro páteční meeting s klientem.',
    done: true,
  },
  {
    title: 'Kontrola e-mailů',
    description: 'Projít doručenou poštu a odpovědět na důležité zprávy.',
    done: false,
  },
  {
    title: 'Plánování kampaně',
    description: 'Naplánovat marketingovou kampaň na příští měsíc.',
    done: false,
  },
  {
    title: 'Testování aplikace',
    description: 'Otestovat nové funkce a nahlásit případné chyby.',
    done: false,
  },
]

function App() {

  const [tasks, setTasks] = useState<ItemData[]>(tasksData)

  const handleFormSubmit = (newTask: FormData) => {
    setTasks([
      {
        ...newTask,
        done: false
      },
      ...tasks,
    ]
    )
  }



  return (
    <>
      <h1>Úkolníček</h1>
      <Form onFormSubmit={handleFormSubmit}/>
      <List title="Úkoly" items={tasks} />
    </>
  )
}

export default App
