
import './Form.css'

import { useState } from 'react'

export type FormData = {
    title: string;
    description: string;
}

export type FormProps = {
    onFormSubmit: (newTask: FormData) => void;
    title: string;
    description: string;
   

}

export function Form({ onFormSubmit}: FormProps) {

    const [formData, setFormData] = useState<FormData>({
        title: '',
        description: '',
    })

    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log('odesláno',formData)
        onFormSubmit(formData)
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> ) => {
        console.log('odesláno')
        
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
        
        console.log(formData)
        }
    

    return (
        <>
        <h2>formulář</h2>
        <form onSubmit={() => {onFormSubmit(title, description)}}>
            <div className="form">
                <label htmlFor="">Zadej název úkolu</label>
                <input onChange={handleChange} value={formData.title} type="text" name="title" />
                <label htmlFor="">Zadej popis úkolu</label>
                <textarea onChange={handleChange} value={formData.description} name="description" />
                <button type="submit">Přidat</button>
            </div>
        </form>
        </>
    )
}

