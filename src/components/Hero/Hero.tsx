import {AppointmentBtn} from "@/components/AppointmentBtn/AppointmentBtn";
import {ServiceThumbnail} from "@/components/ServiceThumbnail/ServiceThumbnail";

export const Hero = () => {

    return (
        <div className="bg-gray-100 mb-[200px]">
            <section className="cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-20 flex
      items-center min-h-screen">
                <div className="h-full absolute top-0 right-0 z-0">
                    <img src="images/cover-bg.jpg" alt="" className="w-full h-full object-cover opacity-20"/>
                </div>

                <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16" id="appintment">
                    <div>
                        <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">دکتر رضا
                            پارسایی</h1>

                        <ul className="mt-12 list-disc text-white">
                            <li>دکترای پزشکی دانشگاه علوم پزشکی تهران</li>
                            <li>بورد تخصصی جراحی عمومی دانشگاه علوم پزشکی تهران</li>
                            <li>فلوشیپ جراحی درون بین( لاپاراسکوپیک) دانشگاه علوم پزشکی تهران</li>
                            <li>عضو جامعه جراحان ایران</li>
                            <li>عضو انجمن جراحان درون بین ایران</li>
                        </ul>

                        <AppointmentBtn/>
                    </div>

                    <div className="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
                        <div className="md:w-1/2 lg:w-1/4">
                            <ServiceThumbnail imgPath="/surgery.png"
                                              link="/surgery"
                                              title="جراحی اسلیوگاسترکتومی"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}
