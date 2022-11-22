import React from "react"

import { useState } from "react"
import { useEvents } from "../hooks/useEvents"


const Events = () =>  {
    const {events} = useEvents()
    return (
        <h3>EVEEENTS</h3>

    )

}

export default Events