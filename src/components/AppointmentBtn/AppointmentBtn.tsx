'use client'

export const AppointmentBtn = () => {
    const onAppointment = () => {
        const el = document.getElementById('appointment')

        el?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <button onClick={onAppointment}
           className="px-8 py-4 bg-teal-500 text-white rounded inline-block mt-8 font-semibold">Book
            Appointment</button>
    )
}
