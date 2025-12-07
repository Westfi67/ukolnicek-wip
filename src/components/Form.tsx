
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log('odesláno',formData)
        onFormSubmit(formData)
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> ) => {
        // console.log('odesláno')
        
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
        
        console.log(formData)
        }
    

    return (
        <>
        <h2>formulář</h2>
        <form onSubmit={handleSubmit}>
            <div className="form">
                <label htmlFor="title">Zadej název úkolu</label>
                <input
                    type="text" 
                    id='title'
                    name="title" 
                    className='form_field' 
                    value={formData.title} 
                    onChange={handleChange} 
                />
                <label htmlFor="description">Zadej popis úkolu</label>
                <textarea 
                    id='description'
                    name="description" 
                    rows={3}
                    className='form_field' 
                    value={formData.description} 
                    onChange={handleChange} 
                />

                <button type="submit">Přidat</button>
            </div>
        </form>
        </>
    )
}

