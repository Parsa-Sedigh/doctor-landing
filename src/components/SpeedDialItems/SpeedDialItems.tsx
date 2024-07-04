'use client'

import {SpeedDial, SpeedDialAction} from "@mui/material";
import {Add, MonitorWeight} from "@mui/icons-material";
import {BmiDialog} from "@/components/BmiDialog/BmiDialog";
import {MouseEvent, useState} from "react";
import {BmiResultDialog} from "@/components/BmiResultDialog/BmiResultDialog";
import {Body} from "@/types";

export const SpeedDialItems = () => {
    const [isBmiDialogOpen, setIsBmiDialogOpen] = useState(false)
    const [isBmiResultDialogOpen, setIsBmiResultDialogOpen] = useState(false)
    const [body, setBody] = useState<Body>({gender: 'm', weight: 0, height: 0, age: 0})

    const actions = [
        {icon: <MonitorWeight/>, name: 'محاسبه BMI', action: 'bmi'}
    ];

    const onCloseBmi = () => {
        setIsBmiDialogOpen(false)
    }

    const onCloseBmiResult = () => {
        setIsBmiDialogOpen(false)
    }

    const onAction = (_: MouseEvent<HTMLDivElement>, op: string) => {
        if (op === 'bmi') {
            setIsBmiDialogOpen(true)
        }
    }

    const onRetry = () => {
        setIsBmiResultDialogOpen(false)
        setIsBmiDialogOpen(true)
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

            <BmiDialog isOpen={isBmiDialogOpen} onClose={onCloseBmi} body={body} setBody={setBody}
                       onSuccessSubmit={() => setIsBmiResultDialogOpen(true)}/>

            <BmiResultDialog isOpen={isBmiResultDialogOpen}
                             onClose={onCloseBmiResult}
                             body={body}
                             onRetry={onRetry}/>
        </>
    )
}
