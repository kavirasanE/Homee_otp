import React,{useState ,useRef,useEffect} from 'react'
const ContactUsModal = ({setOpenContact}) => {
    const [loading, setLoading] = useState(false)

    const emailRef = useRef();
    const nameRef = useRef();
    const messageREf = useRef();
    useEffect(() => {
        emailjs.init("vjazUY8mUI25kTAFy"), [];
    })
    const handlesub = async () => {
        const serviceID = "service_auo3u9i";
        const templeteID = "template_paoef4c";
        try {
            setLoading(true);
            await emailjs.send(serviceID, templeteID, {
                name: nameRef.current.value,
                recipient: emailRef.current.value,
                message: messageREf.current.value
            });
            alert("email sent suceessfully")
        }
        catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
// User
// name: "kavirasan",
// from_name: "john",
// message: "heloo",
// reply_to: "aruputha manna",
// recipient: "onone",


     
  return (
    <>

    <div className='bg-white  z-10 mx-2 lg:mx-48 my-10  rounded-xl' >
    <p className='font-bold p-5 text-2xl flex justify-end px-10 cursor-pointer' onClick={() =>setOpenContact(false)}>X</p>
     <form class="max-w-sm  mx-auto py-5 px-2">
     <p className='font-bold text-lg py-2'>Contact US !!!</p>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email address" required />
                </div>
                <div class="mb-5">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                    <input type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter your Name'required />
                </div>
                <div class="mb-5">
                    <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                    <input type="tel" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter your Mobile Number'required />
                </div>
                <div class="mb-5">
                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Message</label>
                    <textarea type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter your message'required />
                </div>
                {/* <div class="flex items-start mb-5">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div> */}
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 
                focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
                 dark:focus:ring-blue-800" onClick={() => setOpenContact(false)}>Submit</button>
            </form>
    
    </div>
    </>
  )
}

export default ContactUsModal