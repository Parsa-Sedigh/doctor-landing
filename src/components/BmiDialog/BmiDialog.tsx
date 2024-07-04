import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    FormControl,
    FormControlLabel,
    InputAdornment,
    Radio,
    RadioGroup,
    TextField
} from "@mui/material";
import {Dispatch, FormEvent, SetStateAction, useState} from "react";
import {Face, Height, MonitorWeight} from "@mui/icons-material";
import {Body} from "@/types";

type BmiDialogProps = {
    isOpen: boolean
    onClose: () => void
    body: Body
    setBody: Dispatch<SetStateAction<Body>>
    onSuccessSubmit: () => void
}

export const BmiDialog = ({isOpen, onClose, body, setBody, onSuccessSubmit}: BmiDialogProps) => {

    const [errors, setErrors] = useState({
        weight: [] as string[],
        age: [] as string[],
        height: [] as string[]
    })

    const handleClose = () => {
        onClose()
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('e: ', e, body.weight)

        if (!!body.weight) {
            setErrors(prev => ({...prev, weight: []}))
        }

        if (!!body.age) {
            setErrors(prev => ({...prev, age: []}))
        }

        if (!!body.height) {
            setErrors(prev => ({...prev, height: []}))
        }

        if (!body.weight) {
            setErrors(prev => ({...prev, weight: ['weight err']}))
        }

        if (!body.age) {
            setErrors(prev => ({...prev, age: ['age err']}))
        }

        if (!body.height) {
            setErrors(prev => ({...prev, height: ['height err']}))
        }

        onSuccessSubmit()
    }

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>محاسبه توده بدنی</DialogTitle>

            <DialogContent>
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <FormControl>
                        <RadioGroup
                            value={body.gender}
                            onChange={e => setBody(prev => ({...prev, gender: e.target.value as 'm' | 'f'}))}
                            aria-labelledby="calculate-bmi"
                            defaultValue="male"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="m" control={<Radio/>} label="آقا"/>
                            <FormControlLabel value="f" control={<Radio/>} label="خانم"/>
                        </RadioGroup>
                    </FormControl>

                    <FormControl>
                        <TextField
                            type="number"
                            value={body.weight ? body.weight : ''}
                            error={!!errors.weight.length}
                            onChange={(e) => setBody(prev => ({...prev, weight: Number(e.target.value)}))}
                            label="وزن"
                            inputProps={{
                                min: 1,
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MonitorWeight/>
                                    </InputAdornment>
                                )
                            }}/>
                    </FormControl>

                    <FormControl>
                        <TextField
                            type="number"
                            value={body.age ? body.age : ''}
                            error={!!errors.age.length}
                            onChange={(e) => setBody(prev => ({...prev, age: Number(e.target.value)}))}
                            label="سن"
                            inputProps={{
                                min: 0,
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Face/>
                                    </InputAdornment>
                                )
                            }}/>
                    </FormControl>

                    <FormControl>
                        <TextField
                            type="number"
                            value={body.height ? body.height : ''}
                            error={!!errors.height.length}
                            onChange={(e) => setBody(prev => ({...prev, height: Number(e.target.value)}))}
                            label="قد"
                            inputProps={{
                                min: 1,
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Height/>
                                    </InputAdornment>
                                )
                            }}/>
                    </FormControl>

                    <Button type="submit" variant="contained">محاسبه توده بدنی من</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
