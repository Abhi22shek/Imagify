import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {


  return (
    <motion.div
      className="flex flex-col items-center justify-center my-32"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >


      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-text-primary">
        How it works
      </h1>
      <p className="text-lg text-text-secondary mb-8">
        Transform Words Into Stunning Images
      </p>

      <div className="space-y-6 w-full max-w-3xl text-sm" >
        {stepsData.map((item, index) => (
          <div key={index} className="flex items-center gap-4 p-5 px-8 bg-primary rounded-lg shadow-md border border-secondary cursor-pointer hover:scale-[1.02] transition-all duration-300" >
            <img width={40} src={item.icon} alt="" />
            <div>
              <h2 className="text-xl font-semibold text-text-primary">{item.title}</h2>
              <p className="text-text-secondary font-light">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps


// const Steps = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-4xl font-bold mb-2">How it works</h1>
//       <p className="text-lg text-gray-600 mb-8">Transform Words Into Stunning Images</p>
//       <div className="space-y-4 w-full max-w-3xl text-sm">
//         <div className="flex items-center gap-4 p-5 px-8 bg-white rounded-lg shadow-md border">
//           <img width={40} src={assets.download_icon} alt="" />
//           <div>
//             <h2 className="text-xl font-medium">Describe Your Vision</h2>
//             <p className="text-gray-500">"Type a phrase, sentence, or paragraph that describes the image you want to create."</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-4 p-5 px-8 bg-white rounded-lg shadow-md border">
//           <img width={40} src={assets.download_icon} alt="" />
//           <div>
//             <h2 className="text-xl font-medium">Watch the Magic</h2>
//             <p className="text-gray-500">"Our AI-powered engine will transform your text into a high-quality, unique image in seconds."</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-4 p-5 px-8 bg-white rounded-lg shadow-md border">
//           <img width={40} src={assets.download_icon} alt="" />
//           <div>
//             <h2 className="text-xl font-medium">Download & Share</h2>
//             <p className="text-gray-500">"Instantly download your creation or share it with the world directly from our platform."</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }