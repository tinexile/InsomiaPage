import React from 'react'

const Insomnia = () => {

    const cardData = [
        {
          title: "Holistic Solutions for Insomnia",
          content: "Range of treatments including medication, CBT, Yogic Exercises, Meditation, Sound Therapy, Acupuncture, and Energy Healing."
        },
        {
          title: "Understanding Insomnia in India",
          content: "Insomnia is a common sleep disorder with significant cases in India, impairing quality of life and contributing to medical and psychological issues."
        },
        {
          title: "Statistics of Insomnia in India",
          content: "33% of the adult population suffers from insomnia symptoms, with higher prevalence in females and urban residents."
        },
        {
          title: "Causes of Insomnia",
          content: "Stress, disrupted circadian rhythms, poor sleep habits, and overeating late in the evening."
        },
        {
          title: "Factors Aggravating Sleep Problems",
          content: "Age, lifestyle choices (caffeine, nicotine), medications, and mental health disorders."
        },
        {
          title: "Medical Treatments for Insomnia",
          content: "Medications like benzodiazepines, non-benzodiazepine hypnotics, antidepressants, and cognitive behavioral therapy (CBT)."
        },
        {
          title: "Holistic Remedies for Insomnia",
          content: "Yoga, meditation, aromatherapy, herbal remedies, acupuncture, and diet/nutrition."
        },
        {
          title: "Deep Relaxation Techniques",
          content: "Yoga Nidra, acupuncture, meditation, sound therapy, and energy healing."
        }
      ];
      

  return (
<>
<div className="min-h-screen bg-gray-100 p-5">
<h1 className="text-4xl font-bold text-center my-8">Holistic Solutions for Insomnia</h1>
      <div className="container mx-auto grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">{card.title}</h2>
            <p className="text-gray-700 mb-4">{card.content}</p>
            <div className="text-center">
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
</>
  )
}

export default Insomnia