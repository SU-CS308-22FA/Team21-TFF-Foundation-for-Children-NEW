import React from "react"

import { useState } from "react"
import { useEvents } from "../hooks/useEvents"


const Events = () =>  {
    const {events} = useEvents()
    return (
        <h3>ALL EVENTS</h3>

    )

}

export default Events