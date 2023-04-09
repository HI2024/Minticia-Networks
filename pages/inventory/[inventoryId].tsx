import React from 'react'
import Header from '../../components/Header'
import InventoryPage from '../../components/InventoryPage'

const style = {
    wrapper: `relative`,
}

const Inventory = () => {

    return (
        <>
            <div className={style.wrapper}>
                <title>Minticia | Inventory</title>
                <Header />
                <InventoryPage />
            </div>
        </>
    )
}

export default Inventory
