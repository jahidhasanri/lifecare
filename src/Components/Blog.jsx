import React from 'react';

const Blog = () => {
    const datas=[
        {
          "title": "The Importance of a Balanced Diet",
          "author": "Dr. Emily Carter",
          "date": "2025-03-04",
          "image": "https://example.com/balanced-diet.jpg",
          "description": "A well-balanced diet is essential for maintaining good health. Learn about the key nutrients and how they impact your body.",
          "content": "A balanced diet includes a variety of foods from all food groups: proteins, carbohydrates, fats, vitamins, and minerals. Eating a mix of fruits, vegetables, lean meats, and whole grains can boost immunity and energy levels."
        },
        {
          "title": "Mental Health: Tips to Reduce Stress",
          "author": "Dr. John Smith",
          "date": "2025-03-02",
          "image": "https://example.com/mental-health.jpg",
          "description": "Managing stress is crucial for a healthy mind. Discover effective ways to reduce stress and improve mental well-being.",
          "content": "To reduce stress, engage in activities such as meditation, exercise, and proper sleep. Social interactions and mindfulness techniques also play a vital role in mental health."
        },
        {
          "title": "The Benefits of Regular Exercise",
          "author": "Sarah Johnson",
          "date": "2025-03-01",
          "image": "https://example.com/exercise-benefits.jpg",
          "description": "Exercise is not just about weight loss; it boosts heart health, strengthens muscles, and improves mood.",
          "content": "Regular physical activity can prevent chronic diseases such as heart disease and diabetes. Walking, jogging, and yoga are great ways to stay fit and active."
        },
        {
          "title": "How to Boost Your Immune System Naturally",
          "author": "Dr. Michael Brown",
          "date": "2025-02-28",
          "image": "https://example.com/immune-system.jpg",
          "description": "A strong immune system can protect you from illnesses. Learn how to enhance immunity naturally.",
          "content": "Eating foods rich in vitamin C, getting enough sleep, staying hydrated, and managing stress can significantly improve your immune function."
        }
      ]
      
    return (
        <div>
            <div>
            <img className='h-[600px] ' 
                         src="https://i.ibb.co.com/5hWbGPKV/doctor-wrking-their-clinic.jpg" 
                         alt="Doctor Working in Clinic" />
            </div>
            <div>
        {
            datas.map((data)=>{
                <div>
                    <p>{data.title}</p>
                </div>
            })
        }
            </div>
        </div>
    );
};

export default Blog;