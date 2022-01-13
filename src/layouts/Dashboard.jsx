import React from 'react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <Categories></Categories>
                    </GridColumn>
                    <GridColumn width={12}>
                        <Routes>
                            <Route exact path="/" element={<ProductList />} />
                            <Route exact path="/products" element={<ProductList />} />
                            <Route path="/products/:name" element={<ProductDetail />} />
                            <Route path="/cart" element={<CartDetail />} />

                        </Routes>



                    </GridColumn>
                </GridRow>
            </Grid>



        </div>
    )
}
