import './List.css'
import { Item } from './Item'
import type { ItemData } from './Item'

export interface ListProps {
  title: string
  items: ItemData[]
}

export function List({ title, items }: ListProps) {
  return (
    <section className="list">
      <h2>{title}</h2>

      {items.map((item) => (
        <Item
          key={item.title}
          title={item.title}
          description={item.description}
          done={item.done ?? false}
        />
      ))}

    </section>
  )
}
