import React from 'react'
import HeroImg from '../components/HeroImg'
import Form from '../components/Form'

const Contact = () => {
    return (
        <div>
            <>
                <HeroImg
                    heading="Kapcsolat"
                    text="Vedd fel velünk a kapcsolatot."
                />
                <Form/>
            </>
        </div>
    )
}

export default Contact
