import React, { useState } from 'react';
import { KnittingPreview } from './components/KnittingPreview';
import { ColorPicker } from './components/ColorPicker';
import { AIColorSuggestions } from './components/AIColorSuggestions';
import { PatternSelector } from './components/PatternSelector';
import { patterns } from './data/patterns';
import type { PatternType } from './data/patterns';
import { sectionPalettes } from './data/palettes';

function App() {
  const [selectedPattern, setSelectedPattern] = useState<PatternType>('pantouffle');
  const [selectedSection, setSelectedSection] = useState<string | null>('section-top');
  const [sectionColors, setSectionColors] = useState<Record<string, string>>({});

  const handleSectionClick = (id: string) => {
    setSelectedSection(id);
  };

  const handleColorSelect = (color: string) => {
    if (selectedSection) {
      setSectionColors(prev => ({
        ...prev,
        [selectedSection]: color
      }));
    }
  };

  const suggestColors = () => {
    const newColors: Record<string, string> = {};
    patterns[selectedPattern].sections.forEach(section => {
      const palette = sectionPalettes[section.paletteType];
      const randomColor = palette[Math.floor(Math.random() * palette.length)];
      newColors[section.id] = randomColor.color;
    });
    setSectionColors(newColors);
  };

  const handleThemeColors = (colors: Record<string, string>) => {
    setSectionColors(colors);
  };

  const selectedSectionData = selectedSection
    ? patterns[selectedPattern].sections.find(s => s.id === selectedSection)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Knitting Color Visualizer
        </h1>

        {/* <PatternSelector
          selectedPattern={selectedPattern}
          onPatternSelect={setSelectedPattern}
        /> */}
                  
        <div className="mt-6 flex justify-center">
          <AIColorSuggestions 
            onSuggest={suggestColors}
            onThemeColors={handleThemeColors}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <KnittingPreview
              pattern={selectedPattern}
              sectionColors={sectionColors}
              onSectionClick={handleSectionClick}
              selectedSection={selectedSection}
            />
  
          </div>
          
          <div className="space-y-6">
            {selectedSectionData ? (
              <ColorPicker
                colors={sectionPalettes[selectedSectionData.paletteType]}
                selectedColor={sectionColors[selectedSectionData.id] || '#FFFFFF'}
                onColorSelect={handleColorSelect}
                sectionName={selectedSectionData.name}
              />
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Select a Section
                </h3>
                <p className="text-gray-600">
                  Click on any part of the pattern to see available colors for that section.
                </p>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;