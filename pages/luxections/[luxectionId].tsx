import React from 'react'
import Header from '../../components/Header'
import LuxectionsPage from '../../components/LuxectionsPage'

const style = {
    wrapper: `relative`,
}

const Luxections = () => {

    return (
        <>
            <div className={style.wrapper}>
                <title>Minticia | Luxections</title>
                <Header />
                <LuxectionsPage />
            </div>
        </>
    )
}

export default Luxections
