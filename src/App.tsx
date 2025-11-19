import './App.css'
import { List } from './components/List'
import type { ItemData } from './components/Item'

const tasks: ItemData[] = [
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
  return (
    <>
      <h1>Úkolníček</h1>
      <List title="Úkoly" items={tasks} />
    </>
  )
}

export default App
