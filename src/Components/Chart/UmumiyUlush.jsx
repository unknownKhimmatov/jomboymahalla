import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import { dataUmumiyulush } from '../Chart/Data'

const COLORS = ['green', 'red', 'blue'];


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default function UmumiyUlush() {

    return (
        <div className="umumiy-ulush">
            <div className="top-title-diagramma">
                <h3>
                    Statistika
                </h3>
                <select>
                    <option value="">2023</option>
                    <option value="">2024</option>
                    <option value="">2025</option>
                </select>
            </div>
            <ResponsiveContainer width="100%" aspect={1}>
                <PieChart>
                    <Pie
                        data={dataUmumiyulush}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {dataUmumiyulush.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="bottom-information-diagramma">
                <ul>
                    <li>
                        <div></div>  Umumiy erkaklar soni: 50%
                    </li>

                    <li>
                        <span></span>    Umumiy ayollar soni: 38%
                    </li>

                    <li>
                        <p></p>  Umumiy bolalar soni: 12%
                    </li>
                </ul>
            </div>
        </div>
    );

}
