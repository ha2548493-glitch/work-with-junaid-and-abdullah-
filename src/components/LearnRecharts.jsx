import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const LearnRecharts = () => {
    const Details = [
        {
            name:"HTML",
            students:290,
            fee:3000
        },
            {
            name:"CSS",
            students:400,
            fee:4000
        },
            {
            name:"JAVASCRIPT",
            students:600,
            fee:3500
        },
            {
            name:"REACT",
            students:500,
            fee:2500
        }
    ]
  return (
    <div>
        <h1>
            RECARTS
        </h1>
        <ResponsiveContainer width="100%" aspect={3}>
            <LineChart dataKey={Details}>
                <CartesianGrid/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Line/>
                <Line/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default LearnRecharts ;