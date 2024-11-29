'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import {
  Viewer3DContainer,
  ModelContainer,
  ControlPanel,
  ViewOptions,
  MaterialSelector,
  MeasurementTools,
  ViewModeButtons,
  InfoOverlay
} from '../../styles/property/MarketplaceProperty3DViewerStyles';
import { useMarketplaceProperty3DViewer } from '../../utils/property/MarketplaceProperty3DViewerUtils';

function MarketplaceProperty3DViewer() {
  const { theme } = useTheme();
  const {
    modelState,
    selectedMaterial,
    measurements,
    viewMode,
    handleRotation,
    handleZoom,
    handleMaterialChange,
    handleMeasurement,
    toggleViewMode,
    modelInfo
  } = useMarketplaceProperty3DViewer();

  return (
    <GradientBackground theme={theme}>
      <Viewer3DContainer theme={theme}>
        <ModelContainer>
          <div className="model-viewport">
            {/* Integração com biblioteca 3D (Three.js/Babylon.js) */}
          </div>
        </ModelContainer>

        <ControlPanel>
          <ViewModeButtons>
            <button onClick={() => toggleViewMode('wireframe')}>Wireframe</button>
            <button onClick={() => toggleViewMode('textured')}>Texturas</button>
            <button onClick={() => toggleViewMode('floorplan')}>Planta</button>
          </ViewModeButtons>

          <MaterialSelector>
            <h4>Materiais</h4>
            <select value={selectedMaterial} onChange={handleMaterialChange}>
              <option value="original">Original</option>
              <option value="marble">Mármore</option>
              <option value="wood">Madeira</option>
              <option value="ceramic">Cerâmica</option>
            </select>
          </MaterialSelector>

          <MeasurementTools>
            <h4>Medições</h4>
            <button onClick={() => handleMeasurement('distance')}>Distância</button>
            <button onClick={() => handleMeasurement('area')}>Área</button>
            <div className="measurements-display">
              {measurements.map((measurement, index) => (
                <div key={index} className="measurement-item">
                  {measurement.type}: {measurement.value}
                </div>
              ))}
            </div>
          </MeasurementTools>
        </ControlPanel>

        <ViewOptions>
          <button onClick={() => handleRotation('left')}>Girar Esquerda</button>
          <button onClick={() => handleRotation('right')}>Girar Direita</button>
          <button onClick={() => handleZoom('in')}>Zoom +</button>
          <button onClick={() => handleZoom('out')}>Zoom -</button>
        </ViewOptions>

        <InfoOverlay>
          <h3>{modelInfo.name}</h3>
          <p>{modelInfo.description}</p>
          <ul>
            {modelInfo.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </InfoOverlay>
      </Viewer3DContainer>
    </GradientBackground>
  );
}

export default MarketplaceProperty3DViewer;
