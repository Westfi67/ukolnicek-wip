import './Item.css'

export interface ItemProps {
  title: string;
  description: string;
  done: boolean;
}

export type ItemData = ItemProps

export function Item({ title, description, done }: ItemProps) {
  return (
    <li className={done ? 'item item--done' : 'item'}>
      <p className="item__title"><strong>{title}</strong></p>
      <p className="item__description">{description}</p>
    </li>
  )
}
