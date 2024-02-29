import {AppointmentBtn} from "@/components/AppointmentBtn/AppointmentBtn";

export const Hero = () => {

    return (
        <div className="bg-gray-100">
            <section className="cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
      items-center min-h-screen">
                <div className="h-full absolute top-0 right-0 z-0">
                    <img src="images/cover-bg.jpg" alt="" className="w-full h-full object-cover opacity-20"/>
                </div>

                <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16" id="appintment">
                    <div>
                        <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">A better life
                            starts with a
                            beautiful
                            smile.</h1>
                        <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">Welcome to the Dentist Office of
                            Dr. Thomas
                            Dooley,
                            where
                            trust
                            and comfort are priorities.</p>
                        <AppointmentBtn />
                    </div>
                </div>
            </section>
        </div>
    )

}
