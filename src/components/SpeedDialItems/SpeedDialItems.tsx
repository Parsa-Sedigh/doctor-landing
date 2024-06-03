'use client'

import {SpeedDial, SpeedDialAction} from "@mui/material";
import {Add, MonitorWeight} from "@mui/icons-material";
import {BmiDialog} from "@/components/BmiDialog/BmiDialog";
import {MouseEvent, useState} from "react";

export const SpeedDialItems = () => {
    const [isBmiDialogOpen, setIsBmiDialogOpen] = useState(false)

    const actions = [
        {icon: <MonitorWeight/>, name: 'محاسبه BMI', action: 'bmi'}
    ];

    const onClose = () => {
        setIsBmiDialogOpen(false)
    }

    const onAction = (_: MouseEvent<HTMLDivElement>, op: string) => {
        if (op === 'bmi') {
            setIsBmiDialogOpen(true)
        }
    }

    return (
        <>
            <SpeedDial ariaLabel="actions" sx={{position: 'fixed', bottom: 16, right: 16}} icon={<Add/>}>
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={e => onAction(e, action.action)}
                    />
                ))}
            </SpeedDial>

            <BmiDialog isOpen={isBmiDialogOpen} onClose={onClose}/>
        </>
    )
}
