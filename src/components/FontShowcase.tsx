export default function FontShowcase() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-heading text-gray-900 mb-2">
          Font Showcase
        </h1>
        <p className="text-lg text-gray-600 font-main">
          Demonstrating Architects Daughter and Andada Pro fonts
        </p>
      </div>

      {/* Heading Font Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold font-main text-gray-800 border-b pb-2">
          Architects Daughter (Heading Font)
        </h2>
        
        <div className="space-y-3">
          <h1 className="text-4xl font-heading text-gray-900">
            Large Heading - Aksara Batak
          </h1>
          <h2 className="text-3xl font-heading text-gray-800">
            Medium Heading - Traditional Script
          </h2>
          <h3 className="text-2xl font-heading text-gray-700">
            Small Heading - Cultural Heritage
          </h3>
          <h4 className="text-xl font-heading text-gray-600">
            Sub Heading - Learn & Explore
          </h4>
        </div>
      </section>

      {/* Main Font Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold font-main text-gray-800 border-b pb-2">
          Andada Pro (Main Font)
        </h2>
        
        <div className="space-y-4">
          <p className="text-lg font-main text-gray-900">
            <span className="font-bold">Bold text:</span> Aksara Batak is an ancient script used by the Batak people of North Sumatra, Indonesia.
          </p>
          
          <p className="text-base font-main text-gray-800">
            <span className="font-medium">Medium weight:</span> This beautiful script has been preserved through generations and continues to be an important part of Batak cultural identity.
          </p>
          
          <p className="text-sm font-main text-gray-700">
            <span className="font-normal">Regular text:</span> The script consists of various characters that represent sounds and meanings in the Batak language.
          </p>
          
          <p className="text-base font-main italic text-gray-600">
            Italic text: Exploring the rich heritage of Batak writing system through modern technology.
          </p>
        </div>
      </section>

      {/* Combined Usage Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold font-main text-gray-800 border-b pb-2">
          Combined Usage Examples
        </h2>
        
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h3 className="text-2xl font-heading text-batak-brown-dark">
            Learning Center
          </h3>
          <p className="text-base font-main text-gray-700 leading-relaxed">
            Discover the fascinating world of Aksara Batak through our interactive learning platform. 
            Each character tells a story, each word carries the wisdom of ancestors.
          </p>
          
          <div className="flex gap-4">
            <span className="text-sm font-main font-medium text-batak-brown-medium">
              Traditional
            </span>
            <span className="text-sm font-main font-medium text-batak-brown-medium">
              Cultural
            </span>
            <span className="text-sm font-main font-medium text-batak-brown-medium">
              Heritage
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
