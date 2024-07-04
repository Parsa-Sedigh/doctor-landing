import {Button, Dialog} from "@mui/material";
import {calculateBMI, calculateHealthyWeightRange, getBMICategory} from "@/service/bmi";
import {Body} from "@/types";

type BmiResultDialogProps = {
    isOpen: boolean
    onClose: () => void
    body: Body
    onRetry: () => void
}

export const BmiResultDialog = ({isOpen, onClose, body, onRetry}: BmiResultDialogProps) => {
    const weightHealthyRange = calculateHealthyWeightRange(body.height)
    const bmi = calculateBMI(body.weight, body.height)
    const bmiCategory = getBMICategory(bmi, body.age, body.gender)

    const healthyWeight = (weightHealthyRange[0] + weightHealthyRange[1]) / 2

    return (
        <Dialog open={isOpen} onClose={onClose}
                classes={{paper: "result w-full lg:w-[480px] md:w-[480px] sm:w-[480px] bg-white p-[4px] m-auto rounded-0 lg:rounded-[23px] md:rounded-[23px] sm:rounded-[23px] h-full lg:h-auto md:h-auto sm:h-auto cursor-auto transition-transform"}}>
            <div className="rounded-[20px] overflow-hidden h-[98px]">
                <div
                    className="h-full w-[140%] mr-[-20%] rounded-br-[50%] rounded-bl-[50%] bg-purple-500 flex justify-around items-center pb-1 gap-18">
                    <div>
                        {body.weight} کیلوگرم
                    </div>

                    <div>
                        {body.height} سانتی متر
                    </div>
                </div>
            </div>

            <div
                className="border-[4px] border-[#fff] bg-blue-300 w-[155px] h-[155px] rounded-full m-auto pt-3 relative
                -mt-[60px] text-center transition-all duration-500 ease-in-out top-0 flex flex-col gap-[2px] justify-evenly">
                <div><span className="text-[17px] block text-Black font-regular">BMI</span><span
                    className="text-[13px] block text-Black font-regular">توده بدنی شما</span></div>
                <span className="text-anim-bmi font-black block text-[40px] text-Primery" id="bmi-person">{bmi}</span>
            </div>

            <div
                className="w-full lg:h-[70px] lg:p-0 py-[15px] px-[15px] border-dashed border-[1.8px] border-[#e5e5e5] rounded-[16px] text-center relative flex flex-col items-center justify-center">
                <div className="absolute -top-3 left-[calc(50%_-_16px)]">
                    <svg className="bg-[#fff]" width="31" height="20" viewBox="0 0 23 20" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.1625 0.00125333C17.9301 0.00125333 19.5989 0.781451 21.1235 2.32179C22.7423 3.95613 23.5059
                            7.48363 21.2545 10.4008H16.599L15.8834 9.37866C15.7274 9.1562 15.3403 9.1562 15.1843 9.37866L13.9539
                            11.1358L12.1448 6.65706C12.0784 6.49287 11.9032 6.38697 11.7216 6.40201C11.5366 6.41454 11.3825 6.54175
                            11.3424 6.71408L9.93161 12.7564L7.93233 8.63231C7.8711 8.50697 7.74602 8.41924 7.60185 8.40295C7.45571
                            8.38227 7.31351 8.4418 7.22267 8.54959L5.66774 10.3995L1.42099 10.4001C-0.858736 7.46044 -0.0819313
                            3.93733 1.55726 2.31741C3.13523 0.758264 4.75664 0 6.51499 0C8.48333 0 10.2667 1.13301 11.3318 3.00924C12.3983
                            1.13301 14.1863 0.00125333 16.1625 0.00125333ZM16.3745 11.2004C16.2343 11.2004 16.1033 11.1333 16.0249
                            11.0224L15.5345 10.3218L14.2034 12.2225C14.1165 12.3472 13.9644 12.4142 13.8077 12.3979C13.6517 12.3816
                            13.5181 12.2833 13.4621 12.1441L11.8611 8.18236L10.4826 14.0874C10.4438 14.2547 10.2963 14.3801 10.1173
                            14.3982C10.1021 14.4001 10.0876 14.4008 10.0725 14.4008C9.91055 14.4008 9.76045 14.3105 9.69067
                             14.1683L7.45439 9.55601L6.19834 11.0506C6.11868 11.1452 5.99821 11.2004 5.8705 11.2004H2.13262C2.17146
                             11.2386 2.20372 11.2781 2.24322 11.3157C3.78498 12.7689 10.9586 19.807 11.031 19.8784C11.11 19.9561 11.2186 20 11.3325 20C11.4464 20 11.555 19.9561 11.634 19.8791C11.7064 19.8076 18.8932 12.7695 20.4356 11.3163C20.4758 11.2787 20.508 11.2386 20.5469 11.201H16.3758L16.3745 11.2004Z"
                            fill="url(#paint0_linear_14_140)"></path>
                        <defs>
                            <linearGradient id="paint0_linear_14_140" x1="-3" y1="-4.5" x2="23" y2="25"
                                            gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF5151"></stop>
                                <stop offset="1" stop-color="#FF8E8E"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div><span className="text-[21px] font-medium text-[#565656] m-0 p-0">گـــــزارش مـیـــــزان اضـــافـــه وزن شمــا</span>
                </div>
            </div>

            <div className="my-7">
                <div className="grid gap-[20px] grid-cols-2">
                    <div className="h-[102px] p-[12px] border border-[#F1F1F1] rounded-[15px]"><span
                        className="text-[14px] block w-full text-center font-normal leading-1 mt-[4px] m-0">وزن شما</span>
                        <div
                            className="w-full h-[44px] flex items-center justify-center rounded-[10px] bg-[#e3e3e33f] mt-[10px]">
                            <div
                                className="flex justify-center items-center text-[19px] text-center leading-1 font-medium"
                                // style="color: rgb(146, 125, 252);"
                            ><span
                                className="w-fit m-0 font-bold text-[21px]">{body.weight}</span><span
                                className="text-[13px] pt-[3px] mr-1 m-0">کیلوگرم</span></div>
                        </div>
                    </div>
                    <div className="h-[102px] p-[12px] border border-[#F1F1F1] rounded-[15px]"><span
                        className="text-[14px] block w-full text-center font-normal leading-1 mt-[4px] m-0">وضعیت بدنی شما</span>
                        <div
                            className="w-full h-[44px] flex items-center justify-center rounded-[10px] bg-[#e3e3e33f] mt-[10px]">
                            <div
                                className="flex justify-center items-center text-[19px] text-center leading-1 font-medium"
                                // style="color: rgb(0, 155, 200);"
                            ><span className="w-fit m-0 font-bold text-[15px]">وزن معمولی</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-[102px] p-[12px] border border-[#F1F1F1] rounded-[15px]"><span
                        className="text-[14px] block w-full text-center font-normal leading-1 mt-[4px] m-0">وزن مناسب شما</span>
                        <div
                            className="w-full h-[44px] flex items-center justify-center rounded-[10px] bg-[#e3e3e33f] mt-[10px]">
                            <div
                                className="flex justify-center items-center text-[19px] text-center leading-1 font-medium"
                                // style="color: rgb(0, 183, 172);"
                            ><span
                                className="w-fit m-0 font-bold text-[21px]">{healthyWeight}</span><span
                                className="text-[13px] pt-[3px] mr-1 m-0">کیلوگرم</span></div>
                        </div>
                    </div>
                    <div className="h-[102px] p-[12px] border border-[#F1F1F1] rounded-[15px]"><span
                        className="text-[14px] block w-full text-center font-normal leading-1 mt-[4px] m-0">میزان اضافه وزن</span>
                        <div
                            className="w-full h-[44px] flex items-center justify-center rounded-[10px] bg-[#e3e3e33f] mt-[10px]">
                            <div
                                className="flex justify-center items-center text-[19px] text-center leading-1 font-medium"
                                // style="color: rgb(255, 0, 84);"
                            ><span
                                className="w-fit m-0 font-bold text-[21px]">{Math.abs(healthyWeight - body.weight)}</span><span
                                className="text-[13px] pt-[3px] mr-1 m-0">کیلوگرم</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="flex flex-col-reverse sm:flex-row lg:flex-row md:flex-row justify-center items-center gap-4 mb-4">
                <Button onClick={onRetry}>محاسبه مجدد</Button>
                <Button>دریافت مشاوره</Button>
            </div>
        </Dialog>
    )
}
