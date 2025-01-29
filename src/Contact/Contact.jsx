import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";



const Contact = () => {
    return (
        
        <div>
            {/** flex sm:grid-cols-1 justify-between items-center m-20 */}
            <div className="grid lg:grid-cols-2 gap-10 mr-20 ml-10 mb-10 mt-20 sm: grid-cols-1">

                <div className=" bg-slate-100 rounded-md">

                <div className="m-8">
                <h1 className="text-base font-bold text-left mb-5">Neem contact met ons op</h1>
                <p className="text-xs text-slate-400 text-left">Wij staan klaar om u te helpen bij uw digitale uitdagingen. Samen creëren </p>
                <p className="text-xs text-slate-400 text-left">we oplossingen die werken. Neem vandaag nog contact met ons op!</p>

                <h1 className="font-medium text-base text-left mt-5 mb-5">Contactgegevens</h1>

                <div className="">
                <div className="flex  items-center ">  
                <div className="mr-2  "> < GrLocation></GrLocation></div>
                <div className=" "><span className="font-medium">Addres: </span> <span className="text-slate-500">Younitech Hoofdkantoor </span></div>
                </div>
                <p className="ml-12 text-slate-500">De Entree 201, 1101HG Amsterdam</p>
                </div>

                <div className="flex  items-center mt-4">
                <div className="mr-2"> < FiPhone ></FiPhone ></div>
                <div className=""><span className="font-medium">Telefoon:</span> <span className="text-slate-500">+31 (0)20 123 4567</span> </div>
                </div>

                <div className="flex  items-center mt-4"> 
                <div className="mr-2"> < MdOutlineMail ></MdOutlineMail ></div>
                <div className=""><span className="font-medium">E-mail:</span> <span className="text-slate-500">info@younitech.nl</span> </div>
                </div>

                </div>

                <div className="m-8">
                <h1 className="text-base font-bold text-left mt-16 mb-3">Volg ons op sociale media</h1>

                <div className="flex  items-center mt-2"> 
                <div className="mr-2"> < FaLinkedin ></FaLinkedin ></div>
                <div className=""><span className="font-medium">LinkedIn:</span> <span className="text-slate-500">linkedin.com/younitech</span> </div>
                </div>



                <div className="flex  items-center mt-2"> 
                <div className="mr-2"> < AiFillInstagram></AiFillInstagram ></div>
                <div className=""><span className="font-medium">Instagram:</span> <span className="text-slate-500">instagram.com/younitech</span> </div>
                </div>


                <div className="flex  items-center mt-2"> 
                <div className="mr-2"> <FaFacebook ></FaFacebook></div>
                <div className=""><span className="font-medium">Facebook:</span> <span className="text-slate-500">facebook.com/younitech</span> </div>
                </div>

                </div>

                </div>




                <div className=" bg-slate-100 rounded-md ">

                    <div className=" m-8">
                    <h1 className="font-medium">Heeft u een vraag?</h1>
                    <p className="text-xs text-slate-400">Vul ons contactformulier in op de website en wij nemen zo snel mogelijk contact met u op.</p>

                <div className="lg:flex justify-between items-center">
                    <div className="">
                    <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Naam</span>
                            </div>
                            <input  type="text" placeholder="Voer uw naam in" className="input input-bordered w-full max-w-xs  bg-slate-100" />
                            
                            </label>
                    </div>

                    <div className="">
                    <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input type="text" placeholder="Voer uw e-mailadres in" className="input input-bordered w-full max-w-xs  bg-slate-100" />
                            
                            </label>
                    </div>

                    
                </div>


                <div className="">

                    <div className="lg:flex justify-between items-center">
                    <div className="">
                    <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Onderwerp</span>
                            </div>
                            <input type="text" placeholder="Geef context" className="input input-bordered w-full max-w-xs  bg-slate-100" />
                            
                            </label>
                    </div>

                    <div className="">
                    <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Onderwerp</span>
                            </div>
                            <input type="text" placeholder="Selecteer Onderwerp" className="input input-bordered w-full max-w-xs  bg-slate-100" />
                            
                            </label>
                </div>


                </div>

                </div>

                <label className="form-control">
                <div className="label">
                <span className="label-text">Bericht</span>
                </div>
                <textarea className="textarea textarea-bordered h-36 bg-slate-100" placeholder="Schrijf hier uw vraag"></textarea>
                </label>
                <div className="flex  justify-start mt-5"><button className="btn sm:btn-sm lg:btn-md sm:text-xs text-slate-100 btn-info lg:w-1/3 sm:2/3 ">Verstuur Bericht</button></div>

    </div>
</div>



   </div>

 </div>
    );
};

export default Contact;