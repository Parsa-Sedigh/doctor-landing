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
import {FormEvent, useState} from "react";
import {Face, Height, MonitorWeight} from "@mui/icons-material";

type BmiDialogProps = {
    isOpen: boolean
    onClose: () => void
}

export const BmiDialog = ({isOpen, onClose}: BmiDialogProps) => {
    const [gender, setGender] = useState<'m' | 'f'>('m')
    const [weight, setWeight] = useState<number | null>(null)
    const [age, setAge] = useState<number | null>(null)
    const [height, setHeight] = useState<number | null>(null)
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
        console.log('e: ', e, weight)

        if (!!weight) {
            setErrors(prev => ({...prev, weight: []}))
        }

        if (!!age) {
            setErrors(prev => ({...prev, age: []}))
        }

        if (!!height) {
            setErrors(prev => ({...prev, height: []}))
        }

        let bmi: number

        if (!weight) {
            setErrors(prev => ({...prev, weight: ['weight err']}))
        }

        if (!age) {
            setErrors(prev => ({...prev, age: ['age err']}))
        }

        if (!height) {
            setErrors(prev => ({...prev, height: ['height err']}))
        }

        if (!!errors.weight.length || !!errors.age.length || !!errors.height.length ||
            !weight || !age || !height) {
            return
        }


        if (gender === 'm') {
            bmi = weight / (height ^ 2);
        } else {
            bmi = 10 * (weight + 6.25) * (height - 5) * (age - 161);
        }

        if (bmi < 18.5) {
            console.log('too thin')
        } else if (bmi > 18.5 && bmi < 25) {
            console.log('healthy')
        } else {
            console.log('too fat')
        }

        console.log('BMI: ', bmi)
    }

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>محاسبه توده بدنی</DialogTitle>

            <DialogContent>
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <FormControl>
                        <RadioGroup
                            value={gender}
                            onChange={e => setGender(e.target.value as 'm' | 'f')}
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
                            value={weight}
                            error={!!errors.weight.length}
                            onChange={(e) => setWeight(Number(e.target.value))}
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
                            value={age}
                            error={!!errors.age.length}
                            onChange={(e) => setAge(Number(e.target.value))}
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
                            value={height}
                            error={!!errors.height.length}
                            onChange={(e) => setHeight(Number(e.target.value))}
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
