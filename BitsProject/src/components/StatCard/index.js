import React from 'react'

const Stats = () => {
  return (
    <div >
      <h1 className='flex justify-center text-gray-800 text-2xl font-bold'>Users</h1>
      <section className="text-gray-600 body-font">

        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">

                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
                <p className="leading-relaxed">"I recently purchased a product from this ecommerce website, and I couldn't be happier with my experience. The entire process, from browsing the website to placing the order and receiving it, was seamless. The product arrived on time and was exactly as described. I highly recommend this website for all your online shopping needs!"</p>
                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Carlos </h2>
                
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
                <p className="leading-relaxed">"I've been a loyal customer of this ecommerce website for several years now, and I'm always impressed with their excellent service. The website is user-friendly, making it easy to find what I'm looking for. The products are of great quality, and the prices are competitive. The customer support team is also top-notch, always prompt and helpful. I wouldn't hesitate to recommend this website to anyone."</p>
                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Foss Sara</h2>
                
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
                <p className="leading-relaxed">"I can't say enough good things about this ecommerce website. Their commitment to customer satisfaction is outstanding. I had a question about a product, and their customer support team responded promptly with helpful information. The website itself is well-designed, making it enjoyable to browse through their extensive collection. I've made multiple purchases and have always been impressed with the quality and value. Highly recommended!"</p>
                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Smith</h2>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stats