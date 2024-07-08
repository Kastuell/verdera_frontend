"use client"

import { useState } from "react"
import CatalogNavbar from "./CatalogNavbar"

interface ICatalogWrapper {
}

export default function CatalogWrapper(props: ICatalogWrapper) {

    const { } = props

    const [selected, setSelected] = useState("Курсы")

    return (
        <>
            <CatalogNavbar selected={selected} setSelected={setSelected} />

        </>
    )
}