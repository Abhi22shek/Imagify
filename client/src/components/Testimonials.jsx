import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center my-20 py-12"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-text-primary">Customer testimonials</h1>
            <p className="text-text-secondary mb-12">What Our Users Are Saying</p>
            <div className="flex flex-wrap gap-6">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="bg-primary p-12 rounded-lg shadow-md border border-secondary w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all duration-300">
                        <div className="flex flex-col items-center">
                            <img src={testimonial.image} alt='' className="rounded-full w-14" />
                            <h2 className="text-xl font-semibold mt-3 text-text-primary">{testimonial.name}</h2>
                            <p className="text-text-secondary mb-4">{testimonial.role}</p>
                            <div className="flex mb-4">
                                {Array(testimonial.stars).fill('').map((item, index) => (
                                    <img key={index} src={assets.rating_star} alt='' />
                                ))}
                            </div>
                            <p className="text-center text-sm text-text-secondary">{testimonial.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Testimonials