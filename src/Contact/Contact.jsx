import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        {/* Left Section - Contact Details & Social Media */}
        <div className="bg-slate-100 rounded-md p-8">
          <h1 className="text-xl font-bold mb-5">Neem contact met ons op</h1>
          <p className="text-sm text-slate-400 mb-1">
            Wij staan klaar om u te helpen bij uw digitale uitdagingen. Samen creëren
          </p>
          <p className="text-sm text-slate-400 mb-5">
            we oplossingen die werken. Neem vandaag nog contact met ons op!
          </p>

          <h2 className="font-medium text-base mb-5">Contactgegevens</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center">
                <GrLocation className="mr-2" />
                <span className="font-medium">Address:</span>{" "}
                <span className="text-slate-500 ml-1">Younitech Hoofdkantoor</span>
              </div>
              <p className="ml-6 text-slate-500 text-sm">
                De Entree 201, 1101HG Amsterdam
              </p>
            </div>
            <div className="flex items-center">
              <FiPhone className="mr-2" />
              <span className="font-medium">Telefoon:</span>{" "}
              <span className="text-slate-500 ml-1">+31 (0)20 123 4567</span>
            </div>
            <div className="flex items-center">
              <MdOutlineMail className="mr-2" />
              <span className="font-medium">E-mail:</span>{" "}
              <span className="text-slate-500 ml-1">info@younitech.nl</span>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-3">Volg ons op sociale media</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaLinkedin className="mr-2" />
                <span className="font-medium">LinkedIn:</span>{" "}
                <span className="text-slate-500 ml-1">linkedin.com/younitech</span>
              </div>
              <div className="flex items-center">
                <AiFillInstagram className="mr-2" />
                <span className="font-medium">Instagram:</span>{" "}
                <span className="text-slate-500 ml-1">instagram.com/younitech</span>
              </div>
              <div className="flex items-center">
                <FaFacebook className="mr-2" />
                <span className="font-medium">Facebook:</span>{" "}
                <span className="text-slate-500 ml-1">facebook.com/younitech</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-slate-100 rounded-md p-8">
          <h1 className="text-xl font-bold mb-3">Heeft u een vraag?</h1>
          <p className="text-sm text-slate-400 mb-6">
            Vul ons contactformulier in op de website en wij nemen zo snel mogelijk
            contact met u op.
          </p>
          <form className="space-y-6">
            <div className="lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium" htmlFor="name">
                  Naam
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Voer uw naam in"
                  className="input input-bordered w-full bg-slate-100"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Voer uw e-mailadres in"
                  className="input input-bordered w-full bg-slate-100"
                />
              </div>
            </div>

            <div className="lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium" htmlFor="subject">
                  Onderwerp
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Geef context"
                  className="input input-bordered w-full bg-slate-100"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium" htmlFor="topic">
                  Onderwerp
                </label>
                <input
                  type="text"
                  id="topic"
                  placeholder="Selecteer Onderwerp"
                  className="input input-bordered w-full bg-slate-100"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium" htmlFor="message">
                Bericht
              </label>
              <textarea
                id="message"
                className="textarea textarea-bordered w-full h-36 bg-slate-100"
                placeholder="Schrijf hier uw vraag"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="btn btn-info w-full lg:w-1/3 text-sm text-white"
              >
                Verstuur Bericht
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
