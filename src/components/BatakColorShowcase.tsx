import React from 'react';
import { batakColors, batakGradients, batakColorClasses } from '@/lib/colors';

/**
 * Example component showcasing all the different ways to use Batak colors
 */
export const BatakColorShowcase: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-batak-brown-dark mb-8">
        Batak Color Palette Usage Examples
      </h1>

      {/* Method 1: Using Tailwind classes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-batak-brown-dark">
          Method 1: Tailwind Classes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-batak-brown-light text-batak-brown-dark rounded-lg">
            <h3 className="font-semibold">Light Brown Card</h3>
            <p>Using: bg-batak-brown-light text-batak-brown-dark</p>
          </div>
          <div className="p-4 bg-batak-brown-dark text-batak-cream rounded-lg">
            <h3 className="font-semibold">Dark Brown Card</h3>
            <p>Using: bg-batak-brown-dark text-batak-cream</p>
          </div>
          <div className="p-4 bg-batak-cream text-batak-brown-dark border border-batak-brown-medium rounded-lg">
            <h3 className="font-semibold">Cream Card</h3>
            <p>Using: bg-batak-cream text-batak-brown-dark border-batak-brown-medium</p>
          </div>
        </div>
      </section>

      {/* Method 2: Using predefined color combinations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-batak-brown-dark">
          Method 2: Predefined Combinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${batakColorClasses.combinations.primaryCard}`}>
            <h3 className="font-semibold">Primary Card</h3>
            <p>Using: batakColorClasses.combinations.primaryCard</p>
          </div>
          <div className={`p-4 rounded-lg ${batakColorClasses.combinations.darkCard}`}>
            <h3 className="font-semibold">Dark Card</h3>
            <p>Using: batakColorClasses.combinations.darkCard</p>
          </div>
        </div>
      </section>

      {/* Method 3: Using CSS variables with style prop */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-batak-brown-dark">
          Method 3: CSS Variables (Inline Styles)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div 
            className="p-4 rounded-lg"
            style={{ 
              backgroundColor: 'var(--batak-brown-medium)', 
              color: 'var(--batak-white)' 
            }}
          >
            <h3 className="font-semibold">Medium Brown</h3>
            <p>Using CSS variables in style prop</p>
          </div>
          <div 
            className="p-4 rounded-lg"
            style={{ 
              backgroundColor: 'var(--batak-brown-light-50)', 
              color: 'var(--batak-brown-dark)' 
            }}
          >
            <h3 className="font-semibold">Light Brown 50% Alpha</h3>
            <p>Using alpha variant</p>
          </div>
          <div 
            className="p-4 rounded-lg"
            style={{ 
              backgroundColor: 'var(--batak-brown-muted)', 
              color: 'var(--batak-white)' 
            }}
          >
            <h3 className="font-semibold">Brown Muted (75% Alpha)</h3>
            <p>Using muted variant</p>
          </div>
        </div>
      </section>

      {/* Method 4: Using JavaScript color objects */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-batak-brown-dark">
          Method 4: JavaScript Color Objects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            className="p-4 rounded-lg"
            style={{ 
              backgroundColor: batakColors.brown.soft,
              color: batakColors.neutral.white 
            }}
          >
            <h3 className="font-semibold">Soft Brown</h3>
            <p>Using: batakColors.brown.soft</p>
          </div>
          <div 
            className="p-4 rounded-lg"
            style={{ 
              backgroundColor: batakColors.light.cream,
              color: batakColors.brown.deep 
            }}
          >
            <h3 className="font-semibold">Cream Background</h3>
            <p>Using: batakColors.light.cream</p>
          </div>
        </div>
      </section>

      {/* Method 5: Gradients */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-batak-brown-dark">
          Method 5: Gradients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-batak-gradient text-batak-cream rounded-lg">
            <h3 className="font-semibold">Tailwind Gradient</h3>
            <p>Using: bg-batak-gradient</p>
          </div>
          <div 
            className="p-4 rounded-lg text-white"
            style={{ background: batakGradients.horizontal }}
          >
            <h3 className="font-semibold">Horizontal Gradient</h3>
            <p>Using: batakGradients.horizontal</p>
          </div>
          <div 
            className="p-4 rounded-lg text-white"
            style={{ background: batakGradients.radial }}
          >
            <h3 className="font-semibold">Radial Gradient</h3>
            <p>Using: batakGradients.radial</p>
          </div>
        </div>
      </section>

      {/* Method 6: Text and border gradients */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-batak-brown-dark">
          Method 6: Special Effects
        </h2>
        <div className="space-y-4">
          <div className="p-4 bg-batak-white rounded-lg">
            <h3 className="text-4xl font-bold text-gradient-batak mb-2">
              Gradient Text Effect
            </h3>
            <p className="text-batak-brown-dark">Using: text-gradient-batak class</p>
          </div>
          <div className="p-4 bg-batak-gray-light border-gradient-batak rounded-lg">
            <h3 className="font-semibold text-batak-brown-dark">Gradient Border</h3>
            <p className="text-batak-brown-dark">Using: border-gradient-batak class</p>
          </div>
        </div>
      </section>

      {/* Color palette reference */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-batak-brown-dark">
          Complete Color Palette
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {Object.entries(batakColors).map(([category, colors]) => (
            <div key={category} className="space-y-2">
              <h4 className="text-sm font-medium text-batak-brown-dark capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h4>
              {typeof colors === 'object' ? (
                Object.entries(colors).map(([name, color]) => (
                  <div key={name} className="space-y-1">
                    <div 
                      className="w-full h-8 rounded border border-gray-300"
                      style={{ backgroundColor: color }}
                      title={`${name}: ${color}`}
                    />
                    <p className="text-xs text-batak-brown-dark">{name}</p>
                  </div>
                ))
              ) : (
                <div className="space-y-1">
                  <div 
                    className="w-full h-8 rounded border border-gray-300"
                    style={{ backgroundColor: colors }}
                    title={`${category}: ${colors}`}
                  />
                  <p className="text-xs text-batak-brown-dark">{category}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BatakColorShowcase;
