import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const datas = [
        {
          "title": "The Importance of a Balanced Diet",
          "author": "Dr. Emily Carter",
          "date": "2025-03-04",
          "image": "https://i.ibb.co/C3vSFvZT/young-bearded-man-with-striped-shirt.jpg",
          "description": "A well-balanced diet is essential for maintaining good health. Learn about the key nutrients and how they impact your body.",
          "content": "A balanced diet includes a variety of foods from all food groups: proteins, carbohydrates, fats, vitamins, and minerals. Eating a mix of fruits, vegetables, lean meats, and whole grains can boost immunity and energy levels.",
          "link": "https://www.maxhealthcare.in/blogs/what-is-a-balanced-diet"
       
        },
        {
          "title": "Mental Health: Tips to Reduce Stress",
          "author": "Dr. John Smith",
          "date": "2025-03-02",
          "image": "https://i.ibb.co/C3vSFvZT/young-bearded-man-with-striped-shirt.jpg",
          "description": "Managing stress is crucial for a healthy mind. Discover effective ways to reduce stress and improve mental well-being.",
          "content": "To reduce stress, engage in activities such as meditation, exercise, and proper sleep. Social interactions and mindfulness techniques also play a vital role in mental health.",
          "link": "https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/tips-to-reduce-stress/"
        },
        {
          "title": "The Benefits of Regular Exercise",
          "author": "Sarah Johnson",
          "date": "2025-03-01",
          "image": "https://i.ibb.co/C3vSFvZT/young-bearded-man-with-striped-shirt.jpg",
          "description": "Exercise is not just about weight loss; it boosts heart health, strengthens muscles, and improves mood.",
          "content": "Regular physical activity can prevent chronic diseases such as heart disease and diabetes. Walking, jogging, and yoga are great ways to stay fit and active.",
          "link":"http://mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389"
        },
        {
          "title": "How to Boost Your Immune System Naturally",
          "author": "Dr. Michael Brown",
          "date": "2025-02-28",
          "image": "https://i.ibb.co/C3vSFvZT/young-bearded-man-with-striped-shirt.jpg",
          "description": "A strong immune system can protect you from illnesses. Learn how to enhance immunity naturally.",
          "content": "Eating foods rich in vitamin C, getting enough sleep, staying hydrated, and managing stress can significantly improve your immune function.",
          "link":"https://www.health.harvard.edu/staying-healthy/how-to-boost-your-immune-system"
        }
    ];
      
    return (
       <div className='pb-[300px]'>
        <h2 className='text-center font-bold text-2xl mb-6'>Our Blog</h2>
         <div className="container mx-auto md:grid md:grid-cols-2 gap-6 h-[900px] ">
            {/* Banner Image */}
            <div className="">
                <img className='h-[951px] w-full rounded-xl ' 
                     src="https://i.ibb.co/5hWbGPKV/doctor-wrking-their-clinic.jpg" 
                     alt="Doctor Working in Clinic" />
            </div>

            {/* Blog Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[50%] ">
                {
                    datas.map((data, index) => (
                        <div key={index} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full">
    <img className="w-full h-[200px] rounded-lg mb-4" src={data.image} alt={data.title} />
    <div className="flex-grow">
        <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
        <p className="text-sm text-gray-500">By {data.author} | {data.date}</p>
        <p className="text-gray-700 mt-2 mb-6">{data.description}</p>
    </div>
    <Link to={data.link} target="_blank" className="mt-auto px-4 py-2 text-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
        Read More
    </Link>
</div>
                    ))
                }
            </div>
        </div>
       </div>
    );
};

export default Blog;
