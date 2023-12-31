import React from 'react';
import { Slider } from "./ui/slider"

// Define the prop type
interface SongPositionSliderProps {
  onPositionChange: (newPosition: number) => void;
  duration: number; // Total duration of the song (in seconds)
  position: number;
  selectedTheme: string;
}

function SongPositionSlider({ selectedTheme, onPositionChange, duration, position }: SongPositionSliderProps) {

  // Handle position change
  const handlePositionChange = (values: number[]) => {
    if(values[0] !== duration){
      const newPosition = values[0];
      position = newPosition;
      onPositionChange(newPosition);
    } else {
      values[0] = duration - 1000;
    }
  };

  return (
    <div className="flex flex-row items-center" style={{ minWidth: '200px' }}>
      <div className='pb-1'>{formatTime(position)}</div>
      <div className="w-full px-4">
        <Slider selectedTheme={selectedTheme} defaultValue={[position]} value={[position]} min={0} max={duration} step={Math.floor(duration / 1000)} onValueChange={handlePositionChange}/>
      </div>
      <div className='pb-1'>{formatTime(duration)}</div>
    </div>
  );
}

// Helper function to format time in seconds to mm:ss format
function formatTime(milliseconds: number): string {
  const minutes = Math.floor(milliseconds / 60000);
  const remainingSeconds = Math.floor(milliseconds % 60000 / 1000);
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}

export default SongPositionSlider;